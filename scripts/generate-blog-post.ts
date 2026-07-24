import { readFileSync, writeFileSync, existsSync, appendFileSync } from 'node:fs';
import path from 'node:path';
import { generateText } from 'ai';
import { site } from '../src/config/site.config.ts';

const ROOT = path.resolve(import.meta.dirname, '..');
const CALENDAR_PATH = path.join(ROOT, 'src/content/blog-calendar.json');
const BLOG_DIR = path.join(ROOT, 'src/content/blog');

interface CalendarEntry {
  slug: string;
  title: string;
  description: string;
  image: { src: string; alt: string; width: number; height: number };
  relatedServices: string[];
  brief: string;
  status: 'pending' | 'published';
  publishedDate?: string;
}

function loadCalendar(): CalendarEntry[] {
  return JSON.parse(readFileSync(CALENDAR_PATH, 'utf-8'));
}

function saveCalendar(entries: CalendarEntry[]) {
  writeFileSync(CALENDAR_PATH, JSON.stringify(entries, null, 2) + '\n', 'utf-8');
}

function todayISO(): string {
  return new Date().toISOString().slice(0, 10);
}

function toFrontmatterYaml(entry: CalendarEntry, publishDate: string): string {
  const relatedYaml = entry.relatedServices.length
    ? entry.relatedServices.map((s) => `  - "${s}"`).join('\n')
    : '';
  return `---
title: ${JSON.stringify(entry.title)}
description: ${JSON.stringify(entry.description)}
publishDate: ${publishDate}
image:
  src: ${JSON.stringify(entry.image.src)}
  alt: ${JSON.stringify(entry.image.alt)}
  width: ${entry.image.width}
  height: ${entry.image.height}
relatedServices:
${relatedYaml || '  []'}
---
`;
}

async function generateBody(entry: CalendarEntry): Promise<string> {
  const systemPrompt = `Eres un redactor especializado en contenido SEO para "${site.name}", una empresa real de reparación e instalación de tejados en Vitoria-Gasteiz y la comarca de Álava, con ${site.yearsExperience} años de experiencia. Escribes en español de España, con un tono cercano, práctico y honesto, sin exagerar ni inventar cifras que no se puedan sostener. El artículo debe leerse como si lo hubiera escrito un profesional del sector con conocimiento real, no como marketing genérico.

Reglas estrictas de formato:
- Devuelve SOLO el cuerpo del artículo en Markdown, empezando directamente con un párrafo de introducción (NO repitas el título como encabezado H1, ya se muestra aparte).
- Usa encabezados ## (H2) para las secciones.
- No incluyas enlaces markdown de ningún tipo (ni internos ni externos).
- No inventes datos de contacto, precios de la competencia, normativa legal específica que no puedas verificar, ni estadísticas oficiales.
- Puedes mencionar de forma natural, sin ser repetitivo, que ${site.name} ofrece presupuesto gratuito, garantía por escrito y atiende en Vitoria-Gasteiz y los municipios de Álava, pero el artículo debe aportar información útil real, no ser un anuncio.
- Termina con un párrafo breve que conecte el tema con una llamada a la acción suave (revisión gratuita, contacto), sin ser agresivo comercialmente.`;

  const userPrompt = `Título del artículo: "${entry.title}"
Meta descripción / resumen: "${entry.description}"

Instrucciones de contenido para este artículo:
${entry.brief}`;

  const { text } = await generateText({
    model: 'anthropic/claude-sonnet-4.6',
    system: systemPrompt,
    prompt: userPrompt,
  });

  return text.trim();
}

function validateBody(body: string): void {
  const wordCount = body.split(/\s+/).filter(Boolean).length;
  if (wordCount < 200) {
    throw new Error(`El artículo generado es demasiado corto (${wordCount} palabras). Abortando sin publicar.`);
  }
  if (!body.includes('##')) {
    throw new Error('El artículo generado no contiene encabezados H2. Abortando sin publicar.');
  }
  if (/\]\(/.test(body)) {
    throw new Error('El artículo generado contiene enlaces markdown, lo cual está prohibido. Abortando sin publicar.');
  }
}

async function main() {
  const calendar = loadCalendar();
  const nextEntry = calendar.find((e) => e.status === 'pending');

  if (!nextEntry) {
    console.log('No quedan artículos pendientes en el calendario editorial. Nada que publicar esta semana.');
    if (process.env.GITHUB_OUTPUT) {
      appendFileSync(process.env.GITHUB_OUTPUT, `published=false\n`);
    }
    return;
  }

  const outputPath = path.join(BLOG_DIR, `${nextEntry.slug}.md`);
  if (existsSync(outputPath)) {
    throw new Error(`El archivo ${outputPath} ya existe. Revisa el calendario, hay una inconsistencia.`);
  }

  console.log(`Generando artículo: "${nextEntry.title}" (${nextEntry.slug})`);
  const body = await generateBody(nextEntry);
  validateBody(body);

  const publishDate = todayISO();
  const fileContent = toFrontmatterYaml(nextEntry, publishDate) + '\n' + body + '\n';
  writeFileSync(outputPath, fileContent, 'utf-8');

  nextEntry.status = 'published';
  nextEntry.publishedDate = publishDate;
  saveCalendar(calendar);

  console.log(`Artículo publicado en ${outputPath}`);

  // Expone el slug al workflow de GitHub Actions (para el paso de ping de indexación)
  if (process.env.GITHUB_OUTPUT) {
    appendFileSync(process.env.GITHUB_OUTPUT, `slug=${nextEntry.slug}\n`);
    appendFileSync(process.env.GITHUB_OUTPUT, `published=true\n`);
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});

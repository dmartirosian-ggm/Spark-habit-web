import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { glob } from 'astro/loaders';

export const CLUSTERS = ['chore-charts', 'reward-charts', 'potty-training-chart', 'toddler-routines'] as const;

// Long evergreen guides, one per cluster. The file name is the URL: /chore-charts/ etc.
const hubs = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/hubs' }),
  schema: z.object({
    title: z.string().max(60), // <title>
    description: z.string().max(160),
    h1: z.string(),
    navLabel: z.string(), // short name for nav, footer, breadcrumbs
    keyword: z.string(),
    order: z.number(),
    printables: z.array(z.string()).default([]),
    updated: z.coerce.date(),
  }),
});

// Posts answer one keyword each and belong to one hub. URL: /blog/<file name>/
const blog = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(), // H1
    seoTitle: z.string().max(60).optional(),
    description: z.string().max(160),
    cluster: z.enum(CLUSTERS),
    keyword: z.string(),
    // Subheading the post is listed under on its hub, e.g. "By age" or "Bedtime".
    group: z.string(),
    printable: z.string().optional(),
    published: z.coerce.date(),
    updated: z.coerce.date().optional(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { hubs, blog };

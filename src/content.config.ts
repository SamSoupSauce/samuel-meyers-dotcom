import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const announcements = defineCollection({
	// Load Markdown and MDX files in the `src/content/announcements/` directory.
	loader: glob({ base: './src/content/announcements', pattern: '**/*.{md,mdx}' }),
	// Type-check frontmatter using a schema
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			description: z.string(),
			// Transform string to Date object
			pubDate: z.coerce.date(),
			updatedDate: z.coerce.date().optional(),
			heroImage: z.optional(image()),
			image: z
				.object({
					url: z.string(),
					alt: z.string().optional(),
				})
				.optional(),
			author: z.string().optional(),
			tags: z.array(z.string()).optional(),
		}),
});

export const collections = { announcements };

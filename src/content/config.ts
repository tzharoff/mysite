import { defineCollection, z } from 'astro:content';

const journal = defineCollection({
    schema: z.object({
        title: z.string(),
        date: z.coerce.date(),
    }),
});

export const collections = {
    journal,
};
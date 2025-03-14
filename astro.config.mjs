// @ts-check
// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import rehypeKatex from 'rehype-katex'; // relevant
import remarkMath from 'remark-math';   // relevant
import rehypeCitation from 'rehype-citation';

import react from '@astrojs/react';

import * as glob from 'glob';


const REFERENCES_FILES = glob.glob("public/references/**/*.bib");


// https://astro.build/config
export default defineConfig({
    site: 'https://cansource.org',
    markdown: {
        rehypePlugins: [
            [rehypeCitation, {
                bibliography: REFERENCES_FILES,
                csl: "src/styles/ieee.csl",
                linkCitations: true
            }]
        ]
    },
    integrations: [
        mdx({
            remarkPlugins: [remarkMath], // relevant
            rehypePlugins: [rehypeKatex] // relevant
        }), 
        sitemap(), 
        react()
    ],
});
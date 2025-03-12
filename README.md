# CanSource Website

This repository contains the source code describing the CanSource website found at 
https://cansource.org. Changes to the main branch of this repository cause changes to be published
to the publicly available website.


## Contributing Articles

Article contributions can be made by following the process detailed at: [INSERT LINK](wompwomp).


## Developing the Website

The following sub-sections give important details on developing the CanSource website for potential
contributors. Note that we make a distinction between developers, who change the structure of the
website, and authors, who write articles published on the website. This information is primarily
pertinent to developers.

This website is built on-top of the framework Astro, and follows the conventions and tools laid out
in [their documentation](https://docs.astro.build).

### Repository Structure

The CanSource website repository has the following file structure

```text
├── .github/
├── public/
├── src/
│   ├── components/
│   ├── content/
│   ├── layouts/
│   └── pages/
├── astro.config.mjs
├── README.md
├── package.json
└── tsconfig.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

The `src/content/` directory contains "collections" of related Markdown and MDX documents. Use `getCollection()` to retrieve posts from `src/content/blog/`, and type-check your frontmatter using an optional schema. See [Astro's Content Collections docs](https://docs.astro.build/en/guides/content-collections/) to learn more.

Static assets, like images, can be placed in the `public/` directory.

### Previewing

Previewing the website on a local machine is done through [npm](https://www.npmjs.com/). The
following commands are run in the root of the project and may be used to preview the website on your
own computer.

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |


### Hosting Action

The CanSource website is hosted through [GitHub pages](https://pages.github.com/) and is 
automatically updated on changes to `main` with a [GitHub action](https://github.com/features/actions)
found at [.github/workflows/astro.yml](./.github/workflows/astro.yml).
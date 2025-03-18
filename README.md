# CanSource Website

This repository contains the source code describing the CanSource website found at 
https://cansource.org. Changes to the main branch of this repository cause changes to be published
to the publicly available website.

## Contributing Articles

Article contributions are welcomed from anyone. A full guide for how to contribute will be given on
the CanSource website when submissions open. (See [issue #11](https://github.com/CanSource/website/issues/11)
on the [website issue tracker](https://github.com/CanSource/website/issues) for more information.)


## Reporting Issues

Issues with the website may be reported through [the issue tracker](https://github.com/CanSource/website/issues).


## Developing

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

The `src/pages/` directory contains `.html` and `.md` files that are included as apart of the 
website. Each page is exposed publicly based on its file name.

The `src/components/` supplies any Astro/React/Vue/Svelte/Preact components that may be used 
throughout the website.

The `src/content/` directory contains "collections" of related Markdown and MDX documents.

The `public/` directory contains public content such as images, fonts, and references. It serves as
a catch-all for content that should be available to website users, but isn't page content that needs
to be manipulated by the Astro build system.


### Previewing

Previewing the website on a local machine is done through [npm](https://www.npmjs.com/). A typical
previewing session would use the following commands

```bash
npm install
npm run dev
```

Where `npm install` updates the npm dependencies on the local machine. These dependencies are
detailed in `package.json` and `package-lock.json` in the root level of the website repository. 
`npm run dev` starts a local host of the website at the address `localhost:4321` which may opened
in a browser of your choice.

A full set of applicable npm commands is given below.

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |


### Hosting

The CanSource website is hosted through [GitHub pages](https://pages.github.com/) and is 
automatically updated on changes to `main` with a [GitHub action](https://github.com/features/actions)
found at [.github/workflows/astro.yml](./.github/workflows/astro.yml).
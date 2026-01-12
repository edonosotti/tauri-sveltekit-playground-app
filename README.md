[![CodeFactor](https://www.codefactor.io/repository/github/edonosotti/tauri-sveltekit-playground-app/badge)](https://www.codefactor.io/repository/github/edonosotti/tauri-sveltekit-playground-app)
[![Codacy Badge](https://app.codacy.com/project/badge/Grade/b479b837f6bb417fb70b8b134c714815)](https://app.codacy.com/gh/edonosotti/tauri-sveltekit-playground-app/dashboard?utm_source=gh&utm_medium=referral&utm_content=&utm_campaign=Badge_grade)
[![Security Rating](https://sonarcloud.io/api/project_badges/measure?project=edonosotti_tauri-sveltekit-playground-app&metric=security_rating)](https://sonarcloud.io/summary/new_code?id=edonosotti_tauri-sveltekit-playground-app)
[![Technical Debt](https://sonarcloud.io/api/project_badges/measure?project=edonosotti_tauri-sveltekit-playground-app&metric=sqale_index)](https://sonarcloud.io/summary/new_code?id=edonosotti_tauri-sveltekit-playground-app)
[![Maintainability Rating](https://sonarcloud.io/api/project_badges/measure?project=edonosotti_tauri-sveltekit-playground-app&metric=sqale_rating)](https://sonarcloud.io/summary/new_code?id=edonosotti_tauri-sveltekit-playground-app)
[![Vulnerabilities](https://sonarcloud.io/api/project_badges/measure?project=edonosotti_tauri-sveltekit-playground-app&metric=vulnerabilities)](https://sonarcloud.io/summary/new_code?id=edonosotti_tauri-sveltekit-playground-app)
[![Code Smells](https://sonarcloud.io/api/project_badges/measure?project=edonosotti_tauri-sveltekit-playground-app&metric=code_smells)](https://sonarcloud.io/summary/new_code?id=edonosotti_tauri-sveltekit-playground-app)
[![Reliability Rating](https://sonarcloud.io/api/project_badges/measure?project=edonosotti_tauri-sveltekit-playground-app&metric=reliability_rating)](https://sonarcloud.io/summary/new_code?id=edonosotti_tauri-sveltekit-playground-app)
[![Bugs](https://sonarcloud.io/api/project_badges/measure?project=edonosotti_tauri-sveltekit-playground-app&metric=bugs)](https://sonarcloud.io/summary/new_code?id=edonosotti_tauri-sveltekit-playground-app)
![GitHub Workflow (release, master)](https://github.com/edonosotti/tauri-sveltekit-playground-app/actions/workflows/release.yml/badge.svg?branch=master)
![GitHub Workflow (build, master)](https://github.com/edonosotti/tauri-sveltekit-playground-app/actions/workflows/build.yml/badge.svg?branch=master)

# Tauri + SvelteKit + Flowbite UI Kit playground app

A skeleton multi-platform desktop application built with:

 * [`Tauri`](https://tauri.app)
 * [`SvelteKit`](https://kit.svelte.dev)
 * [`Flowbite Svelte (UI kit)`](https://flowbite-svelte.com)
 * [`Svelte-Heros-v2 (Icons)`](https://svelte-heros-v2.codewithshin.com)

Use this application as a playground to learn about portable
app development with `Tauri`. It was created to complement this
[article](https://medium.com/rockedscience/portable-desktop-apps-with-tauri-svelte-tailwind-52b806280426).

## Features

 * Routing: [src/routes/+page.svelte](src/routes/+page.svelte)
   describes how to configure a router to programmatically
   switch between components in a Single Page Application
 * Events: [src/routes/+page.svelte](src/routes/+page.svelte)
   and [src/routes/Info.svelte](src/routes/Info.svelte)
   describe how to create event handlers and dispatch
   events across multiple components
 * Stores: [src/routes/+page.svelte](src/routes/+page.svelte),
   [src/routes/Welcome.svelte](src/routes/Welcome.svelte)
   and [src/routes/Info.svelte](src/routes/Info.svelte)
   describe how to use `context` and `stores` to persist
   the application state across multiple components and
   dinamically update the rendered view as the stored
   values get updated
 * App window customization: the `tauri.windows` section of
   [src-tauri/tauri.conf.json](src-tauri/tauri.conf.json)
   has been customized to set the title, the default size
   and initial positioning of the application window
 * UI Kit: `Flowbite Svelte` is used to rapidly design
   an interface for the application
 * Icons: the `Svelte-Heros-v2` icon set is used to
   improve the appearance of the user interface
 * TypeScript: the code of the components describes
   how to use TypeScript with SvelteKit

## Prerequisites

 * [`Rust 1.69.0`](https://www.rust-lang.org)
 * [`Node.JS 18.x.x LTS`](https://nodejs.org)

## Quickstart

 1. Start the local development server as described in the
    **Usage** paragraph
 2. Check the `Flowbite Svelte` docs to learn about the
    [components](https://flowbite-svelte.com/docs/components/accordion)
    available to build the `UI`
 3. Check the [Tailwind](https://tailwindcss.com/docs/installation)
    docs to learn about the `CSS` utility classes that are
    available to customize the `UI`
 4. Make some changes to the following files:
     * [`src/routes/Welcome.svelte`](src/routes/Welcome.svelte)
     * [`src/routes/Info.svelte`](src/routes/Info.svelte)
    the application will automatically update while it is
    running to display the changes

## Usage

To start the application in development mode, run:

```bash
$ npm ci
$ npm run tauri dev
```

depending on the computational capacity of your computer the first
compilation could take a few minutes. Once the development server
is started, you will get automated hot-reload and the next starts
of the application will be much faster, as long as no new Rust
code needs compilation.

## Release

To create a release for the current system architecture, run:

```bash
$ npm ci
$ npm run tauri build
```

For more information, check the official docs at:
https://tauri.app/v1/guides/building/

### Build in CI/CD pipelines

The offical docs offer a tutorial to build apps for
multiple targets using GitHub Actions:
https://tauri.app/v1/guides/building/cross-platform#tauri-github-action

## License

This code is distributed under the
[MIT](LICENSE) license.

Check this [Wikipedia page](https://en.wikipedia.org/wiki/MIT_License)
for further details on the license.

### EU law notice

Attempting to mandate some baseline security practices to improve
the safety of the software distributed in its territory, the EU
published a very poorly designed draft of a new law.
The draft in its current form threatens the very existence of
open source software, making it impractical for independent
developers to safely distribute software and code.

I appreciate the intent, but the execution was just terrible.
I am writing this note to raise the awarness and encourage
everyone to act.

Please read the following articles and support the cause
of the independent software development:

 * https://www.eff.org/deeplinks/2023/05/eus-proposed-cyber-resilience-act-raises-concerns-open-source-and-cybersecurity
 * https://avvocloud.net/blog/english/cyber-resilience-act-open-source
 * https://ec.europa.eu/info/law/better-regulation/have-your-say/initiatives/13410-Cyber-resilience-act-new-cybersecurity-rules-for-digital-products-and-ancillary-services/F3376627_en
 * https://blog.opensource.org/what-is-the-cyber-resilience-act-and-why-its-important-for-open-source/
 * https://hackaday.com/2023/04/21/the-cyber-resilience-act-threatens-open-source/

[![SonarQube Cloud](https://sonarcloud.io/images/project_badges/sonarcloud-light.svg)](https://sonarcloud.io/summary/new_code?id=edonosotti_tauri-sveltekit-playground-app)

# UI/UX Playground

Aman Balooni's static UX/UI design portfolio. The site is built with semantic HTML, Bootstrap 5, custom CSS, and vanilla JavaScript. It has no backend and no build step, so it can be hosted directly from GitHub Pages or any static web server.

## Run locally

From the repository root, start a local server:

```bash
python3 -m http.server 4173
```

Open <http://127.0.0.1:4173/> in a browser. Opening `index.html` directly also works, but a local server is recommended for testing links and assets.

There are no application dependencies to install. The `package.json` file only contains the repository metadata and the existing Playwright test dependency.

## Project structure

```text
index.html                 Portfolio home page
case-studies/              Detailed project case studies
blogs/                     Portfolio articles
assets/css/                Shared and page-specific stylesheets
assets/js/                 Navigation and interaction scripts
images/                    Portfolio imagery and illustrations
thank-you.html             Contact form confirmation page
```

Current case studies include CKE Restaurants, CredX, Ingredilens, Life at Zenesys, Life Bridge, and Turismo Transports. The writing section currently includes articles about funnel design and the future of UI/UX design.

## Deploy to GitHub Pages

1. Push the repository to GitHub.
2. Open **Settings > Pages**.
3. Under **Build and deployment**, choose **Deploy from a branch**.
4. Select the `main` branch and the repository root, then save.

All internal links use relative paths, so the site works from a GitHub Pages project URL as well as a custom domain.

## Updating the site

- Update portfolio copy, project links, credentials, and contact details in `index.html`.
- Edit the case studies in `case-studies/` and articles in `blogs/`.
- Shared homepage styles live in `assets/css/style.css`; page-specific styles live alongside it.
- Homepage interactions, mobile navigation, and scroll reveals are handled by `assets/js/script.js`.
- Keep asset paths relative to each page when adding images or links so GitHub Pages subpath deployments continue to work.

## External resources

The homepage loads Bootstrap, Bootstrap Icons, and Google Fonts from CDNs. A network connection is required for those resources to render with their intended styling when running the site locally.

# UI/UX Playground

Aman Balooni's static portfolio site, built with semantic HTML, Bootstrap 5, CSS, and vanilla JavaScript. It is ready for GitHub Pages and does not require a backend or build step.

## Run locally

Open `index.html` directly in a browser, or serve the repository root with any static server:

```bash
python3 -m http.server 4173
```

Then visit `http://127.0.0.1:4173/aman-portfolio/`.

## GitHub Codespaces

Open the repository in Codespaces, run the command above in the terminal, and open the forwarded port 4173. The site also works by opening `aman-portfolio/index.html` directly.

## Deploy to GitHub Pages

Push the repository to GitHub, then choose **Settings > Pages**, deploy from the `main` branch and select the repository root as the source. Because every reference is relative, the portfolio works from a project-page subpath.

## Updating content and visuals

- Edit portfolio copy, links, project names, articles, certifications, and education in `index.html`.
- The project and article visuals are intentionally CSS-built placeholders because the supplied reference image and raster assets are not present in the workspace. Replace each `.project-visual` or `.article-art` block with an `<img loading="lazy">` when final artwork is available.
- Change the design tokens at the top of `css/style.css` to update colors, fonts, spacing direction, and typography.
- Replace the placeholder email, phone, LinkedIn, Behance, Dribbble, and Figma URLs in `index.html` with live destinations.
- Mobile navigation and scroll-reveal behavior live in `js/script.js`.

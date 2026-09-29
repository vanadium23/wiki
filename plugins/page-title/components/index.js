// ChernoWiki site navbar: page title + static section links.
// Plain JS on purpose — no build step, no dist; the Quartz v5 loader
// imports this file directly (see package.json "exports").
// preact/jsx-runtime resolves from the repo root's node_modules (peer dep).
import { jsx, jsxs } from "preact/jsx-runtime"

// Static section links (mirror of the /graph landing navbar).
const NAV_LINKS = [
  { href: "/mine/", label: "Цитатник" },
  { href: "/forge/", label: "Заметки" },
  { href: "/meta/", label: "Мета" },
]

const PageTitle = ({ fileData, cfg, displayClass }) => {
  const title = cfg?.pageTitle ?? "ChernoWiki"
  // pathToRoot: relative prefix to the site root from this page's slug
  const segments = String(fileData?.slug ?? "")
    .split("/")
    .filter((s) => s !== "")
  const baseDir = segments.slice(0, -1).length
    ? segments
        .slice(0, -1)
        .map(() => "..")
        .join("/")
    : "."
  return jsxs("h2", {
    class: [displayClass, "page-title"].filter(Boolean).join(" "),
    children: [
      jsx("a", { href: baseDir, children: title }),
      jsxs("nav", {
        class: "page-title-nav",
        "aria-label": "Разделы",
        children: NAV_LINKS.map(({ href, label }) =>
          jsx("a", { class: "page-title-nav-link", href, children: label }),
        ),
      }),
    ],
  })
}

PageTitle.css = `
.page-title {
  font-size: 1.75rem;
  margin: 0;
  font-family: var(--titleFont);
}
.page-title-nav {
  display: inline-flex;
  gap: 1rem;
  margin-left: 1.5rem;
  font-size: 0.95rem;
  font-family: var(--codeFont);
  vertical-align: baseline;
}
.page-title-nav-link {
  color: var(--darkgray);
  opacity: 0.85;
}
.page-title-nav-link:hover {
  color: var(--secondary);
  opacity: 1;
}
@media (max-width: 800px) {
  .page-title-nav {
    display: none;
  }
}
`

const pageTitlePlugin = () => PageTitle

export { pageTitlePlugin as PageTitle, pageTitlePlugin as default }

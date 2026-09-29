import type {
  QuartzComponent,
  QuartzComponentProps,
  QuartzComponentConstructor,
} from "@quartz-community/types";
import { classNames } from "../util/lang";
import { pathToRoot } from "../util/path";
import { i18n } from "../i18n";

// ChernoWiki: section nav links shown next to the site title (mirrors the
// /graph landing navbar). Flat absolute slugs work from any depth.
const NAV_LINKS: Array<{ href: string; label: string }> = [
  { href: "/mine/", label: "Цитатник" },
  { href: "/forge/", label: "Заметки" },
  { href: "/meta/", label: "Мета" },
];

const PageTitle: QuartzComponent = ({ fileData, cfg, displayClass }: QuartzComponentProps) => {
  const locale = cfg?.locale ?? "en-US";
  const title = cfg?.pageTitle ?? i18n(locale).propertyDefaults.title;
  const baseDir = pathToRoot(fileData.slug as string);
  return (
    <h2 class={classNames(displayClass, "page-title")}>
      <a href={baseDir}>{title}</a>
      <nav class="page-title-nav" aria-label="Разделы">
        {NAV_LINKS.map(({ href, label }) => (
          <a class="page-title-nav-link" href={href}>
            {label}
          </a>
        ))}
      </nav>
    </h2>
  );
};

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
`;

export default (() => PageTitle) satisfies QuartzComponentConstructor;

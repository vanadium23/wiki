import type {
  QuartzComponent,
  QuartzComponentConstructor,
  QuartzComponentProps,
} from "@quartz-community/types"
import { joinSegments } from "@quartz-community/types"
import type { GraphLandingPageOptions } from "../pageType"
// @ts-expect-error - inline script import handled by tsup inline-script-loader
import graphLandingScript from "../scripts/graph-landing.inline.ts"
import styles from "./styles/graph-landing.scss"

interface MultilingualFields {
  locale?: string
  translationKey?: string
}

interface LocaleEntry {
  id: string
  nativeName?: string
}

interface MultilingualCfg {
  sourceLocale?: string
  locales?: LocaleEntry[]
}

interface OverlayCopy {
  labelsShow: string
  labelsHide: string
  relayout: string
  notes: string
  tags: string
  links: string
  countsTemplate: string
  lensAll: string
  lensTag: string
  lensFolder: string
  spacing: string
  zoom: string
  articles: string
  about: string
  themeToggle: string
  filtersToggle: string
  controls: string
  audioStop: string
  audioPlay: string
  folderRoot: string
  previewHint: string
  previewTagTemplate: string
  inspectOpen: string
  inspectOpenExternal: string
  inspectConnected: string
  inspectClose: string
  inspectEmpty: string
  folders: string
  tune: string
  nodeSize: string
  edgeWidth: string
}

interface LocaleToggleLink {
  id: string
  href: string
  label: string
  ariaLabel: string
}

function overlayCopyForLocale(localeId: string): OverlayCopy {
  if (localeId === "ko") {
    return {
      labelsShow: "라벨 보이기",
      labelsHide: "라벨 숨기기",
      relayout: "다시 정렬",
      notes: "노트",
      tags: "태그",
      links: "링크",
      countsTemplate: "{n} 노드 · {m} 엣지",
      lensAll: "전체",
      lensTag: "태그",
      lensFolder: "폴더",
      spacing: "Spacing",
      zoom: "Zoom",
      articles: "Writing",
      about: "About",
      themeToggle: "라이트/다크 모드 전환",
      filtersToggle: "필터",
      controls: "Controls",
      audioStop: "노래 끄기",
      audioPlay: "노래 켜기",
      folderRoot: "루트",
      previewHint: "클릭하면 연결이 열립니다",
      previewTagTemplate: "{n}개 노트",
      inspectOpen: "본문 읽기",
      inspectOpenExternal: "열기",
      inspectConnected: "연결",
      inspectClose: "닫기",
      inspectEmpty: "직접 연결된 별이 없습니다",
      folders: "폴더",
      tune: "Tune",
      nodeSize: "Node size",
      edgeWidth: "Edge width",
    }
  }

  // ChernoWiki: Russian copy for the ru locale
  if (localeId === "ru") {
    return {
      labelsShow: "Показать подписи",
      labelsHide: "Скрыть подписи",
      relayout: "Пересобрать",
      notes: "Заметки",
      tags: "Теги",
      links: "Ссылки",
      countsTemplate: "{n} узлов · {m} связей",
      lensAll: "Все",
      lensTag: "Теги",
      lensFolder: "Папки",
      spacing: "Spacing",
      zoom: "Zoom",
      articles: "Заметки",
      about: "Мета",
      themeToggle: "Светлая/тёмная тема",
      filtersToggle: "Фильтры",
      controls: "Controls",
      audioStop: "Выключить музыку",
      audioPlay: "Включить музыку",
      folderRoot: "Корень",
      previewHint: "Клик раскрывает связи",
      previewTagTemplate: "{n} заметок",
      inspectOpen: "Читать заметку",
      inspectOpenExternal: "Открыть",
      inspectConnected: "Связи",
      inspectClose: "Закрыть",
      inspectEmpty: "Прямых связей нет",
      folders: "Папки",
      tune: "Tune",
      nodeSize: "Node size",
      edgeWidth: "Edge width",
    }
  }

  return {
    labelsShow: "Show labels",
    labelsHide: "Hide labels",
    relayout: "Re-layout",
    notes: "Notes",
    tags: "Tags",
    links: "Links",
    countsTemplate: "{n} nodes · {m} edges",
    lensAll: "All",
    lensTag: "Tags",
    lensFolder: "Folders",
    spacing: "Spacing",
    zoom: "Zoom",
    articles: "Writing",
    about: "About",
    themeToggle: "Toggle light / dark mode",
    filtersToggle: "Filters",
    controls: "Controls",
    audioStop: "Stop music",
    audioPlay: "Play music",
    folderRoot: "Root",
    previewHint: "Click to inspect connections",
    previewTagTemplate: "{n} notes",
    inspectOpen: "Read note",
    inspectOpenExternal: "Open",
    inspectConnected: "Connected",
    inspectClose: "Close",
    inspectEmpty: "No direct connections",
    folders: "Folders",
    tune: "Tune",
    nodeSize: "Node size",
    edgeWidth: "Edge width",
  }
}

function localeHomeHref(localeId: string): string {
  return `/${localeId}/`
}

function localePageHref(localeId: string, permalink: string): string {
  return `/${localeId}/${permalink}`
}

function slugToAbsHref(slug: string): string {
  const isIndex = slug === "index" || slug.endsWith("/index")
  const withoutIndex = isIndex ? slug.replace(/\/?index$/, "") : slug
  if (withoutIndex.length === 0) {
    return "/"
  }
  const encoded = withoutIndex
    .split("/")
    .map((segment) => encodeURIComponent(segment))
    .join("/")
  // Flat pages (ko/graph.html) are served extensionless without a trailing
  // slash on GitHub Pages; only folder indexes keep the trailing slash.
  return isIndex ? `/${encoded}/` : `/${encoded}`
}

function switchAriaLabel(targetLocaleId: string, targetName: string): string {
  if (targetLocaleId === "en") {
    return "Switch to English"
  }
  if (targetLocaleId === "ko") {
    return "한국어로 전환"
  }
  return `Switch to ${targetName}`
}

function findLocaleSlug(
  allFiles: QuartzComponentProps["allFiles"],
  translationKey: string,
  localeId: string,
): string | null {
  const match = allFiles.find((file) => {
    const multilingual = file.multilingual as MultilingualFields | undefined
    return (
      multilingual?.translationKey === translationKey &&
      multilingual?.locale === localeId &&
      typeof file.slug === "string" &&
      file.slug !== "index"
    )
  })
  return typeof match?.slug === "string" ? match.slug : null
}

// Single toggle to the other published language: same page's translation
// via translationKey, falling back to the target locale home.
function localeToggleLink(
  allFiles: QuartzComponentProps["allFiles"],
  locales: LocaleEntry[],
  currentLocale: string,
  translationKey: string,
): LocaleToggleLink | null {
  const other = locales.find((locale) => locale.id !== currentLocale)
  if (!other) {
    return null
  }
  const slug =
    findLocaleSlug(allFiles, translationKey, other.id) ?? findLocaleSlug(allFiles, "home", other.id)
  if (!slug) {
    return null
  }
  const label =
    other.id === "en" ? "English" : other.id === "ko" ? "Korean" : (other.nativeName ?? other.id)
  return {
    id: other.id,
    href: slugToAbsHref(slug),
    label,
    ariaLabel: switchAriaLabel(other.id, label),
  }
}

/**
 * Minimal local reimplementation of @quartz-community/utils' pathToRoot, so
 * graph-landing does not need to add that package as a dependency just for
 * this one helper.
 */
function pathToRoot(slug: string): string {
  let rootPath = slug
    .split("/")
    .filter((segment) => segment !== "")
    .slice(0, -1)
    .map(() => "..")
    .join("/")
  if (rootPath.length === 0) {
    rootPath = "."
  }
  return rootPath
}

const defaultComponentOptions: GraphLandingPageOptions = {
  indexSource: "contentIndex",
}

export default ((pageOptions?: GraphLandingPageOptions) => {
  const options = { ...defaultComponentOptions, ...pageOptions }

  // dispatcher.ts always calls `pageType.body(undefined)`, so any per-page
  // options must be closed over here, one level up, rather than threaded
  // through the constructor's own (unused) call arguments.
  const GraphLandingConstructor: QuartzComponentConstructor = () => {
    const GraphLanding: QuartzComponent = ({ fileData, cfg, allFiles }: QuartzComponentProps) => {
      const siteTitle = (cfg as { pageTitle?: string }).pageTitle ?? "ChernoWiki"
      const multilingual = fileData.multilingual as MultilingualFields | undefined
      const slug = typeof fileData.slug === "string" ? fileData.slug : ""
      const multilingualCfg = (
        cfg as QuartzComponentProps["cfg"] & { multilingual?: MultilingualCfg }
      ).multilingual
      const locales = multilingualCfg?.locales ?? []
      const localePrefixes = locales.map((locale) => locale.id).join(",")
      // ChernoWiki: treat the slug prefix as a locale only when it matches a
      // configured multilingual locale; single-locale sites fall through to
      // defaultLocale (a flat "graph" slug is not a locale id).
      const slugPrefix = slug.includes("/") ? (slug.split("/")[0] || undefined) : undefined
      const localeId =
        multilingual?.locale ??
        (slugPrefix && localePrefixes.length > 0 && localePrefixes.includes(slugPrefix)
          ? slugPrefix
          : undefined) ??
        options.defaultLocale ??
        "ko"
      const sourceLocale = multilingualCfg?.sourceLocale ?? options.defaultLocale ?? "ko"
      const copy = overlayCopyForLocale(localeId)
      const translationKey = multilingual?.translationKey ?? "graph"
      const localeToggle = localeToggleLink(allFiles, locales, localeId, translationKey)
      const homeSlug = findLocaleSlug(allFiles, "home", localeId)
      const writingSlug = findLocaleSlug(allFiles, "writing", localeId)
      const aboutSlug = findLocaleSlug(allFiles, "about", localeId)
      // ChernoWiki: single-locale fallbacks — articles link home, about → /meta/
      const homeHref = homeSlug ? slugToAbsHref(homeSlug) : "/"
      const aboutHref = aboutSlug ? slugToAbsHref(aboutSlug) : "/meta/"
      const writingHref = writingSlug ? slugToAbsHref(writingSlug) : "/"
      const graphIndexPath = joinSegments(pathToRoot(slug), "static/graphIndex.json")

      return (
        <div
          class="graph-landing"
          data-rail-open="false"
          data-locale={localeId}
          data-source-locale={sourceLocale}
          data-locale-prefixes={localePrefixes}
          data-index-source={options.indexSource}
          data-graph-index-path={graphIndexPath}
          data-max-rendered-nodes={options.maxRenderedNodes}
          data-expand-hops={options.maxRenderedNodes !== undefined ? options.expandHops : undefined}
          data-tag-cooc-disabled={options.tagCooccurrence === false ? "true" : undefined}
          data-tag-cooc-max-tags-per-note={
            options.tagCooccurrence ? options.tagCooccurrence.maxTagsPerNote : undefined
          }
          data-tag-cooc-max-edges={
            options.tagCooccurrence ? options.tagCooccurrence.maxEdges : undefined
          }
          data-graph-render-mode={options.renderMode === "3d" ? "3d" : undefined}
          data-graph-layout-freeze-after-warmup={
            options.layout?.freezeAfterWarmup ? "true" : undefined
          }
          data-graph-layout-warmup-ticks={options.layout?.warmupTicks}
          data-graph-layout-cooldown-ticks={options.layout?.cooldownTicks}
          data-graph-layout-charge-theta={options.layout?.chargeTheta}
          data-graph-layout-incremental-warmup={
            options.layout?.incrementalWarmup ? "true" : undefined
          }
          data-graph-lod-label-distance={options.lod?.labelDistance}
          data-graph-lod-dot-distance={options.lod?.dotDistance}
          data-graph-lod-cull-distance={options.lod?.cullDistance}
          data-graph-lod-fog={options.lod?.fog ? "true" : undefined}
          data-graph-lod-node-resolution={options.lod?.nodeResolution}
          data-graph-lod-link-resolution={options.lod?.linkResolution}
          data-graph-lod-share-link-resources={options.lod?.shareLinkResources ? "true" : undefined}
          data-graph-interaction-incremental-repaint={
            options.interaction?.incrementalRepaint ? "true" : undefined
          }
          data-graph-ambient-video-id={options.ambientVideoId}
          data-graph-default-locale={options.defaultLocale}
          data-counts-template={copy.countsTemplate}
          data-folder-root-label={copy.folderRoot}
          data-legend-notes={copy.notes}
          data-legend-tags={copy.tags}
          data-legend-links={copy.links}
          data-legend-folders={copy.folders}
          data-preview-tag-template={copy.previewTagTemplate}
          data-inspect-read={copy.inspectOpen}
          data-inspect-open-external={copy.inspectOpenExternal}
          data-audio-stop={copy.audioStop}
          data-audio-play={copy.audioPlay}
          data-inspect-connected={copy.inspectConnected}
          data-inspect-empty={copy.inspectEmpty}
        >
          <link rel="preconnect" href="https://esm.sh" crossOrigin="anonymous" />
          <link rel="dns-prefetch" href="https://esm.sh" />
          <section class="graph-landing__hero" aria-label="Knowledge graph">
            <div class="graph-landing__canvas" id="graph-landing-mount"></div>
            <div class="graph-landing__overlay">
              <div class="graph-landing__chrome">
                <div class="graph-landing__title-block graph-landing__title-block--chrome">
                  <a class="graph-landing__title" href={homeHref}>
                    {siteTitle}
                  </a>
                </div>
                <nav class="graph-landing__top-right" aria-label="Site">
                  <a class="graph-landing__nav-link" href={writingHref}>
                    {copy.articles}
                  </a>
                  <a class="graph-landing__nav-link" href={aboutHref}>
                    {copy.about}
                  </a>
                  {localeToggle ? (
                    <a
                      class="graph-landing__locale-toggle"
                      href={localeToggle.href}
                      lang={localeToggle.id}
                      hreflang={localeToggle.id}
                      aria-label={localeToggle.ariaLabel}
                      data-preferred-locale={localeToggle.id}
                    >
                      {localeToggle.label}
                    </a>
                  ) : null}
                  <button
                    type="button"
                    class="graph-landing__icon-btn"
                    data-graph-theme
                    aria-label={copy.themeToggle}
                  >
                    <svg
                      class="graph-landing__icon graph-landing__icon--sun"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                      focusable="false"
                    >
                      <circle
                        cx="12"
                        cy="12"
                        r="4.4"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="1.6"
                      />
                      <path
                        fill="none"
                        stroke="currentColor"
                        stroke-width="1.6"
                        stroke-linecap="round"
                        d="M12 2.8v2.4M12 18.8v2.4M2.8 12h2.4M18.8 12h2.4M5.5 5.5l1.7 1.7M16.8 16.8l1.7 1.7M18.5 5.5l-1.7 1.7M7.2 16.8l-1.7 1.7"
                      />
                    </svg>
                    <svg
                      class="graph-landing__icon graph-landing__icon--moon"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                      focusable="false"
                    >
                      <path
                        fill="none"
                        stroke="currentColor"
                        stroke-width="1.6"
                        stroke-linejoin="round"
                        d="M20 14.5A8.5 8.5 0 1 1 9.5 4a7 7 0 0 0 10.5 10.5Z"
                      />
                    </svg>
                  </button>
                </nav>
              </div>
              <button
                type="button"
                class="graph-landing__scrim"
                data-graph-rail-scrim
                aria-label={copy.inspectClose}
                hidden
              ></button>
              <button
                type="button"
                class="graph-landing__rail-toggle"
                data-graph-rail-toggle
                aria-expanded="false"
                aria-controls="graph-landing-rail"
                aria-label={copy.controls}
                title={copy.controls}
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  aria-hidden="true"
                  focusable="false"
                >
                  <path
                    fill="none"
                    stroke="currentColor"
                    stroke-width="1.6"
                    stroke-linecap="round"
                    d="M3 5h12M3 9h12M3 13h12"
                  />
                </svg>
              </button>
              {/* ChernoWiki: ambient YouTube audio removed — no third-party
                  iframe or autoplay on this page. bindAmbientAudio() exits
                  early when the toggle button is absent. */}
              <div
                class="graph-landing__rail"
                id="graph-landing-rail"
                aria-hidden="true"
                {...{ onwheel: "event.stopPropagation()" }}
              >
                <div class="graph-landing__title-block graph-landing__title-block--rail">
                  <p class="graph-landing__title">{siteTitle}</p>
                  <p class="graph-landing__counts" data-graph-counts>
                    {copy.countsTemplate.replace("{n}", "–").replace("{m}", "–")}
                  </p>
                </div>
                <div class="graph-landing__lenses" role="tablist" aria-label="Graph lens">
                  <button
                    type="button"
                    class="graph-landing__chip"
                    data-graph-lens="all"
                    aria-pressed="true"
                  >
                    {copy.lensAll}
                  </button>
                  <button
                    type="button"
                    class="graph-landing__chip"
                    data-graph-lens="tag"
                    aria-pressed="false"
                  >
                    {copy.lensTag}
                  </button>
                  <button
                    type="button"
                    class="graph-landing__chip"
                    data-graph-lens="folder"
                    aria-pressed="false"
                  >
                    {copy.lensFolder}
                  </button>
                </div>
                <div class="graph-landing__tags">
                  <p
                    class="graph-landing__section-label graph-landing__section-label--tags"
                    data-graph-facet-label
                  >
                    {copy.tags}
                  </p>
                  <ul class="graph-landing__tag-list" data-graph-tags></ul>
                </div>
                <div class="graph-landing__utils">
                  <div class="graph-landing__tune">
                    <div class="graph-landing__tune-head">
                      <p class="graph-landing__section-label">{copy.tune}</p>
                      <div class="graph-landing__tools">
                        <button
                          type="button"
                          class="graph-landing__tool"
                          data-graph-relayout
                          aria-label={copy.relayout}
                          title={copy.relayout}
                        >
                          <svg
                            width="15"
                            height="15"
                            viewBox="0 0 16 16"
                            aria-hidden="true"
                            focusable="false"
                          >
                            <path
                              fill="none"
                              stroke="currentColor"
                              stroke-width="1.4"
                              stroke-linecap="round"
                              d="M13 8A5 5 0 1 1 11.6 4.4"
                            />
                            <path fill="currentColor" d="M13.2 2.2v3.1h-3.1z" />
                          </svg>
                        </button>
                        <button
                          type="button"
                          class="graph-landing__tool"
                          data-graph-labels
                          data-label-show={copy.labelsShow}
                          data-label-hide={copy.labelsHide}
                          aria-label={copy.labelsShow}
                          title={copy.labelsShow}
                          aria-pressed="false"
                        >
                          <svg
                            width="15"
                            height="15"
                            viewBox="0 0 16 16"
                            aria-hidden="true"
                            focusable="false"
                          >
                            <path
                              fill="none"
                              stroke="currentColor"
                              stroke-width="1.4"
                              stroke-linecap="round"
                              d="M3 12.5 6.6 3.5h2.8L13 12.5M4.6 9.2h6.8"
                            />
                          </svg>
                        </button>
                      </div>
                    </div>
                    <label class="graph-landing__slider">
                      <span>{copy.edgeWidth}</span>
                      <input
                        type="range"
                        min="50"
                        max="180"
                        value="100"
                        data-graph-edge-scale
                        aria-label={copy.edgeWidth}
                      />
                    </label>
                    <label class="graph-landing__slider">
                      <span>{copy.nodeSize}</span>
                      <input
                        type="range"
                        min="50"
                        max="150"
                        value="70"
                        data-graph-node-scale
                        aria-label={copy.nodeSize}
                      />
                    </label>
                    <label class="graph-landing__slider">
                      <span>{copy.spacing}</span>
                      <input
                        type="range"
                        min="50"
                        max="150"
                        value="100"
                        data-graph-spread
                        aria-label={copy.spacing}
                      />
                    </label>
                    <label class="graph-landing__slider">
                      <span>{copy.zoom}</span>
                      <input
                        type="range"
                        min="60"
                        max="170"
                        value="100"
                        data-graph-zoom
                        aria-label={copy.zoom}
                      />
                    </label>
                  </div>
                  <div class="graph-landing__legend" data-graph-legend>
                    <span class="graph-landing__legend-item">
                      <span
                        class="graph-landing__dot graph-landing__dot--note"
                        aria-hidden="true"
                      ></span>
                      {copy.notes}
                    </span>
                    <span class="graph-landing__legend-item">
                      <span
                        class="graph-landing__dot graph-landing__dot--tag"
                        aria-hidden="true"
                      ></span>
                      {copy.tags}
                    </span>
                    <span class="graph-landing__legend-item">
                      <span
                        class="graph-landing__dot graph-landing__dot--external"
                        aria-hidden="true"
                      ></span>
                      {copy.links}
                    </span>
                  </div>
                </div>
              </div>
              <aside class="graph-landing__preview" data-graph-preview hidden aria-live="polite">
                <p class="graph-landing__preview-chip" data-graph-preview-chip></p>
                <p class="graph-landing__preview-title" data-graph-preview-title></p>
                <p class="graph-landing__preview-excerpt" data-graph-preview-excerpt></p>
                <p class="graph-landing__preview-hint">{copy.previewHint}</p>
              </aside>
              <aside
                class="graph-landing__inspect"
                data-graph-inspect
                hidden
                {...{ onwheel: "event.stopPropagation()" }}
              >
                <div class="graph-landing__inspect-bar">
                  <p class="graph-landing__inspect-chip" data-graph-inspect-chip></p>
                  <button
                    type="button"
                    class="graph-landing__inspect-close"
                    data-graph-inspect-close
                    aria-label={copy.inspectClose}
                  >
                    {copy.inspectClose}
                  </button>
                </div>
                <h2 class="graph-landing__inspect-title" data-graph-inspect-title></h2>
                <p class="graph-landing__inspect-excerpt" data-graph-inspect-excerpt></p>
                <ul class="graph-landing__inspect-tags" data-graph-inspect-tags></ul>
                <p class="graph-landing__inspect-section" data-graph-inspect-connected-label>
                  {copy.inspectConnected}
                </p>
                <ul class="graph-landing__inspect-links" data-graph-inspect-connected></ul>
                <a class="graph-landing__inspect-open" data-graph-inspect-open hidden>
                  {copy.inspectOpen}
                </a>
              </aside>
            </div>
          </section>
        </div>
      )
    }

    GraphLanding.css = styles
    GraphLanding.afterDOMLoaded = graphLandingScript

    return GraphLanding
  }

  return GraphLandingConstructor
}) satisfies (pageOptions?: GraphLandingPageOptions) => QuartzComponentConstructor

import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"

// components shared across all pages
export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  navbar: [
  ],
  header: [
  ],
  afterBody: [
    Component.Backlinks(),
  ],
  footer: Component.Footer({
    links: {
      "Blog": "https://vanadium23.me/",
      "Telegram": "https://t.me/chernov_sharit",
      "GitHub": "https://github.com/vanadium23",
      "Design": "https://owickstrom.github.io/the-monospace-web/"
    },
  }),
}

// components for pages that display a single page (e.g. a single note)
export const defaultContentPageLayout: PageLayout = {
  beforeBody: [
    Component.ArticleTitle(),
    Component.ContentMeta(),
    Component.TagList(),
  ],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Explorer(),
  ],
  right: [
    Component.Flex({
      components: [
        {
          Component: Component.Search(),
          grow: true,
        }
      ],
    }),
    // Component.Backlinks(),
  ]
}

// components for pages that display lists of pages  (e.g. tags or folders)
export const defaultListPageLayout: PageLayout = {
  beforeBody: [Component.ArticleTitle(), Component.ContentMeta()],
  left: [
    Component.PageTitle(),
    Component.Explorer(),
  ],
  right: [
    Component.Flex({
      components: [
        {
          Component: Component.Search(),
          grow: true,
        }
      ],
    }),
  ],
}

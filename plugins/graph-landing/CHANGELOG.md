# Changelog

All notable changes to this plugin are documented here.

## 0.1.1

### Added

- `layout.incrementalWarmup` option: skips the synchronous force-simulation
  warmup when click-expansion adds nodes (removes ~1.4 s main-thread stall
  on hub nodes); expanded nodes are seeded near the clicked node. Default
  off — behavior unchanged unless enabled.

## 0.1.0

Initial local version: `indexSource`, `tagCooccurrence`, `maxRenderedNodes`,
`expandHops`, `renderMode`, `layout`, and `lod` options.

### Added

- `lod.shareLinkResources` option — when `true`, links with the same
  computed color/opacity share one material and links with the same
  radius/resolution share one geometry, instead of every link cylinder
  allocating its own. Unset behavior is unchanged (every link gets its own
  geometry/material instance). When combined with
  `interaction.incrementalRepaint`, a focus change swaps a link's material
  reference to the matching cached shared material instead of mutating it
  in place, avoiding cross-link repaint corruption.
- `interaction.incrementalRepaint` option — when `true`, hovering or
  selecting a node mutates only the affected nodes/links/labels in place
  instead of running a full repaint, avoiding destructive mesh recreation
  in the 3D renderer on every hover/click. Unset behavior is unchanged
  (every hover/click still triggers a full accessor repaint).
- `defaultLocale` option — sets the fallback locale used when a page's
  locale can't be determined from its multilingual frontmatter/slug prefix
  and the site's multilingual config has no `sourceLocale` set. Unset
  behavior is unchanged (falls back to `"ko"`).
- `ambientVideoId` option — sets a custom YouTube video id for the ambient
  audio track played behind the graph. Unset behavior is unchanged (the
  plugin's built-in ambient track plays).
- Package metadata for standalone publishing: `keywords`, `repository`,
  `homepage`, `bugs`, `author`, `license`, `LICENSE` file, expanded `files`.
- Completed the `quartz.configSchema` manifest field (previously named
  `optionSchema`, which the Quartz plugin loader never reads) with the full
  current option surface: `renderMode`, `layout`, `lod`, `ambientVideoId`,
  `defaultLocale`.
- `README.md` — Install and Requirements sections.

### Fixed

- `lod.fog` scaling: fog near/far distances were fixed world-unit constants
  sized for the initial camera distance, so zooming out fully washed the
  graph out in fog and zooming in fully put the fog range outside the
  visible frame. Fog range now scales with the live camera distance on
  every zoom.

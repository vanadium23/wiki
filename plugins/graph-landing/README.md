# graph-landing

Full-viewport knowledge-graph constellation page type. All options are
optional and default to the plugin's original behavior — setting none of
them reproduces the exact output of a plugin instance with no `options`
block at all.

## Install

```yaml
- source: github:GoBeromsu/quartz-graph-landing
  enabled: true
  options:
    indexSource: contentIndex
```

## Requirements

- `indexSource: "contentIndex"` (the default) works out of the box with
  stock Quartz v5's built-in content index emitter — no other plugin
  required. The client fetches `static/contentIndex.json` and reads each
  entry's `slug`, `title`, `links`, `tags`, `externalLinks`, and `content`
  fields.
- `indexSource: "graphIndex"` instead fetches a `static/graphIndex.json`
  file, which nothing in stock Quartz v5 emits — you need a separate
  emitter plugin that writes it (Quartaz's `multilingual-content-index`
  plugin does this behind its own `emitGraphIndex: true` option). Any
  emitter can supply it as long as the file matches the shape below; this
  plugin does not import or depend on any specific emitter package.
- Expected `graphIndex.json` shape: a JSON object whose values (any keys,
  typically slugs) are entries of the form
  ```ts
  {
    slug: string
    title: string
    links: string[] // outgoing wikilink slugs
    tags: string[]
    externalLinks: string[]
    excerpt: string // short preview text, pre-truncated by the emitter
    multilingual?: {
      translationKey?: string
      locale?: string
    }
  }
  ```
  `excerpt` takes the place of `contentIndex.json`'s full `content` field
  and is shown as-is in the node preview/inspect panels, so emitters
  should keep it short (this plugin's own client-side excerpt fallback for
  `contentIndex.json` truncates to 220 characters). Any entry missing a
  non-empty `slug` is skipped; missing `title`/`links`/`tags`/
  `externalLinks`/`excerpt` fall back to the slug / empty array / empty
  string respectively rather than erroring.
- `skipContentIndexFetch` (an internal flag this plugin sets on its page
  type instance, not a user-facing option) is a performance hint: when
  `indexSource: "graphIndex"` is set, this page fetches its own
  `graphIndex.json` directly, so the flag tells an aware engine it can skip
  the separate global `contentIndex.json` fetch it would otherwise make for
  every page. The Quartaz engine honors this hint. On engines that don't
  read the flag, both fetches simply happen — content still loads
  correctly, just via one extra (unused) network request.

## Options

```yaml
- source: ./plugins/graph-landing
  enabled: true
  options:
    indexSource: contentIndex # or "graphIndex"
    tagCooccurrence:
      maxTagsPerNote: 5
      maxEdges: 200
    maxRenderedNodes: 20
    expandHops: 1
    renderMode: auto # or "3d"
    layout:
      freezeAfterWarmup: true
      warmupTicks: 50
      cooldownTicks: 200
      chargeTheta: 0.9
      incrementalWarmup: true
    lod:
      labelDistance: 800
      dotDistance: 1200
      cullDistance: 1600
      fog: true
      nodeResolution: 8
      linkResolution: 3
      shareLinkResources: true
    interaction:
      incrementalRepaint: true
    ambientVideoId: o6HpCFhNcnQ
    defaultLocale: en
```

### `indexSource`

`"contentIndex"` (default) or `"graphIndex"`. Controls which JSON file the
client script fetches to build the graph. `"graphIndex"` requires the
`multilingual-content-index` emitter's `emitGraphIndex: true` option, and
fetches the lighter `static/graphIndex.json` instead of the full
`static/contentIndex.json`.

### `tagCooccurrence`

Caps the O(k²) tag co-occurrence edge generation in the client graph
builder (every pair of tags on a note otherwise gets a faint co-occurrence
edge).

- Default: `undefined` — unlimited, original behavior.
- `false` — skip tag co-occurrence edges entirely.
- An object to cap generation:
  - `maxTagsPerNote` — skip co-occurrence pairs for any note with more tags
    than this threshold.
  - `maxEdges` — stop adding co-occurrence edges globally once this many
    have been added. Generation order is deterministic: notes are processed
    in their existing array order, tag pairs within a note in `i, j`
    nested-loop order, so the same cap always produces the same edge set.

### `maxRenderedNodes`

Caps how many nodes the graph renders initially to the top-N nodes by
degree, computed over the full parsed index (ties broken by slug for
determinism). Edges are included only between nodes that are both in the
rendered set, across all edge kinds (wikilink, tag co-occurrence, folder,
external).

- Default: `undefined` — render every node, original behavior.
- The full parsed index stays in memory client-side. Clicking a rendered
  node lazily expands its neighborhood (see `expandHops`) into the live
  simulation with a gentle reheat — no full graph rebuild. The inspect
  panel's neighbor links behave the same way: clicking a neighbor that
  isn't in the rendered set yet expands it (and its hop neighborhood) into
  the simulation first, then focuses it.

### `expandHops`

Number of hops to pull in from the full index when a rendered node is
clicked and `maxRenderedNodes` is set.

- Default: `1`. Has no effect unless `maxRenderedNodes` is also set.

### `renderMode`

Which client renderer to use.

- Default: `undefined` (`"auto"`) — original behavior: 3D loads when WebGL
  is available and the user has not requested reduced motion, otherwise
  the 2D canvas renderer loads instead.
- `"3d"` — always use the 3D renderer, never fall back to 2D. If WebGL is
  unavailable or reduced-motion is requested, the graph shows a short
  notice via the existing canvas-message path instead of silently
  loading 2D.

### `layout`

Tunes the force-simulation warmup/settle behavior. Default: `undefined` —
original behavior unchanged (3D: `warmupTicks` 50 / `cooldownTicks` 200;
2D: `warmupTicks` 60 / `cooldownTicks` 180; charge force `theta` uses
d3-force's built-in default).

- `freezeAfterWarmup` — when `true`, forces `cooldownTicks` to 0 after the
  warmup pass runs so the simulation freezes immediately instead of
  continuing to settle (the 3d-force-graph maintainer-recommended pattern
  for a one-shot layout). Overrides any `cooldownTicks` value set
  alongside it. Default: `false`.
- `warmupTicks` — overrides the renderer's default warmup tick count.
- `cooldownTicks` — overrides the renderer's default cooldown tick count.
  Ignored when `freezeAfterWarmup` is `true`.
- `chargeTheta` — sets the d3-force charge force's Barnes-Hut
  approximation `theta`. Higher values trade layout accuracy for speed.
  Default: d3-force's built-in default (`0.9`).
- `incrementalWarmup` — when `true`, clicking a node to lazily expand its
  neighbors (see `expandHops`) skips the full synchronous warmup re-tick
  that three-forcegraph otherwise runs over the _entire_ current graph on
  every `graphData()` call — on large graphs (1000+ nodes) that
  unconditional re-warmup is a multi-second main-thread stall even though
  only a handful of new nodes were added. Newly expanded nodes are seeded
  near the node that was clicked (instead of d3-force's unrelated default
  spiral placement) so they still appear in a sensible spot. Has no effect
  on `setLens`/tag/folder focus changes, which genuinely restructure the
  visible graph and still get a full warmup. Default: `false` — current
  behavior unchanged (every expand re-warms the whole graph).

### `lod`

Camera-distance level-of-detail tuning for the 3D renderer. Default:
`undefined` — original behavior unchanged (every node/link renders at
full detail regardless of camera distance, no THREE.LOD wrapping, no
fog). Has no effect when the 2D renderer is active.

- `labelDistance` — camera distance (world units) beyond which a node's
  label sprite is hidden. Default: `undefined` (labels never hide based
  on distance). Applies independently of `dotDistance`.
- `dotDistance` — camera distance beyond which a node's full-detail
  sphere mesh is swapped for a cheap, shared low-poly "dot" mesh via
  `THREE.LOD`. Default: `undefined` (every node always renders full
  detail; no `THREE.LOD` wrapping at all).
- `cullDistance` — camera distance beyond which a link's cylinder mesh is
  hidden (`mesh.visible = false`), except links touching the currently
  focused (hovered/selected) node, which always stay visible regardless
  of distance. Default: `undefined` (no link is ever hidden by distance).
- `fog` — when `true`, sets the 3D scene's `THREE.Fog` to match the
  active theme background, giving distant geometry a depth cue instead of
  a hard edge. Purely visual — it does not cull or skip rendering
  anything itself (pairs naturally with `cullDistance`, which does).
  Default: `undefined`/`false` (no fog).
- `nodeResolution` — overrides the segment count (width/height segments)
  used for each node's full-detail sphere geometry. Default: `undefined`
  (`14`, original behavior). Lower values trade visual smoothness for
  fewer triangles per node.
- `linkResolution` — overrides the radial segment count used for each
  link's cylinder geometry. Default: `undefined` (`5`, original
  behavior). Lower values trade visual smoothness for fewer triangles per
  link.
- `shareLinkResources` — when `true`, links with the same computed color
  and opacity share one `MeshBasicMaterial` (keyed by color+opacity), and
  links with the same radius and resolution share one `CylinderGeometry`
  (keyed by radius+resolution), instead of every link cylinder allocating
  its own geometry/material. Default: `undefined`/`false` (every link gets
  its own geometry/material instance; original behavior unchanged). Safe to
  share regardless of on-screen length: this plugin's own
  `linkPositionUpdate` callback scales link length via the mesh's
  `scale.y`, never the geometry itself, so every link's `CylinderGeometry`
  is always built with unit height (1) whether shared or not. Shared
  resources are cached across `paintLinks3d` calls and dropped (not
  disposed) from the cache on each repaint, so a resize/theme/tune change
  simply repopulates the cache from scratch. See `interaction` below for
  how this interacts with `incrementalRepaint`.

### `interaction`

Interaction-driven repaint tuning for the 3D renderer. Default: `undefined`
— original behavior unchanged (every hover/click triggers a full accessor
repaint of every node/link/label). Has no effect when the 2D renderer is
active.

- `incrementalRepaint` — when `true`, hovering or selecting a node mutates
  only the previous and next focus nodes/links/labels (and their direct
  neighbors) in place, instead of re-running the full node/link/label
  repaint on every hover/click. Visually identical to the full-repaint
  path; avoids the three-forcegraph/kapsule accessor system's destructive
  mesh recreation that a plain click/hover otherwise triggers (re-setting
  `nodeThreeObject`/`linkThreeObject`/`linkWidth` on every hover/click
  causes those libraries to discard and rebuild every node and link mesh,
  even though nothing about most of them changed). Default: `undefined`/
  `false` (original behavior unchanged). Full repaints (lens/tag/folder/
  theme/tune/expand/view changes) are unaffected either way.

**Interplay with `lod.shareLinkResources`**: a shared link material is
reused across every link with the same color+opacity, so mutating it in
place on focus change would repaint every other link sharing that
instance, not just the focused one. When both options are on, a focus
change instead swaps the affected link's `mesh.material` to whichever
cached shared material matches its new color/opacity (creating one on
first use) rather than mutating the current material's properties —
leaving every other link sharing the old material untouched. When
`shareLinkResources` is off, each link privately owns its material, so
`incrementalRepaint` mutates it in place as before.

### `ambientVideoId`

YouTube video id for the ambient audio track played behind the graph
(toggled by the audio button in the controls rail).

- Default: `undefined` — the plugin's built-in ambient track plays,
  original behavior unchanged.
- Takes a bare video id, not a URL — e.g. from
  `https://www.youtube.com/watch?v=o6HpCFhNcnQ` the id is `o6HpCFhNcnQ`.
- Validated client-side: trimmed, then must match `/^[A-Za-z0-9_-]{6,20}$/`.
  An unset or invalid value (empty, too short/long, a full URL, disallowed
  characters) is ignored and the built-in track plays instead.

### `defaultLocale`

Fallback locale id used when a page's locale can't be determined from its
multilingual frontmatter/slug prefix, and when the site's multilingual
config has no `sourceLocale` set.

- Default: `undefined` — original behavior unchanged, falls back to `"ko"`.
- Set this when publishing a site whose primary locale is not Korean (e.g.
  `defaultLocale: en`).

## 3D performance

The 3D renderer instantiates one `THREE.Mesh` per node and one per link,
each with its own `Geometry`/`Material` (no sharing/caching by default) —
so frame cost scales directly with node + link count, and is bound by
draw-call count and fill rate rather than force-simulation cost. Measured
on a live 1,500-node / 11,786-edge graph (13,287 meshes total, no
LOD/culling options set): ~15 fps at rest, with camera movement adding
negligible extra cost on top of that draw-call-bound ceiling — the "lag
when zooming in" some large graphs exhibit is this steady-state ceiling
becoming visible during continuous re-render, not a new cost introduced
by interaction.

For graphs in that range, `layout.freezeAfterWarmup` (near-zero cost) and
`lod.dotDistance` / `lod.labelDistance` (collapse the node-side cost at
distance via shared low-poly geometry/material and label hiding) are the
first two options to reach for. `lod.cullDistance` and `lod.fog` address
the link side, which is typically the larger contributor by mesh count
(link cylinders usually outnumber node spheres several-fold once tag/
folder/co-occurrence edges are included). `lod.nodeResolution` /
`lod.linkResolution` trade visual smoothness for fewer triangles per mesh
on top of either. All of these are independent and additive; none change
rendered behavior unless explicitly set.

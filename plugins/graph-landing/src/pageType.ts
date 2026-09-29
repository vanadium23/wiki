import type {
  PageMatcher,
  QuartzPageTypePlugin,
  QuartzPageTypePluginInstance,
} from "@quartz-community/types"
import GraphLanding from "./components/GraphLanding"

// Extends the published QuartzPageTypePluginInstance with an engine flag not
// yet part of that package's types: when true, the engine's pageResources()
// omits the global contentIndex.json fetch for pages using this page type.
// Widening the return type via intersection (instead of adding the field to
// the object literal typed as QuartzPageTypePluginInstance directly) avoids
// an excess-property error against the external package's stricter type.
type EngineAwarePageTypeInstance = QuartzPageTypePluginInstance & {
  skipContentIndexFetch?: boolean
}

export interface GraphLandingPageOptions {
  /**
   * Where the graph page's client script loads its content data from.
   * "contentIndex" (default) fetches static/contentIndex.json, same as before.
   * "graphIndex" fetches the lighter static/graphIndex.json instead (requires
   * the multilingual-content-index emitter's `emitGraphIndex: true` option).
   */
  indexSource?: "contentIndex" | "graphIndex"
  /**
   * Caps the O(k^2) tag co-occurrence edge generation in the client graph
   * builder. Default: undefined (unlimited, current behavior — every pair of
   * tags on a note gets a faint co-occurrence edge). Set to `false` to skip
   * tag co-occurrence edges entirely. Set to an object to cap generation:
   * `maxTagsPerNote` skips co-occurrence pairs for notes with more tags than
   * the threshold; `maxEdges` stops adding co-occurrence edges once that many
   * have been added (deterministic order, same as today's note iteration).
   */
  tagCooccurrence?: { maxTagsPerNote?: number; maxEdges?: number } | false
  /**
   * Caps how many nodes the graph renders initially, keeping only the top-N
   * nodes by degree (computed over the full parsed index, deterministic
   * tie-break by slug). Default: undefined (render every node, current
   * behavior). The full index stays available client-side so that clicking a
   * node lazily expands its neighbors (see `expandHops`) into the live
   * simulation instead of doing a full re-layout.
   */
  maxRenderedNodes?: number
  /**
   * Number of hops to pull in from the full index when a rendered node is
   * clicked and `maxRenderedNodes` is set. Default: 1. Has no effect unless
   * `maxRenderedNodes` is also set.
   */
  expandHops?: number
  /**
   * Which client renderer to use. Default: undefined ("auto") — current
   * behavior unchanged: 3D loads when WebGL is available and the user has
   * not requested reduced motion, otherwise the 2D canvas renderer loads
   * instead. Set to "3d" to require the 3D renderer: it never falls back to
   * 2D — if WebGL is unavailable or reduced-motion is requested, the graph
   * shows a short notice via the existing canvas-message path instead of
   * silently loading 2D.
   */
  renderMode?: "auto" | "3d"
  /**
   * Tunes the force-simulation warmup/settle behavior. Default: undefined —
   * current behavior unchanged (3D: warmupTicks 50 / cooldownTicks 200; 2D:
   * warmupTicks 60 / cooldownTicks 180; charge force theta uses d3-force's
   * built-in default).
   */
  layout?: {
    /**
     * When true, forces cooldownTicks to 0 after the warmup pass runs so
     * the simulation freezes immediately instead of continuing to settle —
     * the maintainer-recommended pattern for a one-shot layout. Overrides
     * any `cooldownTicks` value set alongside it. Default: false.
     */
    freezeAfterWarmup?: boolean
    /** Overrides the renderer's default warmupTicks (3D: 50, 2D: 60). */
    warmupTicks?: number
    /**
     * Overrides the renderer's default cooldownTicks (3D: 200, 2D: 180).
     * Ignored when `freezeAfterWarmup` is true.
     */
    cooldownTicks?: number
    /**
     * Sets the d3-force charge force's Barnes-Hut approximation `theta`.
     * Higher values trade layout accuracy for speed. Default: d3-force's
     * built-in default (0.9).
     */
    chargeTheta?: number
    /**
     * When true, clicking a node to lazily expand its neighbors (see
     * `expandHops`) skips the full synchronous warmup re-tick that
     * three-forcegraph otherwise runs over the *entire* current graph on
     * every `graphData()` call — on large graphs (1000+ nodes) that
     * unconditional re-warmup is a multi-second main-thread stall even
     * though only a handful of new nodes were added. Newly expanded nodes
     * are seeded near the node that was clicked (instead of d3-force's
     * unrelated default spiral placement) so they still appear in a
     * sensible spot. Has no effect on `setLens`/tag/folder focus changes,
     * which genuinely restructure the visible graph and still get a full
     * warmup. Default: false — current behavior unchanged (every expand
     * re-warms the whole graph).
     */
    incrementalWarmup?: boolean
  }
  /**
   * Camera-distance level-of-detail for the 3D renderer. Default: undefined
   * (current behavior unchanged — every node renders its full sphere +
   * label mesh regardless of camera distance, no THREE.LOD wrapping, no
   * distance-driven label hide). Has no effect when the 2D renderer is
   * active.
   */
  lod?: {
    /**
     * Camera distance (world units) beyond which a node's label sprite is
     * hidden. Default: undefined (labels never hide based on distance;
     * current behavior unchanged). Applies independently of `dotDistance`.
     */
    labelDistance?: number
    /**
     * Camera distance (world units) beyond which a node's full-detail
     * sphere mesh is swapped for a cheap, shared low-poly "dot" mesh via
     * THREE.LOD. Default: undefined (every node always renders its
     * full-detail mesh; current behavior unchanged, no THREE.LOD wrapping
     * at all).
     */
    dotDistance?: number
    /**
     * Camera distance (world units) beyond which a link's cylinder mesh is
     * hidden (`mesh.visible = false`), except links touching the currently
     * focused (hovered/selected) node, which always stay visible regardless
     * of distance. Default: undefined (no link is ever hidden by distance;
     * current behavior unchanged).
     */
    cullDistance?: number
    /**
     * When true, sets the 3D scene's `THREE.Fog` to match the active theme
     * background color, giving distant geometry a depth cue instead of a
     * hard edge. Purely visual — it does not cull or skip rendering
     * anything itself (pairs naturally with `cullDistance`, which does).
     * Default: undefined/false (no fog; current behavior unchanged). Has no
     * effect when the 2D renderer is active.
     */
    fog?: boolean
    /**
     * Overrides the segment count (width/height segments) used for each
     * node's full-detail sphere geometry. Default: undefined (14, current
     * behavior unchanged). Lower values trade visual smoothness for fewer
     * triangles per node.
     */
    nodeResolution?: number
    /**
     * Overrides the radial segment count used for each link's cylinder
     * geometry. Default: undefined (5, current behavior unchanged). Lower
     * values trade visual smoothness for fewer triangles per link.
     */
    linkResolution?: number
    /**
     * When true, links with the same computed color and opacity share one
     * MeshBasicMaterial (keyed by color+opacity) and links with the same
     * radius and resolution share one CylinderGeometry (keyed by
     * radius+resolution), instead of every link cylinder allocating its own
     * geometry/material. Default: undefined/false (every link gets its own
     * geometry/material instance; current behavior unchanged). Has no
     * effect when the 2D renderer is active. When combined with
     * `interaction.incrementalRepaint`, a focus change swaps a link's
     * material to whichever cached shared material matches its new
     * color/opacity instead of mutating the link's current material in
     * place (in-place mutation would repaint every other link sharing that
     * material instance).
     */
    shareLinkResources?: boolean
  }
  /**
   * Interaction-driven repaint tuning for the 3D renderer. Default: undefined
   * (current behavior unchanged — every hover/click triggers a full accessor
   * repaint of every node/link/label). Has no effect when the 2D renderer is
   * active.
   */
  interaction?: {
    /**
     * When true, hovering or selecting a node mutates only the previous and
     * next focus nodes/links/labels (and their direct neighbors) in place,
     * instead of re-running the full node/link/label repaint on every
     * hover/click. Visually identical to the full-repaint path; avoids the
     * three-forcegraph/kapsule accessor system's destructive mesh recreation
     * that a plain click/hover otherwise triggers. Default: undefined/false
     * (current behavior unchanged). Full repaints (lens/tag/folder/theme/
     * tune/expand/view changes) are unaffected either way.
     */
    incrementalRepaint?: boolean
  }
  /**
   * YouTube video id for the ambient audio track played behind the graph.
   * Must be a bare video id (not a URL) — e.g. from
   * https://www.youtube.com/watch?v=o6HpCFhNcnQ the id is `o6HpCFhNcnQ`.
   * Default: undefined — current behavior unchanged, the plugin's built-in
   * ambient track plays. Validated client-side (trimmed, must match
   * `/^[A-Za-z0-9_-]{6,20}$/`); an invalid value is ignored and the
   * built-in track plays instead.
   */
  ambientVideoId?: string
  /**
   * Fallback locale id used when a page's locale cannot be determined from
   * its multilingual frontmatter/slug prefix, and when the site's
   * multilingual config has no `sourceLocale` set. Default: undefined —
   * current behavior unchanged, falls back to `"ko"`. Set this when
   * publishing a site whose primary locale is not Korean.
   */
  defaultLocale?: string
}

const defaultOptions: GraphLandingPageOptions = {
  indexSource: "contentIndex",
}

const graphPageMatcher: PageMatcher = ({ fileData }) => {
  const frontmatter = fileData.frontmatter as Record<string, unknown> | undefined
  const translationKey = frontmatter?.translationKey
  // Locale roots (/ko/, /en/) keep translationKey home; /graph stays as a
  // dedicated alias so existing links do not break.
  return translationKey === "graph" || translationKey === "home"
}

const GraphLandingPage: QuartzPageTypePlugin<GraphLandingPageOptions> = (userOpts) => {
  const options = { ...defaultOptions, ...userOpts }
  // Only skip the engine's global contentIndex.json fetch when this page
  // fetches its own lighter graphIndex.json directly (see
  // graph-landing.inline.ts); the default indexSource ("contentIndex")
  // still relies on the global fetch, unchanged.
  const instance: EngineAwarePageTypeInstance = {
    name: "GraphLanding",
    priority: 20,
    match: graphPageMatcher,
    layout: "graph",
    frame: "minimal",
    body: GraphLanding(options),
    skipContentIndexFetch: options.indexSource === "graphIndex",
  }
  return instance
}

export default GraphLandingPage

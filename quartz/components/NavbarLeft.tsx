import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"

export default ((component?: QuartzComponent) => {
  if (component) {
    const Component = component
    const DesktopOnly: QuartzComponent = (props: QuartzComponentProps) => {
      return <Component displayClass="navbar-left" {...props} />
    }

    DesktopOnly.displayName = component.displayName
    DesktopOnly.afterDOMLoaded = component?.afterDOMLoaded
    DesktopOnly.beforeDOMLoaded = component?.beforeDOMLoaded
    DesktopOnly.css = component?.css
    return DesktopOnly
  } else {
    return () => <></>
  }
}) satisfies QuartzComponentConstructor

import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"

const Navbar: QuartzComponent = ({ children }: QuartzComponentProps) => {
  return children.length > 0 ? (
    <nav>
      <ul>
        {children.map((child, index) => (
          <li key={index}>{child}</li>
        ))}
      </ul>
    </nav>
  ) : null;
};

Navbar.css = `
nav {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 1rem 2rem;
}

nav ul {
  display: flex;
  list-style: none;
  padding: 0;
  margin: 0;
  gap: 1.5rem;
}

nav li {
  display: flex;
  align-items: center;
}
`

export default (() => Navbar) satisfies QuartzComponentConstructor

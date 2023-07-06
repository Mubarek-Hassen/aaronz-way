import Classes from "./Nav.module.css"

function Nav() {
  return (
    <nav className={Classes.nav}>
      <ul className={Classes.list}>
        <li>Home</li>
        <li>Gallery</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav>
  )
}

export default Nav
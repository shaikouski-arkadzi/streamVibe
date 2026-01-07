import Logo from "@/components"
import "./Header.scss"

const menuItems = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Movies & Shows",
    href: "/movies",
  },
  {
    label: "Support",
    href: "/support",
  },
  {
    label: "Subscriptions",
    href: "/subscriptions",
  },
]

const Header = () => {
  return (
    <header className="header">
      <div className="header__inner container">
        <Logo />
        <nav className="header__menu">
          <ul className="header__menu-list">
            {menuItems.map(({ label, href }) => (
              <li className="header__menu-item" key={label}>
                <a href={href} className="header__menu-link">
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header

import cn from "classnames"
import Logo from "@/components/Logo"
import Button from "@/components/Button"
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

const Header = ({ url }) => {
  return (
    <header className="header">
      <div className="header__inner container">
        <Logo />
        <nav className="header__menu">
          <ul className="header__menu-list">
            {menuItems.map(({ label, href }) => (
              <li className="header__menu-item" key={label}>
                <a
                  href={href}
                  className={cn("header__menu-link", {
                    "is-active": href === url,
                  })}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="header__actions">
          <Button
            className="header__button"
            label="Search"
            isLabelVisible
            iconName="search"
            mode="transparent"
          />
          <Button
            className="header__button"
            label="Notifications"
            isLabelVisible
            iconName="notification"
            mode="transparent"
          />
        </div>
      </div>
    </header>
  )
}

export default Header

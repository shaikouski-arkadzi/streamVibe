import Logo from "@/components"
import "./Header.scss"

const Header = () => {
  return (
    <header className="header">
      <div className="header__inner container">
        <Logo />
      </div>
    </header>
  )
}

export default Header

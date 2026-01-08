import cn from "classnames"
import "./Logo.scss"

const Logo = ({ className = "" }) => {
  const title = "Home"
  return (
    <a
      className={cn(className, "logo")}
      href="/"
      title={title}
      aria-label={title}
    >
      <img
        className="logo__image"
        src="/logo.svg"
        alt=""
        width="199"
        height="60"
        loading="lazy"
      />
    </a>
  )
}

export default Logo

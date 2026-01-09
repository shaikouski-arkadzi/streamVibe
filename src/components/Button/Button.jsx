import cn from "classnames"
import "./Button.scss"

const Button = ({
  href,
  type = "button",
  target,
  className,
  label,
  isLabelHidden = false,
}) => {
  const isLink = href !== undefined
  const Component = isLink ? "a" : "button"
  const linkProps = { href, target }
  const buttonProps = { type }
  const specificProps = isLink ? linkProps : buttonProps
  const title = isLabelHidden ? label : undefined

  return (
    <Component
      className={cn(className, "button")}
      aria-label={title}
      title={title}
      {...specificProps}
    >
      {!isLabelHidden && <span className="button__label">{label}</span>}
    </Component>
  )
}

export default Button

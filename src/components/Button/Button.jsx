import cn from "classnames"
import "./Button.scss"
import Icon from "@/components/Icon"

const Button = ({
  href,
  type = "button",
  target,
  className,
  label,
  isLabelHidden = false,
  iconName,
  /**
   * 'before' | 'after'
   */
  iconPosition = "before",
}) => {
  const isLink = href !== undefined
  const Component = isLink ? "a" : "button"
  const linkProps = { href, target }
  const buttonProps = { type }
  const specificProps = isLink ? linkProps : buttonProps
  const title = isLabelHidden ? label : undefined
  const iconComponent = iconName && (
    <Icon className="button__icon" name={iconName} />
  )

  return (
    <Component
      className={cn(className, "button")}
      aria-label={title}
      title={title}
      {...specificProps}
    >
      {iconPosition === "before" && iconComponent}
      {!isLabelHidden && <span className="button__label">{label}</span>}
      {iconPosition === "after" && iconComponent}
    </Component>
  )
}

export default Button

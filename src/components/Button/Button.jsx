import cn from "classnames"
import Icon from "@/components/Icon"
import "./Button.scss"

const Button = ({
  href,
  type = "button",
  target,
  className,
  label,
  isLabelVisible = false,
  iconName,
  /**
   * '' (default) | 'transparent' | 'black-10'
   */
  mode = "",
  /**
   * 'before' | 'after'
   */
  iconPosition = "before",
  hasFillIcon,
}) => {
  const isLink = href !== undefined
  const Component = isLink ? "a" : "button"
  const linkProps = { href, target }
  const buttonProps = { type }
  const specificProps = isLink ? linkProps : buttonProps
  const title = isLabelVisible ? label : undefined
  const iconComponent = iconName && (
    <Icon className="button__icon" name={iconName} hasFill={hasFillIcon} />
  )

  return (
    <Component
      className={cn(className, "button", {
        [`button--${mode}`]: mode,
      })}
      aria-label={title}
      title={title}
      {...specificProps}
    >
      {iconPosition === "before" && iconComponent}
      {!isLabelVisible && <span className="button__label">{label}</span>}
      {iconPosition === "after" && iconComponent}
    </Component>
  )
}

export default Button

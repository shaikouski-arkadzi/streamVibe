import cn from "classnames"
import Icon from "@/components/Icon"
import "./Badge.scss"

const Badge = ({
  className,
  /** ''(default), 'accent' */
  mode = "",
  isBig = false,
  children,
  iconName,
  hasFillIcon,
  iconAriaLabel,
}) => {
  return (
    <div
      className={cn(className, "badge", {
        [`badge--${mode}`]: mode,
        "badge--big": isBig,
      })}
    >
      {iconName && (
        <Icon
          className="badge__icon"
          name={iconName}
          hasFill={hasFillIcon}
          ariaLabel={iconAriaLabel}
        />
      )}
      <span>{children}</span>
    </div>
  )
}

export default Badge

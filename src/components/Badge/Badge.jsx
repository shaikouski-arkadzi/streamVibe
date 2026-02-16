import cn from "classnames"
import "./Badge.scss"

const Badge = ({
  className,
  /** ''(default), 'accent' */
  mode = "",
  isBig = false,
  children,
}) => {
  return (
    <div
      className={cn(className, "badge", {
        [`badge--${mode}`]: mode,
        "badge--big": isBig,
      })}
    >
      {children}
    </div>
  )
}

export default Badge

import cn from "classnames"
import { Icon as MinistaIcon } from "minista"
import "./Icon.scss"

const Icon = ({ className, name, hasFill = false, ariaLabel }) => {
  return (
    <span className={cn(className, "icon")} aria-label={ariaLabel}>
      <MinistaIcon
        iconId={name}
        fill={hasFill ? "currentColor" : "none"}
        stroke={hasFill ? "none" : "currentColor"}
      />
    </span>
  )
}

export default Icon

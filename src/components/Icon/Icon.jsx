import cn from "classnames"
import { Icon as MinistaIcon } from "minista"
import "./Icon.scss"

const Icon = ({ className, name, hasFill = false }) => {
  return (
    <span className={cn(className, "icon")}>
      <MinistaIcon
        iconId={name}
        fill={hasFill ? "currentColor" : "none"}
        stroke={hasFill ? "none" : "currentColor"}
      />
    </span>
  )
}

export default Icon

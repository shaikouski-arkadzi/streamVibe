import cn from "classnames"
import { Icon as MinistaIcon } from "minista"
import "./Icon.scss"

const Icon = ({ className, name }) => {
  return (
    <span className={cn(className, "icon")}>
      <MinistaIcon iconId={name} />
    </span>
  )
}

export default Icon

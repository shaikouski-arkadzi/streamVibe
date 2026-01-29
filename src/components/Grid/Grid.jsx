import cn from "classnames"
import "./Grid.scss"

const Grid = ({ columns = 1, children }) => {
  return (
    <ul
      className={cn("grid", {
        [`grid--${columns}`]: columns > 1,
      })}
    >
      {children.map((child, index) => (
        <li className="grid__item" key={index}>
          {child}
        </li>
      ))}
    </ul>
  )
}

export default Grid

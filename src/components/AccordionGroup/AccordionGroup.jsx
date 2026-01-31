import cn from "classnames"
import "./AccordionGroup.scss"

const AccordionGroup = ({ columns = 1, children, isOrderedList = true }) => {
  const itemsPerColumn = Math.ceil(children.length / columns)
  const ListTag = isOrderedList ? "ol" : "ul"

  return (
    <ListTag
      className={cn("accordion-group", {
        [`accordion-group--${columns}-columns`]: columns > 1,
        "accordion-group--has-counter": isOrderedList,
      })}
    >
      {children.map((child, index) => (
        <li
          className={cn("accordion-group__item", {
            "accordion-group__item--last-column-item":
              columns > 1 && itemsPerColumn / (index + 1) === 1,
          })}
          key={index}
        >
          {child}
        </li>
      ))}
    </ListTag>
  )
}

export default AccordionGroup

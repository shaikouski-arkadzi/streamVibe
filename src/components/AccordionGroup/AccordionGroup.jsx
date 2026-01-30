import cn from "classnames"
import "./AccordionGroup.scss"

const AccordionGroup = ({ columns = 1, children, isOrderedList = true }) => {
  const ListTag = isOrderedList ? "ol" : "ul"

  return (
    <ListTag
      className={cn("accordion-group", {
        [`accordion-group--${columns}-columns`]: columns > 1,
        "accordion-group--has-counter": isOrderedList,
      })}
    >
      {children.map((child, index) => (
        <li className="accordion-group__item" key={index}>
          {child}
        </li>
      ))}
    </ListTag>
  )
}

export default AccordionGroup

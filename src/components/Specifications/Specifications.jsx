import cn from "classnames"
import "./Specifications.scss"

const Specifications = ({ items = [] }) => {
  return (
    <div className="specifications">
      <dl className="specifications__list">
        {items.map(({ key, value, isWide }) => (
          <div
            className={cn("specifications__item", {
              "specifications_item--wide": isWide,
            })}
            key={key}
          >
            <dt className="specifications__key">{key}</dt>
            <dd className="specifications__value">{value}</dd>
          </div>
        ))}
      </dl>
    </div>
  )
}

export default Specifications

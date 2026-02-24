import "./Tags.scss"

const Tags = ({ items = [] }) => {
  return (
    <div className="tags">
      <ul className="tags__list">
        {items.map((tag) => (
          <li className="tags__item" key={tag}>
            {tag}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Tags

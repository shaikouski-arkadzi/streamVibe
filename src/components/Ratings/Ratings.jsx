import RatingView from "@/components/RatingView"
import "./Ratings.scss"

const Ratings = ({ items = [] }) => {
  return (
    <div className="ratings">
      <ul className="ratings__list">
        {items.map(({ title, ratingValue }) => (
          <li className="ratings__item" key={title}>
            <h4 className="ratings__title">{title}</h4>
            <RatingView value={ratingValue} label={ratingValue} />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Ratings

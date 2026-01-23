import cn from "classnames"
import { Image } from "minista"
import "./CategoryCard.scss"
import Icon from "@/components/Icon"

const CategoryCard = ({ title, images = [] }) => {
  return (
    <a href="/movies" className="category-card">
      <div className="category-card__images">
        {images.map((imgSrc) => (
          <Image className="category-card__image" src={imgSrc} key={imgSrc} />
        ))}
      </div>
      <div className="category-card__body">
        <h3 className="category-card__title">{title}</h3>
        <Icon className="category-card__icon" name="arrow-right" />
      </div>
    </a>
  )
}

export default CategoryCard

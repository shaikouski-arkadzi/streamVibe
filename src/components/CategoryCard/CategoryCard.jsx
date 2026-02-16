import { Image } from "minista"
import Icon from "@/components/Icon"
import Badge from "@/components/Badge"
import "./CategoryCard.scss"

const CategoryCard = ({ title, images = [], badge }) => {
  return (
    <a href="/movies" className="category-card">
      <div className="category-card__images">
        {images.map((imgSrc) => (
          <Image className="category-card__image" src={imgSrc} key={imgSrc} />
        ))}
      </div>
      <div className="category-card__body">
        <h3 className="category-card__title">
          {badge && (
            <Badge className="category-card__badge" mode="accent" isBig>
              {badge}
            </Badge>
          )}
          <span>{title}</span>
        </h3>
        <Icon className="category-card__icon" name="arrow-right" />
      </div>
    </a>
  )
}

export default CategoryCard

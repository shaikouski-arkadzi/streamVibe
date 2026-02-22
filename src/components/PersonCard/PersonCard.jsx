import { Image } from "minista"
import "./PersonCard.scss"

const PersonCard = ({ imgSrc, imgAlt }) => {
  return (
    <div className="person-card">
      <Image
        className="person-card__image"
        src={imgSrc}
        alt={imgAlt}
        title={imgAlt}
      />
    </div>
  )
}

export default PersonCard

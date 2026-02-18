import { Image } from "minista"
import Badge from "@/components/Badge"
import "./MovieCard.scss"

const MovieCard = ({ title, imgSrc, duration, views, href = "/movie" }) => {
  return (
    <a className="movie-card" href={href} title={title}>
      <h3 className="visually-hidden">{title}</h3>
      <Image src={imgSrc} className="movie-card__image" />
      <div className="movie-card__body">
        {duration && (
          <Badge iconName="clock" iconAriaLabel="Duration" hasFillIcon>
            {duration}
          </Badge>
        )}
        {views && (
          <Badge iconName="eye" iconAriaLabel="Views" hasFillIcon>
            {views}
          </Badge>
        )}
      </div>
    </a>
  )
}

export default MovieCard

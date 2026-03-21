import cn from "classnames"
import { Image } from "minista"
import Button from "@/components/Button"
import "./MovieBannerCard.scss"

const MovieBannerCard = ({
  title,
  titleId,
  TitleHTag = "h2",
  description,
  imgSrc,
  isSmallPaddingY = false,
}) => {
  return (
    <div className="movie-banner-card">
      <Image className="movie-banner-card__image" src={imgSrc} />
      <div
        className={cn("movie-banner-card__inner", {
          "movie-banner-card__inner--small-padding-y": isSmallPaddingY,
        })}
      >
        <div className="movie-banner-card__body">
          <TitleHTag className="movie-banner-card__title h3" id={titleId}>
            {title}
          </TitleHTag>
          <div className="movie-banner-card__description hidden-mobile">
            <p>{description}</p>
          </div>
        </div>
        <footer className="movie-banner-card__footer">
          <Button
            className="movie-banner-card__play-button"
            iconName="play"
            label="Play Now"
            hasFillIcon
          />
          <div className="movie-banner-card__actions">
            <Button
              iconName="plus"
              label="Add to playlist"
              isLabelVisible
              mode="black-06"
            />
            <Button
              iconName="like"
              label="Like"
              isLabelVisible
              mode="black-06"
            />
            <Button
              iconName="volume"
              label="Mute"
              isLabelVisible
              mode="black-06"
            />
          </div>
        </footer>
      </div>
    </div>
  )
}

export default MovieBannerCard

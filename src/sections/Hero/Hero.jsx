import cn from "classnames"
import "./Hero.scss"

const playButtonTitle = "Play Video"

const Hero = () => {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero__pano">
        <div className="hero__pano-inner container">
          <button
            className="hero__play-button"
            type="button"
            aria-label={playButtonTitle}
            title={playButtonTitle}
          >
            <img
              className="hero__play-button-image"
              src="/play.svg"
              alt=""
              width={470}
              height={470}
            />
          </button>
        </div>
      </div>
      <div className="hero-body">
        <div className="hero-body-inner container"></div>
      </div>
    </section>
  )
}

export default Hero

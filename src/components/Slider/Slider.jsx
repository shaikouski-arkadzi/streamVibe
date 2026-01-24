import SliderNavigation from "@/components/SliderNavigation"
import "swiper/css"
import "./Slider.scss"

const Slider = ({ children, navigationTargetElementId = null }) => {
  return (
    <div className="slider">
      <div className="slider__swiper swiper">
        <ul className="slider__list swiper-wrapper">
          {children.map((slide, index) => (
            <li className="slider__item swiper-slide" key={index}>
              {slide}
            </li>
          ))}
        </ul>
      </div>
      {!navigationTargetElementId && (
        <SliderNavigation className="slider__navigation" />
      )}
    </div>
  )
}

export default Slider

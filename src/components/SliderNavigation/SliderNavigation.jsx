import cn from "classnames"
import Button from "@/components/Button"
import "./SliderNavigation.scss"

const SliderNavigation = ({
  className,
  id,
  hasPagination = true,
  /**
   * ''(default) | 'tile' | 'rounded'
   */
  mode = "",
  /**
   * ''(default) | 'abs-bottom'
   */
  position = "",
  isHiddenMobile,
  buttonMode = "black-10",
  justifyContent,
}) => {
  return (
    <div
      className={cn(className, "slider-navigation", {
        [`slider-navigation--${mode}`]: mode,
        [`slider-navigation--${position}`]: position,
        "hidden-mobile": isHiddenMobile,
        [`slider-navigation--${justifyContent}`]: justifyContent,
      })}
      id={id}
      data-js-slider-navigation=""
    >
      <Button
        className="slider-navigation__arrow-button slider-navigation__arrow-button--previous"
        mode={buttonMode}
        iconName="arrow-left"
        label="Previous slide"
        isLabelVisible
        extraAttrs={{
          "data-js-slider-previous-button": "",
        }}
      />
      {hasPagination && (
        <div
          className="slider-navigation__pagination"
          data-js-slider-pagination=""
        />
      )}
      <Button
        className="slider-navigation__arrow-button slider-navigation__arrow-button--next"
        mode={buttonMode}
        iconName="arrow-right"
        label="Next slide"
        isLabelVisible
        extraAttrs={{
          "data-js-slider-next-button": "",
        }}
      />
    </div>
  )
}

export default SliderNavigation

import cn from "classnames"
import Button from "@/components/Button"
import "./SliderNavigation.scss"

const SliderNavigation = ({
  className,
  id,
  hasPagination = true,
  /**
   * ''(default) | 'tile'
   */
  mode = "",
}) => {
  return (
    <div
      className={cn(className, "slider-navigation", {
        [`slider-navigation--${mode}`]: mode,
      })}
      id={id}
    >
      <Button
        className="slider-navigation__arrow-button slider-navigation__arrow-button--previous"
        mode="black-10"
        iconName="arrow-left"
        label="Previous slide"
        isLabelVisible
      />
      {hasPagination && <div className="slider-navigation__pagination" />}
      <Button
        className="slider-navigation__arrow-button slider-navigation__arrow-button--next"
        mode="black-10"
        iconName="arrow-right"
        label="Next slide"
        isLabelVisible
      />
    </div>
  )
}

export default SliderNavigation

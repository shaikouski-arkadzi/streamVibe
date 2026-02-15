import Section from "@/layouts/Section"
import CategoryCard from "@/components/CategoryCard"
import Slider from "@/components/Slider"
import SliderNavigation from "@/components/SliderNavigation"
import categoryItems from "./categoryItems"
import "./Categories.scss"

const Categories = () => {
  const sliderNavigationId = "categories-slider-navigation"

  return (
    <Section
      title="Explore our wide variety of categories"
      titleId="categories-title"
      description="Whether you're looking for a comedy to make you laugh, a drama to make you think, or a documentary to learn something new"
      actions={<SliderNavigation mode="tile" id={sliderNavigationId} />}
      isActionsHiddenOnMobile
    >
      <Slider
        navigationTargetElementId={sliderNavigationId}
        isBeyondTheViewportOnMobileS
      >
        {categoryItems.map((categoryItem) => (
          <CategoryCard {...categoryItem} key={categoryItem.title} />
        ))}
      </Slider>
    </Section>
  )
}

export default Categories

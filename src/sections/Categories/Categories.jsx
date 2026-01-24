import Section from "@/layouts/Section"
import CategoryCard from "@/components/CategoryCard"
import Slider from "@/components/Slider"
import SliderNavigation from "@/components/SliderNavigation"
import "./Categories.scss"

const categoryItems = [
  {
    title: "Action",
    images: [
      "/src/assets/images/categories/action/1.jpg",
      "/src/assets/images/categories/action/2.jpg",
      "/src/assets/images/categories/action/3.jpg",
      "/src/assets/images/categories/action/4.jpg",
    ],
  },
  {
    title: "Adventure",
    images: [
      "/src/assets/images/categories/action/1.jpg",
      "/src/assets/images/categories/action/2.jpg",
      "/src/assets/images/categories/action/3.jpg",
      "/src/assets/images/categories/action/4.jpg",
    ],
  },
  {
    title: "Comedy",
    images: [
      "/src/assets/images/categories/action/1.jpg",
      "/src/assets/images/categories/action/2.jpg",
      "/src/assets/images/categories/action/3.jpg",
      "/src/assets/images/categories/action/4.jpg",
    ],
  },
  {
    title: "Drama",
    images: [
      "/src/assets/images/categories/action/1.jpg",
      "/src/assets/images/categories/action/2.jpg",
      "/src/assets/images/categories/action/3.jpg",
      "/src/assets/images/categories/action/4.jpg",
    ],
  },
  {
    title: "Horror",
    images: [
      "/src/assets/images/categories/action/1.jpg",
      "/src/assets/images/categories/action/2.jpg",
      "/src/assets/images/categories/action/3.jpg",
      "/src/assets/images/categories/action/4.jpg",
    ],
  },
]

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
      <Slider navigationTargetElementId={sliderNavigationId}>
        {categoryItems.map((categoryItem) => (
          <CategoryCard {...categoryItem} key={categoryItem.title} />
        ))}
      </Slider>
    </Section>
  )
}

export default Categories

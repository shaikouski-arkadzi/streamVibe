import Tabs from "@/components/Tabs"
import SliderNavigation from "@/components/SliderNavigation"
import Slider from "@/components/Slider"
import CategoryCard from "@/components/CategoryCard"
import MovieCard from "@/components/MovieCard"
import Section from "@/layouts/Section"
import getIdFromTitle from "@/utils/getIdFromTitle"
import collectionGroups from "./collectionGroups"
import "./Collections.scss"

const Collections = () => {
  return (
    <Tabs
      className="collections container"
      title="collections"
      isEnableOnlyOnMobile
      items={collectionGroups.map((collectionGroup) => ({
        isActive: collectionGroup.isActive,
        title: collectionGroup.title,
        children: (
          <div className="collections__group">
            <p className="collections__title hidden-mobile">
              {collectionGroup.title}
            </p>
            {collectionGroup.items.map(
              ({ title, categoryItems, sliderParams, movieItems }) => {
                const titleFormatted = `${getIdFromTitle(collectionGroup.title)}-${getIdFromTitle(title)}`
                const titleId = `${titleFormatted}-title`
                const sliderNavigationId = `${titleFormatted}-slider-navigation`

                return (
                  <Section
                    className="collections__section"
                    title={title}
                    titleId={titleId}
                    actions={
                      <SliderNavigation id={sliderNavigationId} mode="tile" />
                    }
                    isActionsHiddenOnMobile
                    key={titleId}
                  >
                    <Slider
                      sliderParams={sliderParams}
                      navigationTargetElementId={sliderNavigationId}
                      isBeyondTheViewportOnMobileS
                    >
                      {categoryItems?.map((categoryItem) => (
                        <CategoryCard
                          {...categoryItem}
                          key={categoryItem.title}
                        />
                      )) ??
                        movieItems?.map((movieItem) => (
                          <MovieCard {...movieItem} key={movieItem.title} />
                        ))}
                    </Slider>
                  </Section>
                )
              },
            )}
          </div>
        ),
      }))}
    />
  )
}

export default Collections

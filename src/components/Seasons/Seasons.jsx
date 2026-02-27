import Accordion from "../Accordion"
import AccordionGroup from "../AccordionGroup"
import seasonItems from "./seasonItems"
import "./Seasons.scss"

const Seasons = () => {
  return (
    <AccordionGroup className="seasons" mode="dark" isOrderedList={false}>
      {seasonItems.map(({ title, subtitle, episodes }, index) => (
        <Accordion
          title={title}
          titleLevelClassName="h4"
          subtitle={subtitle}
          id={`season-${title}-${subtitle}`}
          name="seasons"
          isOpen={index === 0}
          key={`season-${title}-${subtitle}`}
          isArrowButton
        >
          <ul className="seasons__list">
            {episodes.map((episode) => (
              <li
                className="seasons__item"
                key={`${episode.number}-${episode.title}`}
              >
                {episode.title}
              </li>
            ))}
          </ul>
        </Accordion>
      ))}
    </AccordionGroup>
  )
}

export default Seasons

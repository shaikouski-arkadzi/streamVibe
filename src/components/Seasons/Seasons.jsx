import Accordion from "../Accordion"
import AccordionGroup from "../AccordionGroup"
import seasonItems from "./seasonItems"
import "./Seasons.scss"

const Seasons = () => {
  return (
    <AccordionGroup mode="dark" isOrderedList={false}>
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
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium,
          quisquam.
        </Accordion>
      ))}
    </AccordionGroup>
  )
}

export default Seasons

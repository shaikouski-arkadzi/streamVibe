import cn from "classnames"
import Button from "@/components/Button"
import "./Socials.scss"

const Socials = ({ className, links = [] }) => {
  return (
    <div className={cn(className, "soc1als")}>
      <ul className="soc1als__list">
        {links.map(({ label, iconName }) => (
          <li className="soc1als__item" key={label}>
            <Button
              className="soc1als__link"
              href="/"
              target="_blank"
              mode="black-10"
              label={label}
              isLabelVisible
              iconName={iconName}
            />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Socials

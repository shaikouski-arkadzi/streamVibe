import cn from "classnames"
import getIdFromTitle from "@/utils/getIdFromTitle"
import "./Tabs.scss"

const Tabs = ({
  className,
  title,
  items = [],
  navigationTargetElementId = null,
}) => {
  return (
    <div
      className={cn(className, "tabs")}
      data-js-tabs={JSON.stringify({ navigationTargetElementId })}
    >
      {!navigationTargetElementId && <div>Tabs navigation</div>}
      <div className="tabs__body">
        {items.map(({ title, children, isActive }) => {
          const titleFormated = getIdFromTitle(title)
          const buttonId = `${titleFormated}-tab`
          const contentId = `${titleFormated}-tabpanel`
          return (
            <div
              className={cn("tabs__content", {
                "is-active": isActive,
              })}
              id={contentId}
              aria-labelledby={buttonId}
              tabIndex={0}
              data-js-tabs-content=""
              key={title}
            >
              {children}
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Tabs

import cn from "classnames"
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
          return (
            <div
              className={cn("tabs__content", {
                "is-active": isActive,
              })}
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

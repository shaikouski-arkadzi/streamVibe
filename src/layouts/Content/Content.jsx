import cn from "classnames"
import "./Content.scss"

const Content = ({ children, isResetPaddingTop = false }) => {
  return (
    <main
      className={cn("content", {
        "content--reset-padding-top": isResetPaddingTop,
      })}
    >
      {children}
    </main>
  )
}

export default Content

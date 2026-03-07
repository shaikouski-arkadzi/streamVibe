import cn from "classnames"
import getIdFromTitle from "@/utils/getIdFromTitle"
import "./Checkbox.scss"

const Checkbox = ({ className, id, label, isRequired }) => {
  const checkboxId = id ?? getIdFromTitle(label)

  return (
    <label className={cn(className, "checkbox")} htmlFor={checkboxId}>
      <input
        className="checkbox__input"
        id={checkboxId}
        type="checkbox"
        required={isRequired}
      />
      <span className="checkbox__label">{label}</span>
    </label>
  )
}

export default Checkbox

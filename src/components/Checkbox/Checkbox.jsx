import cn from "classnames"
import getIdFromTitle from "@/utils/getIdFromTitle"
import "./Checkbox.scss"

const Checkbox = ({ className, id, label, isRequired }) => {
  const fieldId = id ?? getIdFromTitle(label)

  return (
    <label className={cn(className, "checkbox")} htmlFor={fieldId}>
      <input
        className="checkbox__input"
        id={fieldId}
        type="checkbox"
        required={isRequired}
      />
      <span className="checkbox__label">{label}</span>
    </label>
  )
}

export default Checkbox

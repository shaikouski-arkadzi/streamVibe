import cn from "classnames"
import getIdFromTitle from "@/utils/getIdFromTitle"
import "./Field.scss"

const Field = ({
  className,
  id,
  label,
  /**
   * udefined(default) | 'email' | 'textarea'
   */
  type,
  placeholder,
  isRequired,
  inputMode,
  mask,
  before,
}) => {
  const fieldId = id ?? getIdFromTitle(label)

  const Component = type === "textarea" ? "textarea" : "input"

  const extraAttrs = {}

  if (mask) {
    extraAttrs["data-js-input-mask"] = mask
  }

  return (
    <div className={cn(className, "field")}>
      <label className="field__label" htmlFor={fieldId}>
        {label}{" "}
        {isRequired && (
          <span className="field__required-star" aria-hidden={true}>
            *
          </span>
        )}
      </label>
      <div className="field__body">
        {before}
        <Component
          className="field__control"
          id={fieldId}
          type={type}
          placeholder={placeholder}
          required={isRequired}
          inputMode={inputMode}
          {...extraAttrs}
        />
      </div>
    </div>
  )
}

export default Field

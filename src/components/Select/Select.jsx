import cn from "classnames"
import getIdFromTitle from "@/utils/getIdFromTitle"
import "./Select.scss"

const Select = ({
  id,
  label,
  isLabelHidden = true,
  /**
   * Array<{
   *   value: string,
   *   isSelected?: boolean,
   * }>
   */
  options = [],
}) => {
  const selectId = id ?? getIdFromTitle(label)

  const IDs = {
    originalControl: selectId,
    label: `${selectId}-label`,
    dropdown: `${selectId}-dropdown`,
  }

  const selectedOption =
    options.find(({ isSelected }) => isSelected) ?? options[0]

  return (
    <div className="select" data-js-select="">
      <label
        className={cn("select__label", {
          "visually-hidden": isLabelHidden,
        })}
        id={IDs.label}
        htmlFor={IDs.originalControl}
      >
        {label}
      </label>
      <select
        className="select__original-control"
        id={IDs.originalControl}
        tabIndex={-1}
        data-js-select-orginal-control=""
        defaultValue={selectedOption.value}
      >
        {options.map(({ value }) => (
          <option value={value} key={value}>
            {value}
          </option>
        ))}
      </select>
      <div className="select__body">
        <div
          className="select__button"
          role="combobox"
          aria-expanded={false}
          aria-haspopup="listbox"
          aria-controls={IDs.dropdown}
          aria-labelledby={IDs.label}
          tabIndex={0}
          data-js-select-button=""
        >
          {selectedOption.value}
        </div>
        <div
          className="select__dropdown"
          id={IDs.dropdown}
          role="listbox"
          aria-labelledby={IDs.label}
          data-js-select-dropdown=""
        >
          {options.map(({ value, isSelected = false }) => (
            <div
              className={cn("select__option", {
                "is-selected": isSelected,
                "is-current": isSelected,
              })}
              id={`option-${value}`}
              role="option"
              aria-selected={isSelected}
              data-js-select-option=""
              key={`option-${value}`}
            >
              {value}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Select

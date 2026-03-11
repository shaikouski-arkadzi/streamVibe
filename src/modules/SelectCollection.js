import BaseComponent from "@/modules/generic/BaseComponent"
import MatchMedia from "@/constants/MatchMedia"

const rootSelector = "[data-js-select]"

class Select extends BaseComponent {
  selectors = {
    root: rootSelector,
    originalControl: "[data-js-select-original-control]",
    button: "[data-js-select-button]",
    dropdown: "[data-js-select-dropdown]",
    option: "[data-js-select-option]",
  }

  stateClasses = {
    isExpanded: "is-expanded",
    isSelected: "is-selected",
    isCurrent: "is-current",
    isOnTheLeftSide: "is-on-the-left-side",
    isOnTheRightSide: "is-on-the-right-side",
  }

  initialState = {
    isExpanded: false,
    currentOptionIndex: null,
    selectedOptionElement: null,
  }

  constructor(rootElement) {
    super()
    this.rootElement = rootElement
    this.originalControlElement = this.rootElement.querySelector(
      this.selectors.originalControl,
    )
    this.buttonElement = this.rootElement.querySelector(this.selectors.button)
    this.dropdownElement = this.rootElement.querySelector(
      this.selectors.dropdown,
    )
    this.optionElements = this.dropdownElement.querySelectorAll(
      this.selectors.option,
    )
    this.state = this.getProxyState({
      ...this.initialState,
      // Берётся индекс выбранного option из <select>
      currentOptionIndex: this.originalControlElement.selectedIndex,
      // Соответствующий DOM option
      selectedOptionElement:
        this.optionElements[this.originalControlElement.selectedIndex],
    })
    setTimeout(this.fixDropdownPosition, 500)
    this.updateTabIndexes()
    this.bindEvents()
  }

  updateUI() {
    const { isExpanded, currentOptionIndex, selectedOptionElement } = this.state

    // Получаем текст выбранного option
    const newSelectedOptionValue = selectedOptionElement.textContent.trim()

    // Синхронизируем кастомный select с настоящим <select>
    const updateOriginalControl = () => {
      this.originalControlElement.value = newSelectedOptionValue
    }

    // Текст кнопки = выбранный option
    const updateButton = () => {
      this.buttonElement.textContent = newSelectedOptionValue
      this.buttonElement.classList.toggle(
        this.stateClasses.isExpanded,
        isExpanded,
      )
      this.buttonElement.ariaExpanded = isExpanded
      this.buttonElement.ariaActiveDescendant =
        this.optionElements[currentOptionIndex].id
    }

    const updateDropdown = () => {
      this.dropdownElement.classList.toggle(
        this.stateClasses.isExpanded,
        isExpanded,
      )
    }

    const updateOptions = () => {
      this.optionElements.forEach((optionElement, index) => {
        // Это option под курсором / клавиатурой
        const isCurrent = currentOptionIndex === index
        // Это реально выбранный option
        const isSelected = selectedOptionElement === optionElement

        optionElement.classList.toggle(this.stateClasses.isCurrent, isCurrent)
        optionElement.classList.toggle(this.stateClasses.isSelected, isSelected)
        optionElement.ariaSelected = isSelected
      })
    }

    updateOriginalControl()
    updateButton()
    updateDropdown()
    updateOptions()
  }

  fixDropdownPosition = () => {
    const viewportWidth = document.documentElement.clientWidth
    const viewportCenterX = viewportWidth / 2
    const { width, x } = this.buttonElement.getBouningClientRect()
    const buttonCenterX = x + width / 2
    const isButtonOnTheLeftViewportSide = buttonCenterX < viewportCenterX

    this.dropdownElement.classList.toggle(
      this.stateClasses.isOnTheLeftSide,
      isButtonOnTheLeftViewportSide,
    )
    this.dropdownElement.classList.toggle(
      this.stateClasses.isOnTheRightSide,
      !isButtonOnTheLeftViewportSide,
    )
  }

  updateTabIndexes(isMobileDevice = MatchMedia.mobile.matches) {
    this.originalControlElement.tabIndex = isMobileDevice ? 0 : -1
    this.buttonElement.tabIndex = isMobileDevice ? -1 : 0
  }

  onMobileMatchMediaChange = (event) => {
    this.updateTabIndexes(event.matches)
  }

  onOriginalControlChange = () => {
    // Синхронизируем  настоящего <select> с кастомным
    this.state.selectedOptionElement =
      this.optionElements[this.originalControlElement.selectedIndex]
  }

  onButtonClick = () => {
    this.toggleExpandedState()
  }

  toggleExpandedState() {
    this.state.isExpanded = !this.state.isExpanded
  }

  expand() {
    this.state.isExpanded = true
  }

  collapse() {
    this.state.isExpanded = false
  }

  bindEvents() {
    MatchMedia.mobile.addEventListener("change", this.onMobileMatchMediaChange)
    this.originalControlElement.addEventListener(
      "change",
      this.onOriginalControlChange,
    )
    this.buttonElement.addEventListener("click", this.onButtonClick)
  }
}

class SelectCollection {
  constructor() {
    this.init()
  }

  init() {
    document
      .querySelectorAll(rootSelector)
      .forEach((element) => new Select(element))
  }
}

export default SelectCollection

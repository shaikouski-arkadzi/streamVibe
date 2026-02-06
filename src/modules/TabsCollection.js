import getParams from "@/utils/getParams"

const rootSelector = "[data-js-tabs]"

class Tabs {
  selectors = {
    root: rootSelector,
    navigation: "[data-js-tabs-navigation]",
    button: "[data-js-tabs-button]",
    content: "[data-js-tabs-content]",
  }

  stateClasses = {
    isActive: "is-active",
  }

  constructor(rootElement) {
    this.rootElement = rootElement
    this.params = getParams(this.rootElement, this.selectors.root)
    this.navigationElement = this.params.navigationTargetElementId
      ? document.getElementById(this.params.navigationTargetElementId)
      : this.rootElement.querySelector(this.selectors.navigation)
    this.buttonElements = [
      ...this.navigationElement.querySelectorAll(this.selectors.button),
    ]
    this.contentElements = [
      ...this.rootElement.querySelectorAll(this.selectors.content),
    ]
    this.state = {
      activeTabIndex: this.buttonElements.findIndex(
        ({ ariaSelected }) => ariaSelected,
      ),
    }
    this.bindEvents()
  }

  updateUI() {
    const { activeTabIndex } = this.state
    this.buttonElements.forEach((buttonElement, index) => {
      const isActive = index === activeTabIndex
      buttonElement.classList.toggle(this.stateClasses.isActive, isActive)
      buttonElement.ariaSelected = isActive
      buttonElement.tabIndex = isActive ? 0 : -1
    })
    this.contentElements.forEach((contentElement, index) => {
      const isActive = index === activeTabIndex
      contentElement.classList.toggle(this.stateClasses.isActive, isActive)
    })
  }

  onButtonClick(buttonIndex) {
    this.state.activeTabIndex = buttonIndex
    this.updateUI()
  }

  onKeyDown = (event) => {
    const { target, code } = event
    const isTabsContentFocused = this.contentElements.some(
      (contentElement) => contentElement === target,
    )
    const isTabsButtonFocused = this.buttonElements.some(
      (buttonElement) => buttonElement === target,
    )

    if (!isTabsContentFocused && !isTabsButtonFocused) {
      return
    }

    const action = {
      ArrowLeft: this.previousTab,
      ArrowRight: this.nextTab,
      Home: this.firstTab,
      End: this.lastTab,
    }[code]

    action?.()
  }

  bindEvents() {
    this.buttonElements.forEach((buttonElement, index) => {
      buttonElement.addEventListener("click", () => this.onButtonClick(index))
    })
    document.addEventListener("keydown", this.onKeyDown)
  }
}

class TabsCollection {
  constructor() {
    this.init()
  }

  init() {
    document.querySelectorAll(rootSelector).forEach((element) => {
      new Tabs(element)
    })
  }
}

export default TabsCollection

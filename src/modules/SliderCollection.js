const rootSelector = "[data-js-slider]"

class Slider {
  selectors = {
    root: rootSelector,
    swiper: "[data-js-slider-swiper]",
    navigation: "[data-js-slider-navigation]",
    previousButton: "[data-js-slider-previous-button]",
    nextButton: "[data-js-slider-next-button]",
    pagination: "[data-js-slider-pagination]",
  }

  constructor(rootElement) {
    this.rootElement = rootElement
  }
}

class SliderCollection {
  constructor() {
    this.init()
  }

  init() {
    document
      .querySelectorAll(rootSelector)
      .forEach((element) => new Slider(element))
  }
}

export default SliderCollection

class BaseComponent {
  getProxyState(initialState) {
    return new Proxy(initialState, {
      get: (target, prop) => {
        return target[prop]
      },
      set: (target, prop, newValue) => {
        const oldValue = target[prop]

        target[prop] = newValue

        if (newValue !== oldValue) {
          this.updateUI
        }

        return
      },
    })
  }

  /**
   * Перерисовка UI в ответ на обновление состояния
   */
  updateUI() {
    throw new Error("Необходимор реализовать метод updateUI")
  }
}

export default BaseComponent

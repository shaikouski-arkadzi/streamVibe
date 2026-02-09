class BaseComponent {
  /**
   * Перерисовка UI в ответ на обновление состояния
   */
  updateUI() {
    throw new Error("Необходимор реализовать метод updateUI")
  }
}

export default BaseComponent

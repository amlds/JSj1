import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ["benjamin", "link"]

  connect() {
    console.log("Hello from our first Stimulus controller")
  }

  disable() {
    this.benjaminTarget.innerText = 'Bingo !'
    this.benjaminTarget.setAttribute("disabled", "");
    this.linkTarget.classList.remove('d-none')
  }

  reset() {
    this.benjaminTarget.removeAttribute("disabled");
    this.benjaminTarget.innerText = "Click me !"
    this.linkTarget.classList.add('d-none');
  }
}

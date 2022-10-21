import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="spa"
export default class extends Controller {
  static targets = ["spa.modal"];
  connect() {
  }
  initialize() {
    console.log("Hello World Roman");
    console.log(this.modalTarget);
}

launchSpaDemo(event) {
  console.log(event);
  //this.greet();
  let modalController = this.application.getControllerForElementAndIdentifier(
    this.modalTarget,
    "spa.modal"
);
}

  greet() {
    this.outputTarget.textContent = `Hello, from roman ${this.nameTarget.value}!`
  }
}

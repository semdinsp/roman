import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="spa"
export default class extends Controller {
  static targets = ["modal"];
  connect() {
    console.log("connecting");
  }
  initialize() {
    console.log("Hello World Roman");
    
}

launchSpaDemo(event) {
  console.log("Launch spa demo");
  console.log(event);
  console.log(this.modalTarget);
  //this.greet();
  let modalController = this.application.getControllerForElementAndIdentifier(
    this.modalTarget,
    "modal"  );  
console.log("Opening");
   modalController.open();
}

  greet() {
    this.outputTarget.textContent = `Hello, from roman ${this.nameTarget.value}!`
  }
}

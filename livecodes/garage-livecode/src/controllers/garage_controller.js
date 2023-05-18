import { Controller } from "@hotwired/stimulus"

const baseUrl = 'https://wagon-garage-api.herokuapp.com/badbatch/cars';
export default class extends Controller {
  static targets = ["carsList"]

  connect() {
    console.log("hello from garage controller!")
    this.displayCars()
  }

  createCar(event) {
    event.preventDefault();
    console.log(event)
    const carProperties = {
      "brand": event.target[0].value,
      "model": event.target[1].value,
      "owner": event.target[3].value,
      "plate": event.target[2].value
    };
    console.log(carProperties);
    fetch(baseUrl, {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(carProperties)
    })
    .then(response => response.json())
    .then((data) => {
      console.log(data)
      this.displayCars()
    })
  }

  displayCars() {
    this.carsListTarget.innerHTML = ""
    fetch(baseUrl)
      .then(response => response.json())
      .then((data) => {
        console.log(data)
        data.forEach(car => {
          const carDiv = `
          <div class="car justify-content-between">
            <div class="car-image">
              <img src="http://loremflickr.com/280/280/Ferrari" />
            </div>
            <div class="car-info">
              <h4>${car.brand} ${car.model}</h4>
              <p><strong>Owner:</strong>${car.owner}</p>
              <p><strong>Plate:</strong>${car.plate}</p>
            </div>
            <button type="button" class="btn btn-primary" data-id=${car.id} data-action="click->garage#deleteCars">Delete</button>
          </div>
          `
          this.carsListTarget.insertAdjacentHTML("beforeend", carDiv)
        });
      })
  }

  deleteCars(event) {
    console.log(event)
   fetch(`https://wagon-garage-api.herokuapp.com/cars/${event.target.dataset.id}`, {
      method: "DELETE"
    })
      .then(response => response.json())
      .then((data) => {
        console.log(data)
        this.displayCars()
    })
  }
}

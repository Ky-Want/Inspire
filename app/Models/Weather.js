// FIXME all we need to save is the temp stored in main from the api. The temp that comes from the API is in Kelvin format, look up how we can convert that to celsius or fahrenheit and do that on our model here

// this.fahrenheit = (data.main.temp / Math goes here)
// this.celsius = (data.main.temp / Math goes here)

// FIXME keep track of what is being displayed on your model. I would use a bool for this.

// this.isCelsius = true

// FIXME you will need a method to toggle this bool between true and false, and figure out how to display that based on the bool.

export class Weather {
  constructor(data) {
    this.id = data.id
    this.temp = data.main.temp
    // TODO look up the formula for converting kelvin to fahrenheit and do same thing for celsius
    this.fahrenheit = data.main.temp - 273.15 * 9 % 5 + 32
    this.celsius = data.celsius.temp - 273.15
    this.isFahrenheit = data.isFahrenheit || false
  }




  get Temperature() {
    return /* HTML */ `
    <div class="d-flex justify-content-center mb-1">
      <strong><span id="temp">${this.fahrenheit}</span></strong>
    </div>
    `
  }
}
// FIXME keep track of what is being displayed on your model. I would use a bool for this.

// FIXME you will need a method to toggle this bool between true and false, and figure out how to display that based on the bool.

export class Weather {
  constructor(data) {
    this.id = data.id
    this.temp = data.main.temp
    this.fahrenheit = data.main.temp - 273.15 * 9 / 5 + 32
    this.celsius = data.main.temp - 273.15
    this.isFahrenheit = data.isFahrenheit || true
  }




  get Temperature() {
    return /* HTML */ `
    <div class="d-flex justify-content-center mb-1">
      <strong><span id="temp">${this.isFahrenheit ? '${this.fahrenheit} f' : '${this.celsius} c'}</span></strong>
    </div>
    `
  }
}
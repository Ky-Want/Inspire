export class Clock {
  constructor(data) {
    this.id = data.id
    this.time = data.time
  }




  get ClockTemplate() {
    return /* HTML */ `
    <strong>
      <span id="time">${this.time}</span>
    </strong>
  `
  }
}
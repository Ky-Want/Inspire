export class Clock {
  constructor(data) {
    this.timezone = data.timezone
  }




  get ClockTemplate() {
    return /* HTML */ `
    <strong>
      <span id="time">${this.timezone}</span>
    </strong>
  `
  }
}
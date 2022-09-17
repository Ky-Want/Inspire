export class Quote {
  constructor(data) {
    this.id = data.id
    this.content = data.content
    this.author = data.author
  }




  get quoteTemplate() {
    return /* HTML */ `
    <div class="d-flex justify-content-center text-light fs-5 displayStuff mb-5 selectable">
      <strong><span id="quote">"${this.content}"</span></strong>
    </div>
  `
  }



  get authorTemplate() {
    return /* HTML */ `
    <div class="hide">
      <div class="d-flex justify-content-center"><span id="author">-${this.author}</span></div>
    </div>
    `
  }
}
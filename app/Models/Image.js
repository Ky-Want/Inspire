export class Image {
  constructor(data) {
    this.id = data.id
    this.largeImgUrl = data.largeImgUrl
    this.tags = data.tags
    this.author = data.author
    this.query = data.query
  }




  get imageTemplate() {
    return /* HTML */ `
    <body id="${this.largeImgUrl}">
    `
  }
}
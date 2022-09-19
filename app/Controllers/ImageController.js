import { appState } from "../AppState.js";
import { imagesServices } from "../Services/ImageServices.js";
import { Pop } from "../Utils/Pop.js";
import { setHTML, setText } from "../Utils/Writer.js";



function drawBgImage() {
  let image = appState.activeImage
  document.querySelector('body').style.backgroundImage = `url(${image.largeImgUrl})`
  setHTML('ImgLocation', image.largeImgUrl)
}



// function drawBgImage() {
//   let template = ''
//   appState.images.forEach(i => template += i.imageTemplate)
//   setHTML('imgLocation', template)
// }




export class ImageController {
  constructor() {
    this.getRandomImage()
    appState.on('images', drawBgImage)
    drawBgImage()
  }


  async getRandomImage() {
    try {
      await imagesServices.getRandomImage()
    } catch (error) {
      console.error('[get random image controller]', error);
      Pop.error(error.message)
    }
  }
}
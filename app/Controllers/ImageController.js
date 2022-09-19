import { appState } from "../AppState.js";
import { imagesServices } from "../Services/ImageServices.js";
import { Pop } from "../Utils/Pop.js";
import { setHTML, setText } from "../Utils/Writer.js";



function drawBgImage() {
  let image = appState.activeImage
  // console.log('Here is the image', image);
  document.querySelector('body').style.backgroundImage = `url(${image.largeImgUrl})`
}




export class ImageController {
  constructor() {
    this.getRandomImage()
    appState.on('activeImage', drawBgImage)
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
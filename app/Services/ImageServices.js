import { appState } from "../AppState.js";
import { Image } from "../Models/Image.js";
import { SandboxServer } from "./AxiosServices.js";



class ImageServices {
  async getRandomImage() {
    const res = await SandboxServer.get('/api/images')

    appState.activeImage = new Image(res.data)
  }




  setActiveImage(id) {
    const image = appState.images.find(i => i.id == id)
    if (!image) {
      throw new Error('That is a bad Id')
    }
    appState.activeImage = image
  }
}

export const imagesServices = new ImageServices()
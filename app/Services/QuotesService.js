import { appState } from "../AppState.js"
import { Quote } from "../Models/Quote.js"
import { SandboxServer } from "./AxiosServices.js"



class QuotesService {
  async getQuotes() {
    console.log('quotes service');
    const res = await SandboxServer.get('api/quotes')
    console.log('get quotes', res.data);
  }



  async getAuthor() {

  }
}


export const quotesService = new QuotesService()
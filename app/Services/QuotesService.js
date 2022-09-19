import { appState } from "../AppState.js"
import { Quote } from "../Models/Quote.js"
import { SandboxServer } from "./AxiosServices.js"



class QuotesService {
  async getQuotes() {
    const res = await SandboxServer.get('/api/quotes')
    console.log(res.data);

    appState.activeQuote = new Quote(res.data)
    console.log('appState: ', appState.quotes);
  }




  setActiveQuote(id) {
    const quote = appState.quotes.find(q => q.id == id)
    if (!quote) {
      throw new Error('That is a bad Id')
    }
    appState.activeQuote = quote
  }
}

export const quotesService = new QuotesService()
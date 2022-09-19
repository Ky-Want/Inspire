import { appState } from "../AppState.js"
import { Quote } from "../Models/Quote.js"
import { SandboxServer } from "./AxiosServices.js"



class QuotesService {
  async getQuote() {
    const res = await SandboxServer.get('/api/quotes')

    appState.activeQuote = new Quote(res.data)
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
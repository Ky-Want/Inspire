import { appState } from "../AppState.js";
import { quotesService } from "../Services/QuotesService.js";
import { Pop } from "../Utils/Pop.js";
import { setHTML, setText } from "../Utils/Writer.js";



function drawQuote() {
  let template = ''
  appState.quotes.forEach(t => template += t.quoteTemplate)
  setText('quote', template)
}
function drawAuthor() {
  let template = ''
  appState.quotes.forEach(t => template += t.authorTemplate)
  setText('author', template)
}



export class QuotesController {
  constructor() {
    this.getQuotes()
    appState.on('quotes', drawQuote)
    drawQuote()
    drawAuthor()
  }




  async getQuotes() {
    try {
      await quotesService.getQuotes()
    } catch (error) {
      console.error('[GetQuotes]', error)
      Pop.error(error)
    }
  }
}
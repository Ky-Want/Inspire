import { appState } from "../AppState.js";
import { quotesService } from "../Services/QuotesService.js";
import { Pop } from "../Utils/Pop.js";
import { setHTML, setText } from "../Utils/Writer.js";


// FIXME the data type for the quote should be an object, so we shouldn't need to foreach here
// FIXME make sure we are targeting the correct property in the appState as well
function drawQuote() {
  let quote = appState.activeQuote

  setHTML('quote', appState.activeQuote.content)
  console.log('Here is the quote', quote);
}




function drawAuthor() {
  let author = appState.activeQuote

  setHTML('author', appState.activeQuote.author)
  console.log('Here is the author', author);
}



export class QuotesController {
  constructor() {
    this.getQuote()
    appState.on('activeQuote', drawQuote)
    appState.on('activeQuote', drawAuthor)
  }




  async getQuote() {
    try {
      await quotesService.getQuote()
    } catch (error) {
      console.error('[GetQuotes]', error)
      Pop.error(error)
    }
  }
}
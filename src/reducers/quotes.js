export default (state = [], action) => {
  let idx
  switch (action.type) {
    case 'ADD_QUOTE':
      return [...state, action.quote]

    case 'REMOVE_QUOTE':
      idx = state.findIndex(quote => quote.id === action.quoteId)
      return [...state.slice(0, idx), ...state.slice(idx + 1)]

    case 'UPVOTE_QUOTE':
      return state.map(quote => {
        let upvoted = {...quote}
        if (quote.id === action.quoteId) {
           upvoted.votes = quote.votes + 1
        }
        return upvoted
      })

      case 'DOWNVOTE_QUOTE':
      return state.map(quote => {
        let downvoted = {...quote}
        if (quote.id === action.quoteId  && quote.votes > 0) {
           downvoted.votes = quote.votes - 1 
        }
        return downvoted
      })

    default: 
      return state
  }
}
import { combineReducers } from 'redux'

import { booklist } from './book-list'

const appReducer = combineReducers({
  booklist
})

export default appReducer

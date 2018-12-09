import { getTopics } from '../../api'

export const booklist = result => ({
  type: 'BOOKLIST',
  data: result
})

export const fetchBookList = params => {
  const books = {
    list: [{ bookName: '天龙八部', dbName: 'Oracle', created_at: '2018-10-01 00:00:00' }]
  }

  return async (dispatch, getState) => {
    // setTimeout(() => dispatch(booklist(books)), 1000)
    getTopics(params)
      .then(res => {
        dispatch(booklist(books))
      })
      .catch(err => {})
  }
}

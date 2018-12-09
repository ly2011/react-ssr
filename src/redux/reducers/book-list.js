const defaultPagination = {
  total: 0,
  currentPage: 1,
  totalPage: 0,
  pageSize: 10
}

const initialState = {
  list: [],
  pagination: defaultPagination
}

const booklist = (state = initialState, action) => {
  switch (action.type) {
    case 'BOOKLIST':
      const res = {
        pagination: action.data && action.data.pagination ? action.data.pagination : defaultPagination,
        list: action.data && action.data.list ? state.list.concat(action.data.list) : state.list
      }
      state = res
      return state
    default:
      return state
  }
}

// export default booklist

export { booklist }

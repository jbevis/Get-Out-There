const filterReducer = (state={}, action) => {
  switch (action.type) {
  case 'SET_FILTER':
    return Object.assign({}, action.filter)
  default:
    return state
  }
}

export default filterReducer

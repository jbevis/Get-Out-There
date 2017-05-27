const displayReducer = (state={}, action) => {
  switch (action.type) {
    case 'SHOW_TRAILS':
      return Object.assign({}, action.trails)
    default:
      return state
  }
}

export default displayReducer

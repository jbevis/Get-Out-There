const trailsReducer = (state={}, action) => {
  switch (action.type) {
  case 'GET_TRAILS':
    return Object.assign({}, action.trails)
  default:
    return state
  }
}

export default trailsReducer

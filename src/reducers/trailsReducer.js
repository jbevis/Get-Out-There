const trailsReducer = (state={}, action) => {
  switch (action.type) {
    case 'GET_TRAILS':
      return Object.assign({}, state, action.trails)
    default:
      return state
  }
}

export default trailsReducer

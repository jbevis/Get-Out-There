const trailsReducer = (state={}, action) => {
  console.log('trailReducer fired');
  switch (action.type) {
    case 'GET_TRAILS':
      return Object.assign({}, action.trails)
    default:
      return state
  }
}

export default trailsReducer

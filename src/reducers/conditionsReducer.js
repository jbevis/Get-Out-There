const conditionsReducer = (state={}, action) => {
  switch (action.type) {
  case 'GET_CONDITIONS':
    return Object.assign({}, state, action.trail)
  default:
    return state
  }
}

export default conditionsReducer;

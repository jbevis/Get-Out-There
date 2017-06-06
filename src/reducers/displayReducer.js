const filterByDifficulty = (trails, diffLevel) => {
  return Object.keys(trails).reduce((acc, key) => {
    if (trails[key].difficulty === diffLevel) {
      acc[key] = trails[key]
    } else if (diffLevel === 'show-all') {
      return trails
    }
    return acc
  }, {});
}

const displayReducer = (state={}, action) => {
  switch (action.type) {
  case 'SHOW_TRAILS':
    if (action.diffLevel) {
      return Object.assign({}, filterByDifficulty(action.trails, action.diffLevel))
    }
    return Object.assign({}, action.trails)
  default:
    return state
  }
}


export default displayReducer

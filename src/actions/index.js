export const getTrails = (trails) => {
  return {
    type: 'GET_TRAILS',
    trails
  }
}

export const setFilter = (filter) => {
  return {
    type: 'SET_FILTER',
    filter
  }
}

export const showTrails = (trails) => {
  return {
    type: 'SHOW_TRAILS',
    trails
  }
}

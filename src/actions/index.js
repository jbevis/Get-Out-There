import { formatTrailData, formatConditionData } from '../ops/logic';
import apiCalls from '../ops/apiCalls'

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
  console.log('show trails fired', trails)
  return {
    type: 'SHOW_TRAILS',
    trails
  }
}

export const getConditions = (trail) => {
  return {
    type: 'GET_CONDITIONS',
    trail
  }
}

export const fetchTrails = (location, radius) => {
  return (dispatch) => {
    return apiCalls.searchByLocation(location, radius)
    .then((trails) => dispatch(getTrails(formatTrailData(trails))))
    .then((trails) => dispatch(showTrails(trails.trails)))
    .catch((error) => console.error(error))
  }
}

// export const fetchConditions = (data) => {
//   return (dispatch) => {
//     return apiCalls.getTrailConditions(data.id)
//     .then((trail) => dispatch(getConditions(formatConditionData(data, trail[0]))))
//     .catch((error) => console.error(error))
//   }
// }

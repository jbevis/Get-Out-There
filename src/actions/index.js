import { formatTrailData, formatConditionData } from '../ops/logic';
import apiCalls from '../ops/apiCalls'
import fetch from 'isomorphic-fetch';


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

export const getConditions = (conditions) => {
  return {
    type: 'GET_CONDITIONS',
    conditions
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

export const fetchConditions = (trail) => {
  return (dispatch) => {
    return apiCalls.getTrailConditions(trail.id)
    .then((conditions) => dispatch(getConditions(formatConditionData(trail, conditions))))
    .catch((error) => console.error(error))
  }
}

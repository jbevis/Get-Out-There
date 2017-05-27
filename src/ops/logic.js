// import { geoCodeKey, trailsKey} from '../apiKeys'
//
// export const getLatLong = (json) => {
//     console.log(json);
//     return json.results[0].geometry.location;
//   }
//
// export const getTrailsByLocation = (lat, long) => {
//   console.log(lat, long);
//   // fetch(`https://www.hikingproject.com/data/get-trails?lat=${lat}&lon=${long}&key=${trailsKey}`)
//   // .then((resp) => resp.json())
//   // .then((trails) => console.log(trails))
//   // .catch((error) => console.log(error, 'error fetching trails'))
// }
//
// export const searchByLocation = (location) => {
//   const api =`https://maps.googleapis.com/maps/api/geocode/json?new_forward_geocoder=true&components=locality:${location}&key=${geoCodeKey}`
//   fetch(api)
//   .then((resp) => resp.json())
//   .then((json) => this.getLatLong(json))
//   .then((coordinates) => this.setState({ lat: coordinates.lat, long: coordinates.lng }))
//   .catch((error) => console.log(error, 'error fetching LatLong'))
//   console.log(this.state.lat, this.state.long);
//
//   this.getTrailsByLocation(this.state.lat, this.state.long)
// }

export const formatTrailData = (data) => {
  return data.reduce((acc, trail) => {
    if (!acc[trail.name]) {
      acc[trail.name] = trail
    }
    return acc
  },{})
}

export const difficultyLevel = (difficulty) => {
  switch (difficulty.difficulty) {
  case 'green':
    return 'Easy'
  case 'greenBlue':
    return 'Easy/Intermediate'
  case 'blue':
    return 'Intermediate'
  case 'blueBlack':
    return 'Intermediate/Difficult'
  case 'black':
    return 'Difficult'
  case 'dblack':
    return 'Extremely Difficult'
  default:
  }
}

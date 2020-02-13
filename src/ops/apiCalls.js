import { trailsKey, mapquestKey } from '../apiKeys';
import fetch from 'isomorphic-fetch';


export default class apiCalls {
  static searchByLocation (location, radius) {
    return fetch(`http://www.mapquestapi.com/geocoding/v1/address?key=${mapquestKey}&location=${location}`)
    .then((resp) => resp.json())
    .then((json) => {
      const coordinates = json.results[0].locations[0].latLng;

      return this.getTrailsByLocation(coordinates.lat, coordinates.lng, radius)
    })
    .catch((error) => console.log(error, 'error fetching LatLong'))
  }

  static getTrailsByLocation (lat, long, radius) {
    return fetch(`https://www.hikingproject.com/data/get-trails?lat=${lat}&lon=${long}&maxDistance=${radius}&maxResults=20&key=${trailsKey}`)
    .then((resp) => resp.json())
    .catch((error) => console.log(error, 'error fetching trails'))
  }

  static getTrailConditions (id) {
    return fetch(`https://www.hikingproject.com/data/get-conditions?ids=${id}&key=${trailsKey}`)
    .then((resp) => resp.json())
    .then((json) => json[0])
    .catch((error) => console.log(error, 'error fetching trail conditions'))
  }
}

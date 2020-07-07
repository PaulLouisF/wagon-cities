// TODO: add and export your own actions
import cities from '../cities';

export function setCities() {
  // TODO: API call! For now, simulate a DB
  return {
    type: 'SET_CITIES',
    payload: cities
  }
}

export function setActiveCity(city) {
  // TODO: API call! For now, simulate a DB
  return {
    type: 'SET_ACTIVE_CITY',
    payload: city
  }
}





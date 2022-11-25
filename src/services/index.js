import axios from "axios";

const apiURL = "https://boraajudar.duckdns.org/api/doar/";

export const getLocationsSpecific = () => {
  return axios({
      method: 'GET',
      url: `${apiURL}1`,
  })
}

export const getLocations = () => {
  return axios({
      method: 'GET',
      url: apiURL,
  })
}
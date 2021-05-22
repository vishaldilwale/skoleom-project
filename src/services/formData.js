const axios = require('axios');

export const FormDataAPI = (payload) => {
  return axios.post("https://api.skoleom.com/api/users", payload)
};

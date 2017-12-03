import {} from 'dotenv/config';
import superagent from 'superagent';


const API_URL = process.env.REACT_APP_API_URL;

export const userProfileRequest = (token) => {
  return superagent.get(`${API_URL}/api/user`)
    .withCredentials()
    .then(res => {
      if(res.body)
        return res.body;
    })
    .catch(console.error());
};

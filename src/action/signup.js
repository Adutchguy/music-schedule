import {} from 'dotenv/config';
import superagent from 'superagent';
import * as util from '../lib/util.js';

const API_URL = process.env.REACT_APP_API_URL;

export const signupRequest = (userObject) => {
  console.log('hit signupRequest');
  return superagent.post(`${API_URL}/api/userSignup`)
    .withCredentials()
    .send(userObject)
    .then(res => {
      util.sessionCookieCreate('X-IBCF-Token', res.text);
      if(res.text){
        return res;
      }
    })
    .catch(console.error());
};

import {} from 'dotenv/config';
import superagent from 'superagent';
import * as util from '../lib/util.js';

const API_URL = process.env.REACT_APP_API_URL;

export const loginRequest = (userObject) => {
  return superagent.get(`${API_URL}/api/userLogin`)
    .withCredentials()
    .auth(userObject.username, userObject.password)
    .then(res => {
      util.sessionCookieCreate('X-IBCF-Token', res.text);
      if(res.text)
        return res;
    })
    .catch(console.error());
};

export const logoutRequest = () => {
  util.cookieDelete('X-IBCF-Token');
};

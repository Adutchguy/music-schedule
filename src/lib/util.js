import CryptoJS from 'crypto-js';
import {} from 'dotenv/config';

export function passwordHashCreate(password){
  return CryptoJS.AES.encrypt(password, process.env.REACT_APP_APP_SECRET).toString();
}

export const cookieTime = days => {
  let result = new Date();
  let millisecondsPerDay = 86400000;
  result.setTime(result.getTime() + days * millisecondsPerDay);
  return result.toUTCString();
};

export const cookieCreate = (name, value, days) => {
  let expireDate = days ? ` ${cookieTime(days)};` : '';
  document.cookie = `${name}=${value}; expires=${expireDate} path='/'`;
};

export const sessionCookieCreate = (name, value) => {
  document.cookie = `${name}=${value}; path='/'`;
};

export const cookieFetch = key => {
  let cookies = Object.assign(
    ...document.cookie.split(';').map(cookie => {
      let [key, value] = cookie.split('=');
      return { [key.trim()]: value };
    })
  );
  return cookies[key];
};

export const cookieDelete = key => {
  document.cookie = `${key}=; expires=Thu, 01 Jan 1970 00:00:00 GMT`;
};

import CryptoJS from 'crypto-js';
import {} from 'dotenv/config';

export function passwordHashCreate(password){
  return CryptoJS.AES.encrypt(password, process.env.REACT_APP_APP_SECRET).toString();
}

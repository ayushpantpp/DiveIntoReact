import axios from 'axios';
const KEY = 'AIzaSyAGaVPsnmXhxFYOVWV4kUt5PwE_BO9hbRM';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3/search',
    params:{
      part:'snippet',
      maxResults: 5,
      key: KEY
    }
});
import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID 31ce1f4bd45dcfe8cbfd8cc70c24655825d8e0667d33840d2992084b176d99f2'
  }
})


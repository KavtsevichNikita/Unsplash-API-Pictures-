import axios from 'axios'


export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID 0jLQXQNLS2OfJhGMFAH5hLMnbsH5ifcU25AHnNe7UTk'
    }
});
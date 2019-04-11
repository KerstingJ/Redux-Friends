import axios from 'axios';

let token = localStorage.get('friendsToken')

export default axios.create({
    baseUrl: 'http://localhost:5000',
    headers: {
        'Content-Type': 'application/json',
        Authorization: `${token}`
    }
})
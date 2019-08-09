import axios from 'axios';

let token = localStorage.getItem('friendsToken')

export default axios.create({
    baseURL: 'http://localhost:5000',
    headers: {
        'Content-Type': 'application/json',
        Authorization: `${token}`
    }
})
import axios from 'axios'

const Api = axios.create({
    timeout: 30000,
    headers: {
        "Content-Type": "application/json",
    }
})

export default Api;
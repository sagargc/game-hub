import axios from "axios";


export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: 'a5e33d2cf16546aaad649959b17bf07a'
    }
})
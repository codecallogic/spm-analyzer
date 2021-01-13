import {API} from '../config'
import axios from 'axios'

export default {
    sales
}

function sales(market, category, rank){
    return axios.post(`${API}/sales`, {market, category, rank})
    .then(res => {
        if (res.statusText == 'OK') return res;
        throw new Error('Error getting sales estimation')
    })
}
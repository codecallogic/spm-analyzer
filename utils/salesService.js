import {API} from '../config'
import axios from 'axios'

export default {
    sales
}

function sales(market, category, rank){
    console.log(market)
    return axios.post(`${API}/sales`, {market, category, rank})
    .then(res => {
        if (res.status == 200) return res;
        throw new Error('Error getting sales estimation')
    })
}
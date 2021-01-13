import {API} from '../config'
const BASE_URL = '/api/sales/';

export default {
    sales
}

function sales(market, category, rank){
    return fetch(`${API}/sales`, {
        method: 'POST',
        headers: new Headers({'content-type': 'application/json'}),
        body: JSON.stringify({market, category, rank})
    }).then(res => {
        if (res.ok) return res.json();
        throw new Error('Error getting sales estimation')
    })
}
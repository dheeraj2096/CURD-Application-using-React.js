import axios from 'axios'

export const getNames = () => {
    return axios.get(`http://127.0.0.1:5000/api/invest_names/`,
        { headers : {'Content-type':'application/json'}
    })
    .then(res=>{
        return res
    })
}
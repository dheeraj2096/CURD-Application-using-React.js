import axios from 'axios'

export const getDataAAPL = () => {
    return axios.get(`https://financialmodelingprep.com/api/v3/financials/income-statement/AAPL`,
        { headers : {'Content-type':'application/json'}
    })
    .then(res=>{
        return res.data.financials[0]["Revenue Growth"]
    })
}
export const getDataMSFT = () => {
    return axios.get(`https://financialmodelingprep.com/api/v3/financials/income-statement/MSFT`,
        { headers : {'Content-type':'application/json'}
    })
    .then(res=>{
        return res.data.financials[0]["Revenue Growth"]
    })
}
export const getDataFB = () => {
    return axios.get(`https://financialmodelingprep.com/api/v3/financials/income-statement/FB`,
        { headers : {'Content-type':'application/json'}
    })
    .then(res=>{
        return res.data.financials[0]["Revenue Growth"]
    })
}
export const getDataNVDA = () => {
    return axios.get(`https://financialmodelingprep.com/api/v3/financials/income-statement/NVDA`,
        { headers : {'Content-type':'application/json'}
    })
    .then(res=>{
        return res.data.financials[0]["Revenue Growth"]
    })
}
export const getDataGOOG = () => {
    return axios.get(`https://financialmodelingprep.com/api/v3/financials/income-statement/GOOG`,
        { headers : {'Content-type':'application/json'}
    })
    .then(res=>{
        return res.data.financials[0]["Revenue Growth"]
    })
}
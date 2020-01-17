import React, {Component} from 'react'
import {getDataAAPL, getDataFB, getDataGOOG, getDataMSFT, getDataNVDA} from './components/API'

class Homepage extends Component{
    constructor(){
        super()
        this.state = {
            companies : {}
        }
    }

    componentDidMount () {
        this.getAll()
    }

    getAll = () => {
        getDataAAPL().then(data=>{
            let comp = this.state.companies
            comp["AAPL"] = parseFloat(data)
            this.setState(
                {
                    comp
                },
                () => {
                    console.log(this.state.companies["AAPL"])
                }
            )
        })
        getDataMSFT().then(data=>{
            let comp = this.state.companies
            comp["MSFT"] = parseFloat(data)
            this.setState(
                {
                    comp
                },
                () => {
                    console.log(this.state.companies["MSFT"])
                }
            )
        })
        getDataFB().then(data=>{
            let comp = this.state.companies
            comp["FB"] = parseFloat(data)
            this.setState(
                {
                    comp
                },
                () => {
                    console.log(this.state.companies["FB"])
                }
            )
        })
        getDataNVDA().then(data=>{
            let comp = this.state.companies
            comp["NVDA"] = parseFloat(data)
            this.setState(
                {
                    comp
                },
                () => {
                    console.log(this.state.companies["NVDA"])
                }
            )
        })
        getDataGOOG().then(data=>{
            let comp = this.state.companies
            comp["GOOG"] = parseFloat(data)
            this.setState(
                {
                    comp
                },
                () => {
                    console.log(this.state.companies["GOOG"])
                }
            )
        })
    }

    render(){
        return(
            <table >
            <thead>
                <tr>
                    <th>Company</th>
                    <th>Revenue Growth</th>
                </tr>
            </thead>
            <tbody>
                {Object.keys(this.state.companies).map(key=>{
                    <tr>
                        <td>{key}</td>
                        <td>{this.state.companies[key]}</td>
                    </tr>
                })}
            </tbody>
        </table>
        )
    }
}

export default Homepage
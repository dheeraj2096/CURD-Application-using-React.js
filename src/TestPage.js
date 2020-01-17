import React, {Component} from 'react'
// import {getNames} from './components/API_test'
import axios from 'axios'
import { Table } from 'reactstrap'

class TestPage extends Component{
    constructor(){
        super()
        this.state = {
            names:[]
        }
    }

    componentDidMount(){

        var config = {
            header: {'Access-Control-Allow-Origin': '*'}
        };

        axios.get(`http://localhost:5000/api/invest_names/`,config)
        .then(res => {
            this.setState({
                names:res.data
              });
              console.log(res.data)
        })
        
    }

    
    render(){
        return(
            <div>
                <h1 className="text-center">List of Names</h1>
                <Table>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.names.map((name, index)=>
                        <tr>
                        <th>{index+1}</th>
                        <td>{name["Name"]}</td>
                        </tr>
                        )}
                    </tbody>
                </Table>
            </div>
             
        )
    }
}

export default TestPage
import React, {Component} from 'react'
import {Table,Container} from 'reactstrap'
import axios from 'axios'
import {NavLink} from 'react-router-dom'

class Database extends Component{
    constructor(props){
        super(props)
        this.state={
            names:[]
        }
    }
    componentDidMount(){
        var config = {
            header: {'Access-Control-Allow-Origin': '*'}
        };

        axios.get(`http://localhost:5000/api/get_data/`,config)
        .then(res => {
            this.setState({
                names:res.data
              });
              console.log(res.data)
        })
        
    }
    render()
    {
        return(
            <div>
            <h1 className="text-center">List of Users</h1>
            <Container>
            <NavLink exact to="/create" className="btn btn-primary" >Create</NavLink>
            <NavLink exact to="/delete" className="btn btn-danger" >Delete</NavLink>
            <NavLink exact to="/update" className="btn btn-success">Update</NavLink>
            <Table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Investment Name</th>
                        <th>Investment ID</th>
                        <th>Region</th>
                        <th>Deal Status</th>
                    </tr>
                </thead>
                <tbody>
                {this.state.names.map((name, index)=>
                            <tr>
                            <th>{index+1}</th>
                            <td>{name["Investment Name"]}</td>
                            <td>{name["InvestmentId"]}</td>
                            <td>{name["Region"]}</td>
                            <td>{name["Deal Status"]}</td>
                            </tr>
                )}
                </tbody>
            </Table>
            </Container>
            </div>
        )
    }
}

export default Database;

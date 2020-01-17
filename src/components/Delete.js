import React, {Component} from 'react'
import {withRouter, NavLink} from 'react-router-dom'
import axios from 'axios'
import {Container, Button, Label, Col, Form, FormGroup, Input} from 'reactstrap'

class Delete extends Component{
    constructor(props){
        super(props)
        this.state = {
            fields:{}
        };
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(event){
        let fields = this.state.fields
        fields[event.target.name] = event.target.value
        this.setState({
            fields
        })
    }

    handleSubmit(event){
        event.preventDefault()
        console.log(this.state.fields)
        var self = this
        var APIurl = "http://127.0.0.1:5000/api/user/"
        var payload = {
            "id":parseInt(this.state.fields["invest_id"])
        }
        var config = {
            header :  {'Access-Control-Allow-Origin':'*'}
        }
        axios.post(APIurl, payload, config).then(function(response){
            console.log(response)
            if(response.data.result.message === "record deleted")
            {
                self.props.history.push
                (
                    {
                        pathname:'/',
                        state:{ invest_id : self.state.invest_id }
                    }
                );
            }
            else
            {
                alert("Deletion Error");
            }
        }).catch(function(error){
            console.log(error)
        });
        event.preventDefault()
    }

    render(){
        return(
            <Container className="delete">
                <h2 className="text-center">Delete Form</h2>
            <Form className="form" onSubmit={this.handleSubmit}>
            <Col>
              <FormGroup>
                <Label>Investment ID<span className="text-danger">*</span></Label>
                <Input
                  type="text"
                  name="invest_id"
                  id="invest_id"
                  placeholder="Investment ID"
                  value={this.state.invest_id}
                  onChange={this.handleChange}
                />
            </FormGroup>
            </Col>
            <Button color="danger">Delete</Button>&emsp;
            <NavLink to="/">Back</NavLink>
            </Form>
            </Container>
        )
    }
}

export default withRouter(Delete)

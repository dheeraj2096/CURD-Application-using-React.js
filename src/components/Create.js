import React, {Component} from 'react'
import {withRouter, NavLink} from 'react-router-dom'
import axios from 'axios'
import {Container, Button, Label, Col, Form, FormGroup, Input} from 'reactstrap'

class Create extends Component{
    constructor(){
        super()
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
    var APIurl = "http://localhost:5000/api/add_data/"
    var payload = {
        "InvestmentId":parseInt(this.state.fields["invest_id"]),
        "Region":this.state.fields["region"],
        "Investment Name":this.state.fields["invest_name"],
        "Deal Status":this.state.fields["deal_status"]
    }
    var config = 
    {
          header: {'Access-Control-Allow-Origin': '*'}   
    };
    axios.post(APIurl, payload, config).then(function (response)
     {
      console.log(response);
      
        if (response.data.result === "Registration success") 
        {
          self.props.history.push
          (
      
            {
            pathname: '/',
            state: {invest_id: self.state.invest_id}
            }
          );
        }
        else 
        {
          alert("Internal Server Error: Unable to register");
      }   
    }
    )
    .catch(function (error) {
      console.log(error);
    });
    event.preventDefault();
}

render(){
    return(
        <Container className="register">
            <h2 className="text-center">New Data</h2>
            <Form className="form" onSubmit={this.handleSubmit}>
            <Col>
              <FormGroup>
                <Label>Investment Name<span className="text-danger">*</span></Label>
                <Input
                  type="text"
                  name="invest_name"
                  id="invest_name"
                  placeholder="Investment Name"
                  value={this.state.invest_name}
                  onChange={this.handleChange}
                />
            </FormGroup>
            </Col>
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
            <Col>
              <FormGroup>
                <Label>Region<span className="text-danger">*</span></Label>
                <Input
                  type="text"
                  name="region"
                  id="region"
                  placeholder="Location"
                  value={this.state.region}
                  onChange={this.handleChange}
                />
            </FormGroup>
            </Col>
            <Col>
              <FormGroup>
                <Label>Deal Status<span className="text-danger">*</span></Label>
                <Input
                  type="text"
                  name="deal_status"
                  id="deal_status"
                  placeholder="Deal Status"
                  value={this.state.deal_status}
                  onChange={this.handleChange}
                />
            </FormGroup>
            </Col>
            <Button color="primary">Create</Button>&emsp;
            <NavLink to="/">Back</NavLink>
            </Form>
        </Container>
    )
}
}

export default withRouter(Create)
import React,{Component} from 'react';
import { Card, Button, Icon, Container, Form, Input, TextArea, Message } from 'semantic-ui-react';
import {Link} from '../routes';
import Layout from '../components/Layout'
import { ethers } from "ethers";


class Creator extends Component{
    
    state = {
        name: '',
        address: '',
        email: '',
        phone_number: '',
        errorMessage: '',
    };

     onSubmit = async (event) => {
        event.preventDefault();

        this.setState({loading: true, errorMessage: ''});
        try {

            if(window.ethereum !== undefined){
                const provider = new ethers.providers.Web3Provider(window.ethereum)
                await provider.send("eth_requestAccounts", []);
                const signer = provider.getSigner()
                const account = await signer.getAddress()
                this.setState({address: account})
                const name = this.state.name
                const address = this.state.address
                const email = this.state.email
                const phone = this.state.phone_number
                const body = { name, address, email, phone }
                await fetch(`https://recipe-book-8w1riovrg-rutwik2001.vercel.app/api/addCreator`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(body),
                })
            }
            else{
                console.log("Please install MetaMask");
            }

            


            
            
        } catch ( err ) {
      
            this.setState({errorMessage: err.message});
        }
        
        
    }

    render() {
        return(
                <Layout>
                    
                    <h1>New Creator</h1>
    <Form onSubmit={this.onSubmit} error={!!this.state.errorMessage}>
        <b>Name</b>
    <Form.Field>
      <Input
       value={this.state.name}
       onChange={event=>{this.setState({name: event.target.value})}}/>
    </Form.Field>

        <b>Email</b>
    <Form.Field>
      <Input
       value={this.state.email}
       onChange={event=>{this.setState({email: event.target.value})}}/>
    </Form.Field>

    <b>Phone Number</b>
    <Form.Field>
      <Input
       value={this.state.phone_number}
       onChange={event=>{this.setState({phone_number: event.target.value})}}/>
    </Form.Field>
        <Message
    error
    header='There was some error with your submission'
    content = {this.state.errorMessage}
  />
    <Button primary type='submit'>Submit</Button>
  </Form>
                   
            
            
            </Layout>
            
            )
    }
}

export default Creator;

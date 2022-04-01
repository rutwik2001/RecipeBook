import React from 'react';
import { Button, Form, Input, TextArea, Image, Item, Grid, Container, Divider} from 'semantic-ui-react'
import Layout from '../../components/Layout';
import { ethers } from "ethers";
import RecipeABI from '../../ethereum/build/RecipeABI.json'


class ShowRecipe extends React.Component {
    static async getInitialProps({query}){
        const tokenID = query.tokenID;

        
        const provider = ethers.getDefaultProvider("goerli", {
      infura: {
        projectId: '32881d7ec0eb4a199983753af133d054',
        projectSecret: "3b8bd5da960740b1baeba314a8a5677f",
      }});
    
        const contract_address = "0x6a17D2fCe4c7a0297BC5e26E5784310c6181fe9e"
        const contract = new ethers.Contract(contract_address, RecipeABI, provider);

        let recipeCID = await contract.tokenURI(tokenID)
        recipeCID = recipeCID.slice(1, -1)
        const url = "https://ipfs.io/ipfs/" + recipeCID


        const res = await fetch(url)
        const data = await res.json()
        //data = JSON.parse(data)

        const {name, prepTime, cookingTime, cookingSteps, ingredients} = data

       

        return {tokenID, recipeCID, name, prepTime, cookingTime, cookingSteps, ingredients};
    }
    

     

    render() {
        return(
    <Layout>
       

       
<br/>
  <Container textAlign='center'><h1>{this.props.name}</h1></Container>
  <br/>

  <Container textAlign='justified'>
      <h4>Ingredients: {this.props.ingredients}</h4>
      <Divider />
      <p>
        {this.props.cookingSteps}
      </p>
      
      <b>Preparation Time:{this.props.prepTime}</b>
      <b style={{marginLeft: "15px"}}>Cooking Time:{this.props.cookingTime}</b>
    </Container>


  {/* <h1>Ttile</h1>
  
  <h1>Preparation Time</h1>
  <h1>{this.props.prepTime}</h1>
  <h1>Ingredients</h1>
  <h1>{this.props.ingredients}</h1>
  <h1>Cooking Time</h1>
  <h1>{this.props.cookingTime}</h1>
  <h1>Cooking Steps</h1>
  <h1>{this.props.cookingSteps}</h1> */}
<br/>
<br/>
    </Layout>
        
    )}
}
export default ShowRecipe;

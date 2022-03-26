import React from 'react';
import { Button, Form, Input, TextArea} from 'semantic-ui-react'
import Layout from '../../components/Layout';
import ipfs from '../../ipfs';
import { ethers } from "ethers";
import RecipeABI from '../../ethereum/build/RecipeABI.json'
import {Router} from '../../routes'






export const getServerSideProps = async ({query}) => {    
  const res = await fetch(`https://recipe-book-8w1riovrg-rutwik2001.vercel.app/api/getPosts`) 
  const postCount = await res.json()
  
  return {
    props: { postCount },
  }
}



class CreateRecipe extends React.Component {
    
    state = {
        nameOfRecipe: '',
        prepTime: '',
        cookingTime: '',
        cookingSteps: '',
        ingredients: '',
        errorMessage: '',
        editorLoaded: true,
        setEditorLoaded: true,
        data: "",
        setData: ""
    };


    onSubmit = async (event) => {
        event.preventDefault();
        

        this.setState({loading: true, errorMessage: ''});
        
        try{
            

            const provider = new ethers.providers.Web3Provider(window.ethereum)
            await provider.send("eth_requestAccounts", []);
            const signer = provider.getSigner()
            const account = await signer.getAddress()

            const contract_address = "0x6a17D2fCe4c7a0297BC5e26E5784310c6181fe9e"
            const contract = new ethers.Contract(contract_address, RecipeABI, signer);
      




            const recipe = {
                "name": `${this.state.nameOfRecipe}`,
                "prepTime": `${this.state.prepTime}`,
                "cookingTime": `${this.state.cookingTime}`,
                "cookingSteps": `${this.state.cookingSteps}`,
                "ingredients": `${this.state.ingredients}`,
            }
            recipe = JSON.stringify(recipe)
            const cid = await ipfs.add(recipe);
            cid = cid.path
            


            cid = JSON.stringify(cid);
            

            await contract.createRecipie(account, cid)
            const tokenID = await contract.gettokenIDs()
            var count = parseInt(tokenID._hex, 16)
            count = count + 1;
            const likes = 0
            const body = { likes, count }
            await fetch(`https://recipe-book-8w1riovrg-rutwik2001.vercel.app/api/newRecipe`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(body),
                })
                Router.push(`/creators/${account}`)
                this.setState({loading: false});
        
        } catch (err) {
            this.setState({errorMessage: err.message});
        }
    }

    handleChange(value) {
    this.setState({ text: value })
  }

    render() {
        return(
    <Layout>
       
      
        <h1>Create Recipe</h1>

         

    <Form onSubmit={this.onSubmit} error={!!this.state.errorMessage}>
        <b>Name of the recipe</b>
    <Form.Field>
      <Input
       value={this.state.nameOfRecipe}
       onChange={event=>{this.setState({nameOfRecipe: event.target.value})}}/>
    </Form.Field>

    <b>Preparation Time(If minutes enter min. If hours enter hrs)</b>
    <Form.Field>
      <Input
       value={this.state.prepTime}
       onChange={event=>{this.setState({prepTime: event.target.value})}}/>
    </Form.Field>

            <b>Ingredients(Separate ingredients with commas)</b>
    <Form.Field>
      <TextArea placeholder='Enter the ingredients' value={this.state.ingredients}
       onChange={event=>{this.setState({ingredients: event.target.value})}} />
    </Form.Field>

    <b>Cooking Time(If minutes enter min. If hours enter hrs)</b>
    <Form.Field>
      <Input
       value={this.state.cookingTime}
       onChange={event=>{this.setState({cookingTime: event.target.value})}}/>
    </Form.Field>

    <b>Steps to cook(Separate steps with commas)</b>
    <Form.Field>
      <TextArea placeholder='Steps to cook' value={this.state.cookingSteps}
       onChange={event=>{this.setState({cookingSteps: event.target.value})}} />
    </Form.Field>
    <Button primary type='submit'>Submit</Button>
  </Form>

  <h1>{this.state.errorMessage}</h1>
  <h1>{this.state.cid}</h1>
    </Layout>
        
    )}
}
export default CreateRecipe;

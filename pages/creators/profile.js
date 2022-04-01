import React,{Component} from 'react';
import { Card, Grid, Button } from 'semantic-ui-react';
import Layout from '../../components/Layout';
import {Link} from '../../routes';
import { ethers } from "ethers";
import RecipeABI from '../../ethereum/build/RecipeABI.json'




export const getServerSideProps = async ({query}) => {

    const address = query.address;

        let hasRecipe = false;
        let isCreator = false; 
        const res = await fetch(`http://localhost:3000/api/getCreator?address=${address}`) 
        const creator = await res.json();
        
    if(creator.length !== 0){
        isCreator = true;
        
             const provider = ethers.getDefaultProvider("goerli", {
      infura: {
        projectId: '32881d7ec0eb4a199983753af133d054',
        projectSecret: "3b8bd5da960740b1baeba314a8a5677f",
      }});
    const contract_address = "0x6a17D2fCe4c7a0297BC5e26E5784310c6181fe9e"
    const contract = new ethers.Contract(contract_address, RecipeABI, provider);
    const recipes = await contract.getCreatorRecepies(address);
    
    const recipes1 = []
    for (var i = 0; i < recipes.length; i++) {
        recipes1.push(parseInt(recipes[i]._hex, 16))
    }
    
        const names = []
    
        for (var i = 0; i< recipes1.length; i++) {
        let cid = await contract.tokenURI(recipes1[i]);
        cid = cid.slice(1, -1)
        var url = "https://ipfs.io/ipfs/" + cid
        var resp = await fetch(url)
        var data = await resp.json()
        names.push(data);       
  }
  if(recipes.length>0){
    hasRecipe = true;
  }
  
   return {
    props: { creator, address, recipes1, names, hasRecipe, isCreator },
  }
        } else{
            isCreator = false;
            hasRecipe = false;

            return {
    props: { hasRecipe, isCreator }
  }
        }
       
    

    
    
   
  
}

class CampaignMain extends Component {

       
    
    state = {
    accountAddress: '',
    recipes: [],
    name: ''
  };

    

    Card(){
        const { 
            address
        } = this.props;
        const name = this.props.creator[0].Name;
        const address1 = this.props.creator[0].Address;
        const email = this.props.creator[0].Email;
        const phone = this.props.creator[0].Phone
        const id = this.props.creator[0].NumID

        const items = [{
            header: name,
            meta: 'Name of the creator',
            style: {overflowWrap: 'break-word'}
        },{
            header: address,
            meta: 'Address of the creator',
            style: {overflowWrap: 'break-word'}
        },{
            header: email,
            meta: 'Email of the creator',
            style: {overflowWrap: 'break-word'}
        },{
            header: phone,
            meta: 'Phone number of the creator',
            style: {overflowWrap: 'break-word'}
        },{
           header: id,
            meta: 'ID of the creator',
            style: {overflowWrap: 'break-word'} 
        }];

        return <Card.Group items={items}/>
    }

    

    Cards(){
        if(this.props.recipes1.length == 0){
            
            return 0;
        } else{
            
        const{
            recipes1,
            names
        } = this.props;

        



        const items = []

        for (var i = 0; i < recipes1.length; i++) {
            
            
            const item = {
                header: names[i].name,
                meta: <Link route={`/creators/showRecipe/${recipes1[i]}`}><a>View Recipe</a></Link>
            }
            items.push(item);
        }



        return <Card.Group items = {items}/>
        }
    }

    render() {
        return(
            <Layout>
                
        <h1>Creator Details</h1>
        
        
        <br/>
        {this.props.isCreator? <div><Grid>
            <Grid.Row>
    <Grid.Column>
        {this.Card()}
    </Grid.Column>
    </Grid.Row>
    
    </Grid></div>:<div><h1>No Creator Found</h1>
    <Link route={`/newCreator`}><a><Button primary>Create a Profile</Button></a></Link>
    </div>}
        

    
        <br/>
        <br/>
        {this.props.hasRecipe? <div><Grid>
            <Grid.Row>
    <Grid.Column>
        
        {this.Cards()}
      
    </Grid.Column>
    </Grid.Row>
    
    </Grid></div>: <div>No Recipes</div>}
        
    

      
      
    

    
  
  
        </Layout>)
    }
}



export default CampaignMain;

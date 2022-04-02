import React,{Component} from 'react';
import { Card, Button, Icon, Container, Grid, Segment } from 'semantic-ui-react';
import { ethers } from "ethers";
import {Link} from '../routes';
import Layout from '../components/Layout'
import RecipeABI from '../ethereum/build/RecipeABI.json'



export const getServerSideProps = async ({query}) => {
  const provider = ethers.getDefaultProvider("goerli", {
      infura: {
        projectId: '2091ae5e532549eca5e266c98f937e47',
        projectSecret: "6a6684ed1060438ea8c2f3dbd48fc33c",
      }});
       const contract_address = "0x6a17D2fCe4c7a0297BC5e26E5784310c6181fe9e"
    const contract = new ethers.Contract(contract_address, RecipeABI, provider);
      
      const tokenID = await contract.gettokenIDs()
      var count = parseInt(tokenID._hex, 16);
  
    const names = []
  for (var i = 1; i<= count; i++) {
        let cid = await contract.tokenURI(i);
            cid = cid.slice(1, -1)
        var url = "https://ipfs.io/ipfs/" + cid
        var resp = await fetch(url)
        var data = await resp.json()
        names.push(data);
  }

  return {
    props: {  names, count },
  }
}

class Creator extends Component{
    state = {
    accountAddress: '',
  };



  async componentDidMount() {
    let provider;

    if(window.ethereum !== undefined){
      provider = new ethers.providers.Web3Provider(window.ethereum)
      await provider.send("eth_requestAccounts", []); 
      const signer = provider.getSigner()
      const account = await signer.getAddress()
      this.setState({
      accountAddress: account
    });
    
    } else{
      provider = ethers.getDefaultProvider("goerli", {
      infura: {
        projectId: '32881d7ec0eb4a199983753af133d054',
        projectSecret: "3b8bd5da960740b1baeba314a8a5677f",
      }});
    }

  }  

  Cards(){
        if(this.props.count == 0){
            return 0
        } else{
        const{
            count,
            names
        } = this.props;

        var items = []

        for (var i = 1; i <= count; i++) {
            const item = {
                header: names[i-1].name,
                meta: <Link route={`/creators/showRecipe/${i}`}><a>View Recipe</a></Link>
            }
            items.push(item);
        }
      }

      return <Card.Group items = {items}/>
    }

    render() {
        return(
          
          
                <Layout>
                  <Grid>
                    <Grid.Row columns={2}>
      <Grid.Column>
        <h2>{this.state.accountAddress}</h2>
      </Grid.Column>
      <Grid.Column textAlign="right">
        
      </Grid.Column>
    </Grid.Row>
    </Grid>
    <br/>
    <br/>
    
     
     {this.state.accountAddress.length > 0
        ? <div>
          <Link route={`/creators/${this.state.accountAddress}`}><a><Button primary>Profile</Button></a></Link>
          <Link route={`/creators/${this.state.accountAddress}/createRecipe`}><a><Button primary>Create Recipe</Button></a></Link>
        </div>
        : <div>
          <Link route={`/creators/${this.state.accountAddress}`}><a><Button primary>Profile</Button></a></Link>
          </div>
      }
       
    <h1>Recipes</h1>
     
    <br/>
    <Grid>
            <Grid.Row>
    <Grid.Column>
        {this.Cards()}
    </Grid.Column>
    </Grid.Row>
    
    </Grid>
                    
                   
                   
            
            </Layout>
            
            
            )
    }
}

export default Creator;

import web3 from './web3';
import RecipeABI from './build/RecipeABI.json';


export default (address) => {
    return new web3.eth.Contract(CreatorABI, address);
    
}
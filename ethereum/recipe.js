import web3 from './web3';
import RecipeABI from './build/RecipeABI.json';


const instance = new web3.eth.Contract(RecipeABI, '0x5879f0f25db636b3895A0ECD6A67883aE1AF0140')

export default instance;

import Web3 from 'web3';
 


let web3;

// async function connectEther(){
//   const provider = new ethers.providers.Web3Provider(window.ethereum)
//   await provider.send("eth_requestAccounts", []);
//   const signer = provider.getSigner()
//   console.log(signer)
// }

// connectEther()





 
if (typeof window !== "undefined" && typeof window.ethereum !== "undefined") {
  // We are in the browser and metamask is running.
  
  window.ethereum.request({ method: "eth_requestAccounts" });
  window.web3 = new Web3(ethereum);
} else {
  // We are on the server *OR* the user is not running metamask
  const provider = new Web3.providers.HttpProvider(
    "https://goerli.infura.io/v3/32881d7ec0eb4a199983753af133d054"
  );
  web3 = new Web3(provider);
  
  // console.log("No metamask")

}




 
export default web3;
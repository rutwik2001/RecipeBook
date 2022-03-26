// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

contract CreatorFactory{
    Creator[] public creators;

    function createCreator(string memory _name) public {
        Creator newCreator = new Creator(msg.sender, _name);
        creators.push(newCreator); 
    }

    function getCreators() public view returns(Creator[] memory){
        return creators;
    }

}


contract Creator is ERC721URIStorage {
    using Counters for Counters.Counter;
    Counters.Counter private _tokenIds;

    address public creator;
    string public nameOfCreator;
    
    constructor(address _creator, string memory name) ERC721("Work", "WO") {
        creator = _creator;
        nameOfCreator = name;
    }

    function createRecipie(string memory tokenURI) public returns (uint256) {
        _tokenIds.increment();
        uint256 newItemId = _tokenIds.current();
        _mint(creator, newItemId);
        _setTokenURI(newItemId, tokenURI);
        return newItemId;
    }

    
    function _baseURI() internal pure override returns (string memory) {
        return "https://ipfs.io/ipfs/";
    }

    
}


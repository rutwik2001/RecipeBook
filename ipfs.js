import { create } from 'ipfs-http-client'

// connect to ipfs daemon API server
const ipfs = create({ host: "ipfs.infura.io", port: 5001, protocol: "https" }); // (the default in Node.js)

export default ipfs;

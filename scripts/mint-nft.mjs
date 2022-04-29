const CONTRACT_ADDRESS = "0x65ad3F1dAA1C5A83FcF626511Dbc604CE23aF968"
const META_DATA_URL = "ipfs://XX"

async function mintNFT(contractAddress, metaDataURL) {
   const CollectifiNFT = await ethers.getContractFactory("collectifiNFT")
   const [owner] = await ethers.getSigners()
   await CollectifiNFT.attach(contractAddress).mintNFT(owner.address, metaDataURL)
   console.log("NFT minted to: ", owner.address)
}

mintNFT(CONTRACT_ADDRESS, META_DATA_URL)
   .then(() => process.exit(0))
   .catch((error) => {
       console.error(error);
       process.exit(1);
   });
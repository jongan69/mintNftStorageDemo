# mintNftStorageDemo

yarn install

Edit .env:
- PRIVATE KEY
- https://nft.storage/ API KEY

https://nftschool.dev/tutorial/mint-nftstorage-polygon/#minting-your-nft


The main part of the script is the storeAsset function. It creates a new client connecting to NFT.Storage using the API key you created earlier. Next we introduce the metadata consisting of name, description, and the image. Note that we are reading the NFT asset directly from the file system from the assets directory. At the end of the function we will print the metadata URL as we will use it later when creating the NFT on Polygon.

After setting up the script, you can execute it by running:

Store Data to IPFS
`node scripts/store-asset.mjs`

To deploy Contract
`npx hardhat run scripts/deploy-contract.mjs --network PolygonMumbai`

To mint NFT
`npx hardhat run scripts/mint-nft.mjs \--network PolygonMumbai`

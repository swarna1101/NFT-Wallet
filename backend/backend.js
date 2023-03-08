const Moralis = require("moralis").default;
const { EvmChain } = require("@moralisweb3/common-evm-utils");
const KEY="NW1F1QjMg2uGf1eVWF9x00alsqCvTL55eskeKUOaz26qiMlK31JwBQQC94bqx7tn"
const cors=require('cors')

const express=require('express')
const app=express();

app.use(cors())
app.use(express.json())
 Moralis.start({
    apiKey: KEY,
    // ...and any other configuration
  }).then(console.log("yes thats working"));
app.post(`/GetNFT`,async (req,res)=>{
    
      var address=req.body.address;
      var chain=req.body.chain;
    try{
        const response = await Moralis.EvmApi.nft.getWalletNFTs({
            address,
            chain,
         });
       
         console.log(response.toJSON());
         res.json(response.result)
    
      }catch(err) {
        console.log(err)
      }

    
    
})

app.listen(5000,function(){console.log("server working on 5000")})






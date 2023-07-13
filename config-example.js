const rpcs = {
    //input your rpc url
    "ethMain": "",
    "ethSepolia": "",
    "ethGoerli": ""
}

module.exports = {
    networks: {
        ethSepolia: {
            // your account private key, do not disclose it
            accounts: ["xxx"],
            url: rpcs["ethSepolia"],
            blockGasLimit: 15542175
        }, 
        ethGoerli:{
            accounts: [""],
            url: rpcs["ethGoerli"],
            blockGasLimit: 15542175
        },
        ethMain: {
            accounts: [],
            url: rpcs["ethMain"],
        }
    },
    etherscan: {
        apiKey:  "xxx"
        
    }
}
          
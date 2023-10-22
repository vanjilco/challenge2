# TechFiesta Swisstronik Challenge2
[//]: # (This is extended from ethereum and swisstronik documentation)


**Create a smart contract with a single private state variable (string or uint) and develop functions to modify and retrieve this value. Deploy the contract to the Mumbai testnet and Swisstronik testnet, and write a script to access this variable using the RPC method eth_getStorageAt() on both networks.** 

> First step is to create the contract in this case Hello_swtr.sol
> second is to deploy on the different testnets. ie: Swisstronik testnet and Mumbai Testnet
> Third run the subsequent commands as given in the steps below

## Addresses of Deployed Contracts
The contract Hello_swtr was deployed on both Mumbai Testnet and Swisstronik Testnet and the addresses are:
```
    Swisstronik Testnet: 0x8375a3B6d44Df7e32C5E3c932e6fA08f22112607
    Mumbai Testnet: 0xdb48440ccaA99b627777bb9025004cB47b5F0be3
```

### Compiling
run this command in your project terminal
`npx hardhat compile`
This will create files for the compiled bytecode

### Deployment
run this command in your project terminal
`npx hardhat run scripts/deploy.js`
This will return the addresses of the deployed contracts

### Retreiving the value of the state variable using eth_getStorageAt()
run this command
`npx hardhat run scripts/getStorage.js

```
    Message From Swisstronik:
    0x1ac0a946c50b5a6cbdaef7d0a457a3a6c8ab0b5ac89407eccee3f83d2d50a3a2

   Message from Mumbai:
   0x48656c6c6f20576f726c6421212100000000000000000000000000000000011a
```

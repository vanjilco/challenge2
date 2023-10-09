const dotenv = require("dotenv");
const { ethers } = require("ethers");

dotenv.config();

const swisstronikRPC = "https://json-rpc.testnet.swisstronik.com/";
const mumbaiRPC = "https://polygon-mumbai-bor.publicnode.com";
const swisstronikContractAddress = "0x8375a3B6d44Df7e32C5E3c932e6fA08f22112607";
const mumbaiContractAddress = "0xdb48440ccaA99b627777bb9025004cB47b5F0be3";


const getMessageWithProvider = async (provider, providerName, contractAddr) => {
  try {
    const message = await provider.getStorageAt(contractAddr, '0x0');

    console.log(` ${providerName}:`);
    console.log(message);
    console.log('Data type is: ', typeof (message));
    const decodedString = ethers.utils.toUtf8String(message)
    console.log('Decoded Data:', decodedString)
  } catch (error) {
    console.error(error);
  }
}

async function main() {
  const providerSwisstronik = ethers.getDefaultProvider(swisstronikRPC);
  const providerMumbai = ethers.getDefaultProvider(mumbaiRPC);

  await getMessageWithProvider(providerMumbai, "Mumbai", mumbaiContractAddress);
  await getMessageWithProvider(providerSwisstronik, "Swisstronik", swisstronikContractAddress);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
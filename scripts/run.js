const hre = require("hardhat");
const {useSigners, loadContractFactory, deployContract, useAccountBalance } = require('../lib/helpers/contractDeployHelpers');

const run = async () => {
    const contractFactory = await loadContractFactory(hre, process.argv[2]);
    const contract = await deployContract(contractFactory, {});
    console.log(`Contract address: ${contract.address}`);

    let txn = await contract.makeAnEpicNFT();
    await txn.wait();

    txn = await contract.makeAnEpicNFT();
    await txn.wait();
}

const main = async () => {
    try {
        await run();
        process.exit(0);
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}

main();
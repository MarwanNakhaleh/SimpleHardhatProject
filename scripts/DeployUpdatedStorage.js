const hre = require("hardhat");

async function main() {
    const UpdatedStorage = await ethers.getContractFactory("UpdatedStorage");
    const updatedStorage = await UpdatedStorage.deploy();
    await updatedStorage.deployed();

    console.log("contract deployed to " + updatedStorage.address);
    const storedNumber = await updatedStorage.retrieveNumber();
    console.log("the stored number is currently " + storedNumber);
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });
  
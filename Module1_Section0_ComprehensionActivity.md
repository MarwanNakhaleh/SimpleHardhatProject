## Please Write the Following Important CLI Commands
**Initializing Hardhat:** `npx hardhat`

**Creating a Hardhat Node:** `npx hardhat node`
**Create a Hardhat Console Targeting Your Local Node:** `npx hardhat console`
**Running a Script Targeting Your Local Node:** `npx hardhat run <script path> --network localhost`

## Please Write the Following Important HRE Javascript Commands
**Creating a Factory Instance of a Deployed Contract:** `const Contract = await hre.ethers.getContractFactory("Contract");`
**Deploying an Instance of a Contract:** `const contract = await Contract.deploy(params);`
**Attaching to a Running Instance of a contract located at 0x123AB:** `const contract = await Contract.attach("0x123AB");`
**Running the send with one variable 1 to a deployed contract called bank:** `await bank.send(1)`
**Connect to address 0x9876 and running the same command above:** `const bank = await Bank.attach("0x9876"); await bank.send(1)`

**Benefits of Using Remix**
1. Easy setup
2. Portable environment
3. Easily compile and deploy anywhere

**Downsides of Using Remix**
1. Doesn't have more powerful dev tools for testing and deploying real-world smart contracts
2. 

**Benefits of Using Hardhat**
1. Very powerful
2. Use Javascript to interact with your smart contracts
3. Easy local testing with Javascript

**Downsides of Using Hardhat**
1. Setup is harder than with that of Remix
2. It's overkill if you want to do something very simply

# Storage Smart Contract
To run this locally, run the following in one terminal window:

```bash
npx hardhat node
```

While this is running, open a separate terminal window and type the following:

```bash
npx hardhat console
```

Once it's running, you can basically run the code inside of scripts/DeployUpdatedStorage.js, then you can actually store and retrieve numbers in the console like this:

```bash
> await updatedStorage.store(69)
# {
#   hash: '0xcddb862c018bde20774c943c7d1706aa985bba6bb7aac33450a085da2613176a',
#   type: 2,
#   accessList: [],
#   blockHash: '0xb82036e06ccb60b20408fb900d0d257c6ce031cc3f74ff1b40918f1d5e7d7aad',
#   blockNumber: 3,
#   transactionIndex: 0,
#   confirmations: 1,
#   from: '0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266',
#   gasPrice: BigNumber { value: "1671244487" },
#   maxPriorityFeePerGas: BigNumber { value: "1000000000" },
#   maxFeePerGas: BigNumber { value: "2342488974" },
#   gasLimit: BigNumber { value: "29021464" },
#   to: '0x5FbDB2315678afecb367f032d93F642f64180aa3',
#   value: BigNumber { value: "0" },
#   nonce: 2,
#   data: '0x6057361d0000000000000000000000000000000000000000000000000000000000000045',
#   r: '0xf61999eda82e8641bbc1d1af2491a16a9ad09f1e4ce617033368562415d57d7d',
#   s: '0x3862d8d9455680531178ddc952525071b2ccec3643b7e1768e3ac693f87bbf76',
#   v: 1,
#   creates: null,
#   chainId: 31337,
#   wait: [Function (anonymous)]
# }
> const storedNumber = await updatedStorage.retrieveNumber()
# undefined
> console.log(storedNumber)
# BigNumber { value: "69" }
```

# Sample Hardhat Project

This project demonstrates a basic Hardhat use case. It comes with a sample contract, a test for that contract, and a script that deploys that contract.

Try running some of the following tasks:

```shell
npx hardhat help
npx hardhat test
GAS_REPORT=true npx hardhat test
npx hardhat node
npx hardhat run scripts/deploy.js
```


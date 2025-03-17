const hre = require("hardhat");

async function main() {
  const initialSupply = hre.ethers.parseEther("1000000"); // 1 million TDC
  const TudorCoin = await hre.ethers.deployContract("TudorCoin", [initialSupply]);

  await TudorCoin.waitForDeployment();
  console.log("TudorCoin deployed to:", TudorCoin.target);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

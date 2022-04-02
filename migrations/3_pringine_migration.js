const PringineContract = artifacts.require("Pringine");

module.exports = function (deployer) {
  deployer.deploy(PringineContract);
};

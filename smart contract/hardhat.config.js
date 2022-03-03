require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropston: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/eRTgvAHV7UtFHoE1dsy3BGxvpSGCQ9eK',
      accounts: ['44b9201f7a1f7eea6c2440b29fdbcbe71e4ed36844eb4f800653decd0249be91']

    },
  },
};
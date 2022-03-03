require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'idea problem occur trophy figure render remember method idea prize outer stumble'; 
let testAccounts = [
"0x350ea0bccdf017d8f585ad9d20bc34bb1759f8ced1392d5da75f7ef6e8dff46e",
"0xbcc422e023bd91e48d5d12860ca1fce993d9d2a21245dd0de6ed0beeeaee19e1",
"0x7d3150f751ffa657d534ca667500e8a785557fcba749a0d552a2294eab7d3da7",
"0xe19d4aa92611421425cb7c844d36242309be5292d0068cb4827f0c65afedc0c8",
"0x4d9c89421280f8f155ead448a934485f5b4f6c159108bdaa81f9e2ecbf09c852",
"0x9b9b8dc2fbb0d1d4c6b56ff4b2f7ed8d6c970e068a4cfbc5fbb791bbb540c414",
"0x7097f30627a8529769ddfdfff0ba5c19a7ff5678ce8e6f39989638c45a29fe6e",
"0x73af97e10562c0ebd380810af9ed8fa8e4f84340bd007ffed5572d8f523b12a3",
"0xeab8866390ab6a09a590e9443ba059bd6db9913e4e226dc8de5420ff274dc3ad",
"0xdb9826831b0a04e50a9b1a10b26f770d5e2d3bfd30bc06a23d992acc0d1c2be6"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};


require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom private boil suggest name random pitch hospital heavy civil army gentle'; 
let testAccounts = [
"0x417f118033e9af73f1336755c2836363c18d3de43c813611596d20085f3cabb8",
"0xa0896e4a9afb7be018ab6d48a3e5dbfbb19c45c4fe9b0073ce93493d196075ec",
"0x555ef6fc2ff70bb5c9868a15781e63d6ad4bd99dcb2e5990ed425d4617c161a1",
"0x119e72c35a990150cec979d360542b8bae5d7fe516837f88ec3bfed82b6139e1",
"0xf3896c2d1fc350e67e390d442f6deae76f28167d82c5b9a0921bbacb9795b377",
"0x6fb31e6122c035091421f8b68ff248afa65cdb08b9e3cc8877e17e86e01ea20b",
"0x986271a1b3737f5e9ecafb5bf495e971d982c5b6563b1186a03cf026fbeb2f3e",
"0x55a07f4842d2c5dee386cb692aaa368f0c1093d5f79839da3caa2d28b3e6ec93",
"0x13b8bbbadba328364bfd1285496dd76c8c7e8bc7f127cb10a4b569ea5150c5a7",
"0xecf6a1f5f458c13483ca69739f3ebc79b5b0d37631b03b6b67d39e495a77557b"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


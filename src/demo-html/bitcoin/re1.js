const tinysecp = require('tiny-secp256k1');
const { default: ECPairFactory } = require('ecpair');
const ecpair = ECPairFactory(tinysecp);

let keypair = ecpair.makeRandom()
let privateKey = keypair.privateKey.toString('hex')
// let privateKey = keypair.privateKey
console.log(privateKey)
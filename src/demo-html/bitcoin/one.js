// console.log('console.log')

const bitconin = require('bitcoinjs-lib');
/// 用bitcoin 生成一个256位的秘钥，并且转化为16进制

// bitconin.ECPair.makeRandom().toWIF()



// const wif = require('wif');
// const tinysecp = require('tiny-secp256k1');
// const { default: ECPairFactory } = require('ecpair');
// const ecpair = ECPairFactory(tinysecp);

// let keypair = ecpair.makeRandom()

// let keypair = bitconin.ECPair.makeRandom()
// console.log(keypair)


const wif = require('wif');

// 十六进制表示的私钥:
let privateKey = '0c28fca386c7a227600b2fe50b7cae11ec86d3bf1fbe471be89827e19d72aa1d';
// 对私钥编码:
let encoded = wif.encode(
        0x80, // 0x80前缀
        Buffer.from(privateKey, 'hex'), // 转换为字节
        true // 压缩格式
);
console.log(encoded);
// 使用压缩格式 WIF是K或者L开头的字符串

// KwdMAjGmerYanjeui5SHS7JkmpZvVipYvB2LJGU1ZxJwYvP98617

// 


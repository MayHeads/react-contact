const bitcoin = require('bitcoinjs-lib');
let { createHash } = require('crypto');
createHash = require('create-hash');



function standardHash(name,data) {
    let h = createHash(name);
    return h.update(data).digest('hex');
}

/// hash160
function hash160(data) {
    return standardHash('ripemd160', standardHash('sha256', data));
}
/// dhash
function dhash(data) {
    return standardHash('sha256', standardHash('sha256', data));
}

let s = 'bitconin is awesome';
console.log('ripemd160 = ' + standardHash('ripemd160', s).toString('hex'));
console.log('  hash160 = ' + hash160(s).toString('hex'));
console.log('   sha256 = ' + standardHash('sha256', s).toString('hex'));
console.log('  hash256 = ' + dhash(s).toString('hex'));




/*
ripemd160 = 76309c4d7b4bbe75432aa4328c09341d38b651d3
    - 在比特币中也不会单独使用
    - 一种hash的方式 20个bytes 160bits  16进制中 40个字符， 2个字符为一个字节
    - 在比特币中常用的一种hash方式


  hash160 = 12a8dee5687f6299188df3a0e265372d3f644bfe
    - 一种hash的方式 20个bytes 160bits  16进制中 40个字符， 2个字符为一个字节
    - hash160是ripemd160和sha256的组合，在比特币中使用
  sha256 = 324be19b18e036668855952b09c711b3a43b77ff4c10c6fbc3c9efb47068c623
    -  32bytes 256bits

  hash256 = ec26d4f46e9a93682ee7776e2ddea6c50a623e21f92903d2ec01a6559e294a26
    - hash256 也乘坐dhash，是sha256和sha256的组合，在比特币中使用
*/

/*
总结

区块链依靠安全的哈希算法保证所有区块数据不可更改；

交易数据依靠Merkle Hash确保无法修改，整个区块依靠Block Hash确保区块无法修改；

工作量证明机制（挖矿）保证修改区块链的难度非常巨大从而无法实现。
*/


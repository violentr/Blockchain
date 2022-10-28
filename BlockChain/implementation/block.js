const SHA256 = require('crypto-js/sha256');

class Block{
  constructor(timestamp, lasthash, hash, data){
    this.timestamp = timestamp;
    this.lasthash = lasthash;
    this.hash = hash;
    this.data = data;
  }

  toString(){
    return `Block -
      Timestamp: ${this.timestamp}
      LastHash: ${this.lasthash.substring(0, 10)}
      Hash: ${this.hash.substring(0, 10)}
      Data: ${this.data}`;
  }

  static genesis(){
    return new this('Genesis time', '----', 'f1r5s7-h45h', [])
  }

  static mineBlock(lastBlock, data){
    const timestamp = Date.now();
    const lasthash = lastBlock.hash;
    const hash = Block.hash(timestamp, lasthash, data)

    return new this(timestamp, lasthash, hash, data)
  }
  static hash(timestamp, lasthash, data){
    return SHA256(`${timestamp}${lasthash}${data}`).toString();
  }
}

module.exports = Block;
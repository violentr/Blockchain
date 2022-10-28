const Block = require('./block');
// Case 1
const block = new Block('foo', 'bar', 'zoo', 'baz');
console.log(block.toString());

// Case 2
console.log(Block.genesis().toString());

// Case 3
const fooBlock = Block.mineBlock(Block.genesis(), 'foo');
console.log(fooBlock.toString())

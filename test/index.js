var noh = require('../index.js')

function returnOne(){
  console.log("Basic Test Fired.")
  return 1;
}

var passTest = noh.wearNoh(returnOne, 1);

var failTest = noh.wearNoh(returnOne, 2)

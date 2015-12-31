var noh = require('../index.js')

function returnOne(){
  return 1;
}

function returnArg(a){
  return a
}

var passTest = noh.wearNoh(returnOne, 1);
var failTest = noh.wearNoh(returnArg, 2)

passTest()
failTest(4)

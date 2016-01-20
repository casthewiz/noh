var noh = require('../index.js')

function returnOne(){
  return 1;
}

function returnArg(a){
  return a
}



var passTest = noh.wearNoh(returnOne, 1);
var failTest = noh.wearNoh(returnArg, 2);

passTest(1)
failTest(2)
failTest(3)
failTest(4)

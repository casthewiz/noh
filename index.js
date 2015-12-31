


module.exports = {
  wearNoh: function(f, e){
    f = addMask(f);
    var l = f.apply(this, arguments);
    if (l === e){
      console.log(e + ' === ' +l)
      console.log(f.gnoh)
    } else {
      console.log(e + ' !== ' + l)
      console.log(f.fnoh)
    }
    return l
  }
}

function addMask(f){
  var failNohs = require("./json/fails.json")
  var passNohs = require("./json/success.json")
  var successMessage = passNohs[Math.floor(Math.random()*passNohs.length)] += '\n'
  var failureMessage = failNohs[Math.floor(Math.random()*failNohs.length)] += '\n'
  f.gnoh = successMessage;
  f.fnoh = failureMessage;
  return f;
}

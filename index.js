


module.exports = {
  wearNoh: function(f, e, time){
    f = addMask(f);
    return function(){
      console.time("Execution Time");
      var l = f.apply(this, arguments);
      console.timeEnd("Execution Time");
      if (l === e){
        console.log( e + ' === ' + l + ', assert' + "\x1b[32m" + ' passed' + "\x1b[0m" +  '!\n')
        console.log(f.gnoh)
      } else {
        console.log(e + ' !== ' + l + ', assert' + "\x1b[31m" +' failed' + "\x1b[0m" + '.\n')
        console.log(f.fnoh)
      }
      return l
    }
  },
  ohNoh: function(f, args, e, time){
    if (typeof(args) != "object" || args.isArray == false){
      tmp = args;
      args = [];
      args[0] = tmp
    }
    f = addMask(f);
      console.time("Execution Time");
      var l = f.apply(this, args);
      console.timeEnd("Execution Time");
      if (l === e){
        console.log( e + ' === ' + l + ', assert' + "\x1b[32m" + ' passed' + "\x1b[0m" +  '!\n')
        console.log(f.gnoh)
      } else {
        console.log(e + ' !== ' + l + ', assert' + "\x1b[31m" +' failed' + "\x1b[0m" + '.\n')
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

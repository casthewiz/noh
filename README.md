# noh  

༼ つ ◕‿◕ ༽つ

noh provides simple assert functionality with emojis.
</br>
Because sometimes assertions need a little more character :)
</br>
</br>
noh also includes basic logging messages and an execution timer. </br>

## Installation
From terminal:
`npm install noh`

## Usage
wearNoh is a decorator function that wraps any function you give it with asserts, logging, and a noh emoji.
<pre>
wearNoh( f , e )
//Where f is the function to be wrapped
//and e is asserted to be f's return value.

</pre>
This snippet demonstrates an example of usage.
<pre>
var noh = require('noh')
var assertValue = 2
function returnArg(arg){return arg}

var example = noh.wearNoh(returnArg, assertValue)
example(2); //Pass with pass logging
example(3); //Fail with failure logging
</pre>

On each call of example(), it's return value will be checked against assertValue, with subsequent logging.

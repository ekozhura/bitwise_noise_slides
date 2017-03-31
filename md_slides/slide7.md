## How it works

```js
// pattern function: 
let genF = function(t) { return (t*(t>>5|t>>8))>>(t>>16); };
``` 

```js
// wrap values into a range between 0 to 255:
let sample = (genF(t) & 0xff);
```
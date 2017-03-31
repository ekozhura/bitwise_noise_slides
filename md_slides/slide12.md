### Use Generators instead of Loops

```js
function* _8bitGenerator(BUFFER_SIZE) {
  let curBlock = 1, t0 = 0;
  let genF = function(t) { return (t*(t>>5|t>>8))>>(t>>16); };
  while(true) {  
    for (let t=t0,j=0; t < BUFFER_SIZE * (curBlock + 1);t++,j++) {
      let sample = (genF(t) & 0xff) * 256;
      // ...
      rawAudio[j] = (sample / 65535) * 2 - 1;
    }
    yield rawAudio;
    curBlock++;
    t0 = BUFFER_SIZE * currentBlock;    
  }
};
```
### Fetch data on each audioprocess event

```js
let _8bitGen = _8bitGenerator(4096);

scriptNode.onaudioprocess = (audioProcessEvt) => {
    let outputBuffer = audioProcessEvt.outputBuffer;
    let outputData = outputBuffer.getChannelData(0);
    
    _8bitGen.next().value.forEach((item, i) => {
        outputData[i] = item;
    });
};
```
### Further experiments

`ScriptNodeProcessor`

```js
const BUFFER_SIZE = 4096;

let atx = new AudioContext();
let scriptNode = atx.createScriptProcessor(BUFFER_SIZE, 1, 1);

let k = 0;
scriptNode.onaudioprocess = (audioProcessEvt) => {
    let outputBuffer = audioProcessEvt.outputBuffer;
    let outputData = outputBuffer.getChannelData(0);

    for (let t = 0 ; t < BUFFER_SIZE ; t++) {
        outputData[t] = rawAudio[t + k * BUFFER_SIZE];
    }
    k++;
};
```
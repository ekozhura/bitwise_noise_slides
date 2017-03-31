### playback 

`AudioBufferSourceNode`

```javascript
let source = atx.createBufferSource();
source.buffer = buffer;
source.connect(atx.destination);

source.start();
```
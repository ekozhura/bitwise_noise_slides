### Playback

```js
let source = atx.createBufferSource();
source.connect(scriptNode);

scriptNode.connect(atx.destination);

source.start();
```
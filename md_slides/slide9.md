### Or use Buffer objects

`AudioBuffer`

```js
let atx = new AudioContext();
let buffer = atx.createBuffer(1, SAMPLE_RATE * DURATION, SAMPLE_RATE);

let buffering = buffer.getChannelData(0);
```
```js
// inside for loop:
for (let t = 0; t < SAMPLE_RATE * DURATION; t++) {
  let sample = (genF(t) & 0xff) * 256;
  // ...
  buffering[t] = (sample / 65535) * 2 - 1; // from 0..65535 to -1..1
}
```
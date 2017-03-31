## Generate raw data

```javascript
const SAMPLE_RATE = 8000;
const DURATION = 10; // in secs
let rawData = [];

let genF = function(t) { return (t*(t>>5|t>>8))>>(t>>16); };

for (let t = 0; t < SAMPLE_RATE * DURATION; t++) {
  let sample = (genF(t) & 0xff) * 256;
  if (sample < 0) sample = 0;
  if (sample > 65535) sample = 65535;

  rawData[t] = sample;
}
```
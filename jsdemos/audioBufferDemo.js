(function() {

    audioBufferDemo = () => {
        const SAMPLE_RATE = 8000;
        const DURATION = 3; // in secs

        let atx = new AudioContext();
        let buff = atx.createBuffer(2, SAMPLE_RATE * DURATION, SAMPLE_RATE);
        
        let bitsPerSample = 16;

        let tmod = 0;
        let t0 = 0;

        let channels = 1;
        let sampleArray = [];
        
        let genF = function(t) { return (t*(t>>5|t>>8))>>(t>>16); };
        //let genF = new Function('t', 'return t*(((t>>12)|(t>>8))&(63&(t>>4)))');
        //let genF = new Function('t', 'return t*(t^t+(t>>15|1)^(t-1280^t)>>10)');

        let buffering = buff.getChannelData(1) 
        for (let t = t0; t < SAMPLE_RATE * DURATION; t++) {
            let sample = (genF(t) & 0xff) * 256
            if (sample < 0) sample = 0;
            if (sample > 65535) sample = 65535;

            buffering[t] = (sample / 65535) * 2 - 1;
        }

        let source = atx.createBufferSource();
        source.buffer = buff;
        source.connect(atx.destination);
        source.start();
    }

    document.getElementById("playBtn1").addEventListener('click', audioBufferDemo);

})()
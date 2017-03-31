(function() {

    function* _8bitGenerator(BUFFER_SIZE) {
        let currentBlock = 1;
        let t0 = 0;

        let genF = function(t) { return ((t*("36364689"[t>>13&7]&15))/12&128)+(((((t>>12)^(t>>12)-2)%11*t)/4|t>>13)&127); };
        var rawAudio = [];
        while(true) {  
            for (let t = t0, j = 0; t < BUFFER_SIZE * (currentBlock + 1); t++, j++) {
                let sample = (genF(t) & 0xff) * 256;

                if (sample < 0) sample = 0;
                if (sample > 65535) sample = 65535;
                rawAudio[j] = (sample / 65535) * 2 - 1;
            }
            yield rawAudio;
            currentBlock++;
            t0 = BUFFER_SIZE * currentBlock;    
        }
    };

    audioBufferStreamDemo = () => {
        const BUFFER_SIZE = 4096;
        let atx = new AudioContext();
        let scriptNode = atx.createScriptProcessor(BUFFER_SIZE, 1, 1);

        let k = 0;

        let _8bitGen = _8bitGenerator(BUFFER_SIZE);

        scriptNode.onaudioprocess = (audioProcessEvt) => {
            let outputBuffer = audioProcessEvt.outputBuffer;
            let outputData = outputBuffer.getChannelData(0);
            _8bitGen.next().value.forEach((item, i) => {
                outputData[i] = item;
            });
        };
    

        let source = atx.createBufferSource();
        source.connect(scriptNode);
        scriptNode.connect(atx.destination);
        source.start();
    }

    document.getElementById("playBtn2").addEventListener('click', audioBufferStreamDemo);

})()
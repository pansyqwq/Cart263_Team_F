async function getMicrophoneInput() {
    console.log("here we are ");

    window.AudioContext = window.AudioContext || window.webkitAudioContext;
    let audioContext = new AudioContext(); //using the web audio library
    try {
        //returns a MediaStreamAudioSourceNode.
        let audioStream = await navigator.mediaDevices.getUserMedia({
            audio: true,
        });
        // console.log(audioStream)
        //pass the microphone input to the web audio API
        let microphoneIn = audioContext.createMediaStreamSource(audioStream);
        console.log(microphoneIn);
        const filter = audioContext.createBiquadFilter();
        const analyser = audioContext.createAnalyser();
        // microphone -> filter ->  analyzer->destination
        microphoneIn.connect(filter);
        //use the analyzer object to get some properties ....
        filter.connect(analyser);

        // start visualization loop
        visualizeTimeAndFreq();

        function visualizeTimeAndFreq() {

            analyser.fftSize = 1024; // fft conversion from time to frequency samples
            //console.log (analyser.frequencyBinCount) //half of fft size
            const bufferLength = analyser.frequencyBinCount;
            // array to store frequency data (0–255 values
            const dataArrayFreq = new Uint8Array(bufferLength);

            // start animation loop
            requestAnimationFrame(animateVisual);
            function animateVisual() {
                // fill array with current frequency data
                analyser.getByteFrequencyData(dataArrayFreq);

                // compute average volume across all frequencies
                let sum = 0;
                for (let i = 0; i < dataArrayFreq.length; i++) {
                    sum += dataArrayFreq[i];
                }

                let average = sum / dataArrayFreq.length;

                // send sound data to the freestyle object
                // amplify the value to make visual changes more noticeable
                if (drawingBoardC && drawingBoardC.objectsOnCanvas.length > 0) {
                    drawingBoardC.objectsOnCanvas[0].setSound(20 + average * 5);
                }

                // loop again for next frame
                requestAnimationFrame(animateVisual);
            }
        }

    }
    catch (err) {
        /* handle the error */
        console.log("had an error getting the microphone");
    }

}
class RectangularObj {
  constructor(x, y, w, h, f_color, s_color, context) {
    // We write instructions to set up a Flower here
    // Position and size information
    this.x = x;
    this.y = y;
    this.width = w;
    this.height = h;
    this.fill_color = f_color;
    this.stroke_color = s_color;
    this.startAngle = 0;
    this.endAngle = Math.PI * 2; //full rotation
    this.context = context;
    this.baseY = y;
  }

  display() {
    this.context.fillStyle = this.fill_color; // change the color we are using
    this.context.fillRect(this.x, this.y, this.width, this.height);
    this.context.strokeStyle = this.stroke_color; // change the color we are using
    this.context.lineWidth = 2; //change stroke
    this.context.strokeRect(this.x, this.y, this.width, this.height);
  }

  update() {
    if (!audioAnalyser) return;

    let volume = getVolume();

    // Changes rect size based on volume
    this.width = 50 + volume * 4;
    this.height = 50 + volume * 2.5;

    // Changes colour based on volume
    let red = Math.min(238, volume * 7);
    let green = Math.max(0, 255 - volume * 3);
    let blue = 255;
    this.fill_color = `rgb(${red}, ${green}, ${blue})`;

    // Moves rect up and down
    let amplitude = 30;
    let speed = 0.005;

    // Bobs up and down using baseY
    this.y = this.baseY + Math.sin(Date.now() * speed) * amplitude;
  }
}

let audioContext;
let audioAnalyser;
let dataArray;

async function setupMic() {
  // Gets microphone access
  const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
  // Creates audio system in browser
  audioContext = new (window.AudioContext || window.webkitAudioContext)();
  // Audio source/node
  const source = audioContext.createMediaStreamSource(stream);

  // Creates the audio analyser
  audioAnalyser = audioContext.createAnalyser();
  // FFT detail (powers of 2)
  audioAnalyser.fftSize = 256;

  // Creates array to store audio data
  const bufferLength = audioAnalyser.frequencyBinCount;
  dataArray = new Uint8Array(bufferLength);

  // Connects mic to analyser
  source.connect(audioAnalyser);
}

function getVolume() {
  // Grabs audio data from microphone
  audioAnalyser.getByteFrequencyData(dataArray);

  // Loops through all the data
  let sum = 0;
  for (let i = 0; i < dataArray.length; i++) {
    sum += dataArray[i];
  }

  // Average volume
  return sum / dataArray.length;
}

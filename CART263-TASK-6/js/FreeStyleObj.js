class FreeStyleObj {
  constructor(x, y, length, f_color, s_color, context) {
    // We write instructions to set up a Flower here
    // Position and size information
    this.x = x;
    this.y = y;
    this.fill_color = f_color;
    this.stroke_color = s_color;
    this.theta = 0;
    this.length = length;
    this.yOffset = 20;
    this.angularSpeed = .07;
    this.context = context;

    // default value
    this.soundAmp = 5;

  }

  // Update object properties based on microphone input
  setSound(value) {
    // control wave amplitude using sound input
    this.soundAmp = value;
    // map sound value to color intensity (red channel increases with sound)
    let c = Math.min(255, value * 3);
    // update stroke color dynamically
    this.stroke_color = `rgb(${c}, 100, 255)`;
  }

  display() {
    this.theta = 0; //reset everytime
    this.context.fillStyle = this.fill_color; // change the color we are using
    this.context.strokeStyle = this.stroke_color; // change the color we are using
    this.context.beginPath();
    this.context.moveTo(this.x, this.y)
    for (let i = this.x; i < this.x + this.length; i++) {
      this.context.lineTo(i, (Math.sin(this.theta) * this.soundAmp) + this.y)
      this.context.lineTo(i, (Math.sin(this.theta) * this.soundAmp) + this.y + this.yOffset)
      this.theta += this.angularSpeed;
    }
    this.context.stroke(); //set the stroke
  }

  update() {
    //update freestyle
    // console.log("free style update")
    // this.x+=1;
  }


}

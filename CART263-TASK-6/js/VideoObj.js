class VideoObj {
  constructor(x, y, w, h, videoElement, context) {
    this.videoElement = videoElement;
    this.context = context;
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.shapeX = 10;
    this.shapeY = 10;
    this.shapeCol = "#000000";

    /** TASK 4:(Video - recorded - )
   * // add filters or manipulate the pixels... take user input from the boxes..
   *  1: using thr provided VideoObj class - >
   * you will see all the code needed for activating  a blur filter on the video - activate it
   * 2: Next: apply the same logic to enable the other 3 possible filters (adding the event listeners etc)
   * -> make sure to look at the input/output ranges for the values
   * 3: -> apply the context filters  to the video for the three filter options (and activate the blur as well)
   * 4: ->  using the mousemove event listener (already applied in the drawing board) -
   * make the rectangle (over the video) - follow the mouse ... AND change color when you click on the canvas
   * USE & FILL IN THE METHODS ALREADY set out in the VideoObj class...
   * */

    let filterButton_blur = document.getElementById("filter_button_blur");//my button
    let blurInput = document.getElementById("blurnum");//my input field (where user types blur value)
    this.userProvidedBlur = 0;//Stores the blur value (default = 0 = no blur)
   


    let filterButton_sepia = document.getElementById("filter_button_sepia");//my button
    let sepiaInput = document.getElementById("sepianum");//my input field (where user types blur value)
    this.userProvidedSepia = 0;//Stores the blur value (default = 0 = no blur)
    let self = this;

    filterButton_blur.addEventListener("click", function () {
      //get value from input field
      self.userProvidedBlur = blurInput.value;//Saves the value into userProvidedBlur
      console.log(self.userProvidedBlur);
    });

    filterButton_sepia.addEventListener("click", function () {
      //get value from input field
      self.userProvidedSepia = sepiaInput.value;//Saves the value into userProvidedBlur
      console.log(self.userProvidedSepia);
    });
  }

 


  display() {
    this.context.save();
    this.context.filter = `blur(${this.userProvidedBlur}px) sepia(${this.userProvidedSepia}%)`;
    this.context.drawImage(this.videoElement, this.x, this.y, this.w, this.h);
    this.context.fillStyle = this.shapeCol;
    this.context.fillRect(this.shapeX, this.shapeY, 50, 50)
    this.context.restore();
  }

  //called when rectangle color is to be updated
  changeColor(newCol) {
    /** FILL IN */
  }
  //called when rectangle Pos is to be updated
  updatePositionRect(mx, my) {
    /** FILL IN */
  }
  update(videoElement) {
    this.videoElement = videoElement;
  }
}

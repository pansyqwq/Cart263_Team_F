class VideoObj {
  constructor(x, y, w, h, videoElement, context) {
    this.videoElement = videoElement;
    this.context = context;
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.shapeX = 10;
    this.shapeY =10;
    this.shapeCol = "#000000";
 

    let filterButton_blur = document.getElementById("filter_button_blur");//my button
    let blurInput = document.getElementById("blurnum");//my input field (where user types blur value)
    this.userProvidedBlur  = 0;//Stores the blur value (default = 0 = no blur)
    let self = this;

    filterButton_blur.addEventListener("click", function () {
      //get value from input field
      self.userProvidedBlur = blurInput.value;//Saves the value into userProvidedBlur
      console.log(self.userProvidedBlur);
    });
  }

  display() {
    this.context.save();
     this.context.filter = `blur(${this.userProvidedBlur}px)`;
    this.context.drawImage(this.videoElement, this.x, this.y, this.w, this.h);
    this.context.fillStyle = this.shapeCol;
    this.context.fillRect(this.shapeX, this.shapeY, 50,50)
    this.context.restore();
  }

    //called when rectangle color is to be updated
  changeColor(newCol){
   /** FILL IN */
  }
  //called when rectangle Pos is to be updated
  updatePositionRect(mx,my){
     /** FILL IN */
  }
  update(videoElement) {
    this.videoElement = videoElement;
  }
}

class Bird {
  constructor(x, y, size) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.vx = 2;
    this.vy = 1.5;
    this.birdDiv = document.createElement("img");

    let self = this; //keep a copy of 'this'

    this.birdDiv.addEventListener("click", changePosition);

    function changePosition(e) {
      console.log(e.target);
      console.log(this);
      console.log(self);
      self.x = Math.random() * 1500;
      self.y = Math.random() * 1500;

      //update the actual div...
      self.birdDiv.style.x = self.x + "px";
      self.birdDiv.style.y = self.y + "px";
      console.log("moved");
    }
  }

  renderBird() {
    this.birdDiv.classList.add("bird");
    this.birdDiv.style.width = this.size + "px";
    this.birdDiv.src = "img/bird1.png";
    this.birdDiv.style.zIndex = 99999;
    this.birdDiv.style.position = "absolute";
    this.birdDiv.style.left = this.x + "px";
    this.birdDiv.style.top = this.y + "px";
    document.querySelector("main").appendChild(this.birdDiv);
  }

  update() {
    // move bird
    this.x += this.vx;
    this.y += this.vy;

    // screen width & height
    const screenW = window.innerWidth;
    const screenH = window.innerHeight;

    // LEFT or RIGHT edge
    // Only bounce if NOT fleeing rain
    if (!this.isFleeing) {
      if (this.x <= 0 || this.x >= screenW - this.size) {
        this.vx *= -1;
      }

      if (this.y <= 0 || this.y >= screenH - this.size) {
        this.vy *= -1;
      }
    }

    // apply position to DOM
    this.birdDiv.style.left = this.x + "px";
    this.birdDiv.style.top = this.y + "px";

    if (this.vx > 0) {
      this.birdDiv.style.transform = "scaleX(-1)";
    } else {
      this.birdDiv.style.transform = "scaleX(1)";
    }
  }

  setWeather(state) {
    // If raining → flee
    if (state === "raining") {
      if (!this.isFleeing) {
        // only trigger once

        this.isFleeing = true;

        this.vx = Math.random() > 0.5 ? 5 : -5;
        this.vy = -5;
      }
    } else {
      // Only reset if we WERE fleeing
      if (this.isFleeing) {
        this.isFleeing = false;

        this.vx = 2;
        this.vy = 1.5;

        // Re-enter from sky area
        this.x = Math.random() * window.innerWidth;
        this.y = Math.random() * 120;
      }
    }
  }

  animate() {
    this.update();

    requestAnimationFrame(() => this.animate());
  }
}

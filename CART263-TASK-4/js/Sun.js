class Sun {
  constructor(x, y, sunColor) {
    this.x = x;
    this.y = y;
    this.sunColor = sunColor;
    this.sunDiv = document.createElement("div");
    this.vx = 1;
    this.vy = 1;
    self = this;
  }

  renderSun() {
    // //sun - IN the sky
    this.sunDiv.classList.add("sun");
    this.sunDiv.style.background = `rgb(${this.sunColor.r},${this.sunColor.g},${this.sunColor.b})`;
    // //append to the SKY div
    document.querySelector(".sky").appendChild(this.sunDiv);
  }

  updateDivPos() {
    console.log("update");
    this.sunDiv.style.left = this.x + "px";
    this.sunDiv.style.top = this.y + "px";
  }

  weatherEffect(state) {
    if (state === "sunny") {
      this.sunDiv.style.opacity = "1";
    } else if (state === "cloudy") {
      this.sunDiv.style.opacity = "0.5";
    } else if (state === "raining") {
      this.sunDiv.style.opacity = "0";
    }
  }
}

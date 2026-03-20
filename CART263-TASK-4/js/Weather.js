/**TEAM F -- Weather
 * 1/ Create a file to hold a Weather Class (i.e. Weather.js)
 * 2/ Create the Weather Class : a constructor which takes at LEAST 2 properties: weather "state" i.e. sunny, raining, cloudy as well as a variable to hold the current temp
 * 3/ Create a renderWeather() method -> which essentially will call one of a few custom methods to render the current weather:
 * 4/ If the weather is determined to be sunny then call the renderSunny() which will contain HTML element(s) - could be
 * images, svgs etc .... representing sunny weather, if the weather is determined to be rainy then one would call a renderRainy() etc ...
 * 5/ In garden.js instantiate a weather state + add the current temperature.
 * 6/ Implement the functionality such that at different time intervals the weather changes and or the temperature.
 * 7/ Ensure and Implement the functionality for the birds (collab with TEAM E) to be affected by the current weather and temperature.
 *
 */

class Weather {
  constructor(state, temp) {
    this.state = state;
    this.temp = temp;

    this.tempDisplay = document.createElement("div");

    this.tempDisplay.style.position = "absolute";
    this.tempDisplay.style.top = "25px";
    this.tempDisplay.style.right = "50px";
    this.tempDisplay.style.fontSize = "100px";
    this.tempDisplay.style.fontWeight = "bold";
    this.tempDisplay.style.color = "white";
    this.tempDisplay.zIndex = "1000";
    this.tempDisplay.style.textShadow = "2px 2px 4px rgba(0, 0, 0, 0.5)";

    document.body.appendChild(this.tempDisplay);
  }

  renderWeather() {
    if (this.state === "sunny") {
      this.renderSunny();
      this.temp = Math.floor(Math.random() * 10) + 25;
    } else if (this.state === "raining") {
      this.renderRaining();
      this.temp = Math.floor(Math.random() * 10) + 10;
    } else if (this.state === "cloudy") {
      this.renderCloudy();
      this.temp = Math.floor(Math.random() * 10) + 15;
    }

    this.renderTemp();
  }
  renderSunny() {
    let sky = document.getElementsByClassName("sky")[0];
    if (sky) sky.style.background = `rgb(58, 157, 182)`;
  }
  renderRaining() {
    let sky = document.getElementsByClassName("sky")[0];
    if (sky) sky.style.background = `rgb(24, 27, 34)`;
  }
  renderCloudy() {
    let sky = document.getElementsByClassName("sky")[0];
    if (sky) sky.style.background = `rgb(150, 160, 180)`;
  }
  renderTemp() {
    this.tempDisplay.innerHTML = `${this.temp}°C`;
  }
}

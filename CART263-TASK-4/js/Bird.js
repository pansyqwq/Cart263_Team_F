class Bird {
    constructor(x, y, size) {
        this.x = x;
        this.y = y;
        this.size = size;
        this.birdDiv = document.createElement("img");
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
}


class Bird {
    constructor(x, y, size) {
        this.x = x;
        this.y = y;
        this.size = size;
        this.vx = 2;
        this.vy = 1.5;
        this.birdDiv = document.createElement("img");

        let self = this;//keep a copy of 'this'

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
        if (this.x <= 0 || this.x >= screenW - this.size) {
            this.vx *= -1; // reverse horizontal direction
        }

        // TOP or BOTTOM edge
        if (this.y <= 0 || this.y >= screenH - this.size) {
            this.vy *= -1; // reverse vertical direction
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

    animate() {
        this.update();

        requestAnimationFrame(() => this.animate());
    }
}


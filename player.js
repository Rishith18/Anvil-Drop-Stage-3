class Player {
    constructor(x, y) {
        var options = {
            restitution : 0,
            density : 1,
            friction : 5
        }
        this.body = Bodies.rectangle(x,y,85,150,options);
        this.width = 95;
        this.height = 150;
        this.imageFront = loadImage("SteveFront.png");
        this.imageRight = loadImage("steveImages/steve1.gif","steveImages/steve2.gif");
        this.imageLeft = loadImage("steveImagesR/steve1r.gif");
        World.add(world,this.body);
    }

    displayFront() {
        var pos = this.body.position
        push()
        translate(pos.x,pos.y);
        rotate(this.body.angle);
        imageMode(CENTER);
        image(this.imageFront,0,0,this.width,this.height);
        pop()
    }

    displayRight() {
        var pos = this.body.position
        push()
        this.width = 105
        translate(pos.x,pos.y);
        rotate(this.body.angle);
        imageMode(CENTER);
        image(this.imageRight,0,0,this.width,this.height);
        pop()
    }

    displayLeft() {
        var pos = this.body.position
        push()
        translate(pos.x,pos.y);
        rotate(this.body.angle);
        imageMode(CENTER);
        image(this.imageLeft,0,0,this.width,this.height);
        pop()
    }
}
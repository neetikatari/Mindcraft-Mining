class BaseClass{
    constructor(x, y, width, height, angle,color) {
        var options = {
            'restitution':0,
            'friction':3,
            'density':2.0
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.color = color
        console.log(color)
        this.image = loadImage("sprites/base.png");
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        fill(this.color)
        rectMode(CENTER);
        rect( 0, 0, this.width, this.height);
        //image(this.image, 0, 0, this.width, this.height);
        pop();
      }
}
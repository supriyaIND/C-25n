class BaseClass{
    constructor(x, y, width, height, angle) {
        var options = {
          //restitution is how much bounce the object will bounce
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.image = loadImage("sprites/base.png");
        //World is a function in which I add another function of my own with a small w "world" and then I add 
        // this.body which means everything written after that will be for the of the object
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        pop();
      }
}
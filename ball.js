class BALL {
  constructor(x, y, r) {
    var options = { isStatic: false };
    this.body = Matter.Bodies.circle(x, y, r, options);
    this.radius = r;
    this.image = loadImage("ground.png");
    Matter.World.add(world, this.body);
  }

  display() {
    imageMode(CENTER);
    image(this.image , this.body.position.x , this.body.position.y,this.radius*2);

  }
}

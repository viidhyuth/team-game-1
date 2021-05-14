var engine,world;

var ball;
var ground,platform;

// function preload(){
//ball=loadImage("ball.png")
// ground=loadImage("ground.png")	
// }

function setup() {
	createCanvas(windowWidth,windowHeight);

	engine = Matter.Engine.create();
	world = engine.world;
    
	ball = new BALL(200,200,70);
	ground= new GROUND( 400 , 400 , 500 , 20 );

	Matter.Engine.run(engine);
}


function draw() {
	
  background(0);
//   ball.velocityY=-1
//  if(keyCode(38)){
//  ball.velocityY=+1
//  }

  
  ball.display();
  ground.display();
  
  drawSprites();
}
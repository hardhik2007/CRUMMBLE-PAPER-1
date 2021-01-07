
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var basket1,paper,basket2,basket3
var paper;
var ground;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(600,600,1200,20);

	basket1 = new Basket(490,500,20,100);
	basket2 = new Basket(310,500,20,100);
	basket3 = new Basket(400,550, 200,20);
	paper = new Paper(150,250,20,20);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  basket1.display();
  basket2.display();
  basket3.display();
   paper.display();
   ground.display();
   keyPressed();
  drawSprites();
 
}


function keyPressed(){
	if(keyCode === UP_ARROW){

		Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-85})
		 
	}
}

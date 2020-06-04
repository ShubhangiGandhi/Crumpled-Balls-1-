//var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
//var packageBody,
var leftsprite,boxleft,paperSprite;
var leftsprite,boxleft,ground,groundsprite;
var leftsprite,boxleft;
var rightsprite,boxright;
var bottomsprite,boxbottom,paperBody;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var box1;
function preload()
{
	//helicopterIMG=loadImage("helicopter.png")
	//packageIMG=loadImage("package.png")
}


function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	engine = Engine.create();
	world = engine.world;
	 leftsprite=createSprite(515,612,25,92);
	 leftsprite.shapeColor=('red')
	 rightsprite=createSprite(730,612,25,92);
	 rightsprite.shapeColor=('red');
	 bottomsprite=createSprite(620,647,213,25);
	 bottomsprite.shapeColor=('red');
	paperSprite=createSprite(100, 60, 50,50);
	paperSprite.shapeColor=('green');
	//packageSprite.addImage(packageIMG)
	//packageSprite.scale=0.2

	//helicopterSprite=createSprite(width/2, 200, 10,10);
	//helicopterSprite.addImage(helicopterIMG)
	//helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	

	paperBody = Bodies.circle(100, 60, 50, {restitution:0.5,friction:0.5,density:1.2, isStatic:false});
	World.add(world, paperBody);
	 
	
    
	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	 World.add(world, ground);
	 
	 boxleft=Bodies.rectangle(515,612,25,92,isStatic=true)
	 World.add(world,boxleft);
	 
	 boxright=Bodies.rectangle(730,612,25,92,isStatic=true);
	 World.add(world,boxright);

	 boxbottom=Bodies.rectangle(620,647,213,25);
	 World.add(world,boxbottom);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  
  background(0);
  paperSprite.x= paperBody.position.x 
  paperSprite.y= paperBody.position.y 
  //boxleft.display();
  drawSprites();
 
}

function keyPressed() {
	
		if (keyCode === RIGHT_ARROW) {
	  
		  Matter.Body.applyForce(paperBody,paperBody.position,{x:100,y:-100});
	  
	  
		} 
}




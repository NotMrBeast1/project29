const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;





function preload(){

}

function setup(){
  canvas = createCanvas(1000,600)
  engine = Engine.create();
  world = engine.world;

  box1 = new Box(670,0)
  box2 = new Box(690,0)
  box3 = new Box(710,0)
  box4 = new Box(730,0)
  box5 = new Box(750,0)
  box6 = new Box(690,0)
  box7= new Box(710,0)
  box8 = new Box(730,0)
  box9 = new Box(710,0)
  
  g1  = new Ground(500,580,1000,40)
  stand = new Ground(710,300,130,10)
  stand1 = new Ground(120,300,170,10)
  
  b1 = new Box(100,0)
  b2 = new Box(120,0)
  b3 = new Box(150,0)
  b4 = new Box(170,0)
  b5 = new Box(190,0)
  b6 = new Box(120,0)
  b7= new Box(150,0)
  b8 = new Box(170,0)
  b9 = new Box(150,0)
  
 
  fh = new Hitter(300,50)

  chain= new Chain(fh.hit,{x:600,y:50})
	
}

function draw(){
  background("white")
  Engine.update(engine)
  
  box1.display();
  box2.display();
  box3.display(); 
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();

  b1.display();
  b2.display();
  b3.display(); 
  b4.display();
  b5.display();
  b6.display();
  b7.display();
  b8.display();
  b9.display();
  
  
  g1.display();
  stand.display();
  stand1.display();

  fh.display();
  chain.display();
}

function mouseDragged(){
  
  Matter.Body.setPosition(fh.hit, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  slingshot.fly();
  gameState = "offSling";
}
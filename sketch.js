
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var treeObj, stoneObj,groundObject, launcherObject;
var mango1;
var world,boy;
var rope1


function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

   


	groundObject=new ground(width/2,590,1300,10);
	
	ball1=new mango(300,500,55);
	rubber=new rubber(800,580,80,170)
	hammer=new hammer(500,570,80,80)
rock=new rock(600,580,100,100)

	Engine.run(engine);

}

function draw() {

  background(230);
  //Add code for displaying text here!

fill("orange")
 
  
  ball1.display();
rubber.display();
hammer.display();
rock.display();
groundObject.display();
}

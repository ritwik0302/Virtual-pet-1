var  dog, happyDog, database, foodS, foodStock

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;	
const Body = Matter.Body;

function preload()
{
	dogImg= loadImage("Dog.png");
	happydogImg= loadImage("happydog.png");
}

function setup() {
	createCanvas(500, 500);

dog= createSprite(50,50);
dog.addImage(dogImg);
	engine = Engine.create();
	world = engine.world;

	foodStock=database.ref('Food');
	foodStock.on("value", readStock);

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
if(keyWentDown){
	writeStock(foodS);
	dog.addImage(happydogImg);
}

  drawSprites();
 
  function readStock(data){
	foodS=data.val();
}

function writeStock(x){
	
	database.ref('/').update({
		Food:x
	})
}




}


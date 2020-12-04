var fixedRect;
var movingRect;

function setup() {
  createCanvas(windowWidth,windowHeight);
  
  fixedRect=createSprite(400, 300, 60, 100);
  fixedRect.shapeColor="green";
  movingRect=createSprite(1000,300,80,40);
  movingRect.shapeColor="green";

}

function draw() {
  background(0,0,0);  

  movingRect.y=mouseY;
  movingRect.x=mouseX;

  if(movingRect.x-fixedRect.x<movingRect.width/2+fixedRect.width/2
  && fixedRect.x-movingRect.x<movingRect.width/2+fixedRect.width/2
  && movingRect.y-fixedRect.y<movingRect.height/2+fixedRect.height/2
  && fixedRect.y-movingRect.y<movingRect.height/2+fixedRect.height/2){

  fixedRect.shapeColor="red";
  movingRect.shapeColor="red";

  }
  else {

  movingRect.shapeColor="green";
  fixedRect.shapeColor="green";

  }

  drawSprites();
}


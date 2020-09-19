var fixedRect, movingRect;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 200, 30, 80);
  movingRect = createSprite(100,100,80,30);
  movingRect.shapeColor = "blue";
  fixedRect.shapeColor = "red";

  fixedRect.debug = true;
  
  movingRect.debug = true;
}

function draw() {
  background(255,255,255);
  
  if(movingRect.x-fixedRect.x <= movingRect.width/2 + fixedRect.width/2
    && fixedRect.x-movingRect.x <= movingRect.width/2 + fixedRect.width/2
    && movingRect.y-fixedRect.y <= movingRect.height/2 + fixedRect.height/2
    && fixedRect.y-movingRect.y <= movingRect.height/2 + fixedRect.height/2){
    movingRect.shapeColor = "green";
    fixedRect.shapeColor = "green";
  }
  else{
    movingRect.shapeColor = "blue";
    fixedRect.shapeColor = "red";
  }


  movingRect.x = mouseX;
  movingRect.y = mouseY;
  drawSprites();
}

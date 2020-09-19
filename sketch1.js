var sprite1, sprite2;

function setup() {
  createCanvas(1200,800);
  sprite1 = createSprite(500, 600, 30, 80);
  sprite2 = createSprite(500,0,80,30);
  sprite1.shapeColor = "blue";
  sprite2.shapeColor = "red";

    sprite1.velocityY = -6;
    sprite2.velocityY = 3;
}

function draw() {
  background(255,255,255);
  

 
  if(sprite1.x-sprite2.x <= sprite1.width/2 + sprite2.width/2
    && sprite2.x-sprite1.x <= sprite1.width/2 + sprite2.width/2){
        sprite1.velocityX = sprite1.velocityX * -1;
        sprite2.velocityX = sprite2.velocityX * -1;
    }
    if(sprite1.y-sprite2.y <= sprite1.height/2 + sprite2.height/2
        && sprite2.y-sprite1.y <= sprite1.height/2 + sprite2.height/2){
            sprite1.velocityY = sprite1.velocityY * -1;
            sprite2.velocityY = sprite2.velocityY * -1;
        }


  drawSprites();
}

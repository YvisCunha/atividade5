var bola;
function setup() {
  createCanvas(400,400);
  bola=createSprite(200,200,30,30);
}
function draw() 
{
  if(keyIsDown(RIGHT_ARROW)){
    bola.x=bola.x+1;
    background(30)

  }
  if(keyIsDown(LEFT_ARROW)){
    bola.x=bola.x-1;
    background(50)
  }
  if(keyIsDown(UP_ARROW)){
    bola.y=bola.y-1;
    background(90)
  }
  if(keyIsDown(DOWN_ARROW)){
    bola.y=bola.y+1;
    background(0)
  }

drawSprites();
}





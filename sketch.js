var fixedRect, movingRect;
var square1,square2;
function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  square1 = createSprite(200,300,30,30);
  square1.shapeColor = "white";
  square2= createSprite(500,300,100,100);
  square2.shapeColor = "white";
  movingRect.shapeColor = "green";
  movingRect.debug = true;
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

if(touching(square2,movingRect))
{
movingRect.shapeColor = "yellow";
square2.shapeColor = "yellow";
}
else {
  movingRect.shapeColor = "pink";
square2.shapeColor = "pink";
}
  drawSprites();
}


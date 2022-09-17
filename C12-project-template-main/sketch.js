var path,boy, leftBoundary,rightBoundary;
var pathImg,boyImg;
var i;

function preload(){
  pathImg=loadImage("path.png");
  boyImg=loadAnimation("jake1.png","jake2.png", "jake3.png", "jake4.png", "jake5.png");
}

function setup(){
  
  createCanvas(400,400);
 
  path=createSprite(200, 200);
  path.addImage(pathImg);
  path.velocityY=10;
  path.scale=1.2;
  boy=createSprite(200, 350);
  boy.scale=0.45;
  boy.addAnimation("run", boyImg);
  
  leftBoundary=createSprite(0,0,200,800);
  leftBoundary.visible=false;
  boy.collide(leftBoundary);
  rightBoundary=createSprite(410,0,200,800);
  rightBoundary.visible=false;
  boy.collide(rightBoundary);
}

function draw() {
  
  background(0);
  if(mouseX>boy.x){
    boy.velocityX=(mouseX-boy.x)/10;
  }
  if(mouseX<boy.x){
    boy.velocityX=(mouseX-boy.x)/10;
  }
  edges= createEdgeSprites();
  boy.collide(edges);
  if(path.y > 400 ){
    path.y = height/1.588;
  }
  
  drawSprites();
}

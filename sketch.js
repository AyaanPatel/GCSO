var wall
var speed,weight

function setup() {
  createCanvas(1600,400);
  speed = random(55,90);
  weight = random(400,1500);
  wall = createSprite(1500,200,60,width/2); 

  
  carSprite = createSprite(50,200,50,50);
  carSprite.velocityX = speed;
  
}

function draw() {
  background(255,255,255); 
  
  if(wall.x-carSprite.x < (carSprite.width+wall.width)/2){
    carSprite.velocityX = 0;
    var deformation=0.5 * weight * speed * speed/22509;
    if(deformation>180){
      carSprite.shapeColor = color(255,0,0);
    }
    if(deformation>180 && deformation<100){
      carSprite.shapeColor = color(230,230,0);
    }
    if(deformation<100){
      carSprite.shapeColor = color(0,255,0);
    }
  
  drawSprites();
}
}
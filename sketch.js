var bullet,wall
var weight,speed
var thickness

function setup(){ 
bullet = createSprite(50,200,50,50);
wall = createSprite(1500,200,60,height/2);
thickness = random(22,83);
speed = random(55,90)
weight = random(400,1500)
}

function draw(){
  createCanvas(1600,400)


bullet.velocityX = speed;

if(hasCollided(bullet, wall)){
  bullet.velocityX = 0;
  var damage=0.5 * weight * speed * speed/(thickness*thickness*thickness);

  if (damage>10){
    wall.shapeColor=color(255,0,0)
  }

  if(damage<10){
     wall.shapeColor=color(0,250,0)
  }
}

  drawSprites()
}

function hasCollided(lbullet, lwall){
    bulletRightEdge=lbullet.x + lbullet.width;
    wallLeftEdge = lwall.x;
       if(bulletRightEdge>=wallLeftEdge){
         return true
       }
else{
   return false;  
      }
 } 
    
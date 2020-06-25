var ball,ballImg,bgImg,obs1,obsImg,obs2;

function preload() {
  ballImg = loadImage("ball.png");
  bgImg = loadImage("bg1.png");
  obsImg = loadImage("obs.png");
}
function setup() {
  createCanvas(800,600);
 ball= createSprite(450,600, 50, 50);
 ball.addImage(ballImg);
 ball.scale=1.5;
 obs1= createSprite(350,400,50,50);
 obs1.addImage(obsImg);
 obs1.scale=0.3;
 obs2= createSprite(550,500,50,50);
 obs2.addImage(obsImg);
 obs2.scale=0.3;
}

function draw(){ 
  background(bgImg); 
if(keyDown(LEFT_ARROW))
{
   changePosition(-3,0);
 } 
else if(keyDown(RIGHT_ARROW))
{ 
  changePosition(3,0); 
} 
else if(keyDown(UP_ARROW)){
   changePosition(0,-3);
   }
 else if(keyDown(DOWN_ARROW)){ 
  changePosition(0,+3);
 }
 drawSprites(); 
} 
function changePosition(x,y){
   ball.x = ball.x + x; 
  ball.y = ball.y + y;
 }
var ob1,ob2;
var ob3,ob4;
function setup() {
  createCanvas(800,400);
  ob1=createSprite(400, 200, 50, 50);
  ob2=createSprite(300,100,30,30);
  ob3=createSprite(100,250,40,40);
  ob4=createSprite(300,250,20,70);
  ob3.velocityX=2;
  ob4.velocityX=-2;
  ob1.shapeColor="green";
  ob2.shapeColor="green";
}

function draw() {
  background(255,255,255);  
  ob1.x=mouseX;
  ob1.y=mouseY;
 console.log(ob1.x-ob2.x);
 
if(isTouching (ob3,ob4)){
  ob2.shapeColor="red";
  ob1.shapeColor="red";
}else{
  ob2.shapeColor="green";
   ob1.shapeColor="green";

}
 bounceOff(ob3,ob4)




  drawSprites();
}

function isTouching(o1,o2){
  if(o1.x-o2.x<o1.width/2+o2.width/2 && o2.x-o1.x<o1.width/2+o2.width/2 && o1.y-o2.y<o1.height/2+o2.height/2 && o2.y-o1.y<o1.height/2+o2.height/2){
    return true
   }else{ 
     return false 
  }

}

function bounceOff(o1,o2){
  if(o1.x-o2.x<o1.width/2+o2.width/2 && o2.x-o1.x<o1.width/2+o2.width/2){
    o1.velocityX=o1.velocityX*-1;
    o2.velocityX=o2.velocityX*-1;
  }
  if(o1.y-o2.y<o1.height/2+o2.height/2 && o2.y-o1.y<o1.height/2+o2.height/2){
    o1.velocityY=o1.velocityY*-1;
    o2.velocityY=o2.velocityY*-1;
  }

}







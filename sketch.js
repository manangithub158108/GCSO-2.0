// the color shows the rate of damage happening (depending upon the speeds of the cars)

var car1,car2,car3,wall1,wall2,wall3,speed;
function setup() {

  //creating the area
  createCanvas(800,400);

  // creating the random speeds
  speed = random(10,20);

  // creating the walls and giving colors
  wall1 = createSprite(700, 100, 20, 70);
  wall1.shapeColor = "orange";

  wall2 = createSprite(700, 200, 20, 70);
  wall2.shapeColor = "orange";

  wall3 = createSprite(700, 300, 20, 70);
  wall3.shapeColor = "orange";


  // creating the cars with speeds
  car1 = createSprite(200,100,10,10);
  car1.velocityX = speed = random(10,20);
  
  car2 = createSprite(200,200,10,10);
  car2.velocityX = speed = random(10,20);
  
  car3 = createSprite(200,300,10,10);
  car3.velocityX = speed = random(10,20);
 

}

function draw() {

  // creating the background color
  background(5,5,5); 

  // making the sprite.istouching command
  if(wall1.x - car1.x < wall1.width/2 + car1.width / 2 ){
   car1.shapeColor = "green";
   car1.velocityX = 0;
  }

  if(wall2.x - car2.x < wall2.width/2 + car2.width / 2 ){
    car2.shapeColor = "red";
    car2.velocityX = 0;
   }

   if(wall3.x - car3.x < wall3.width/2 + car3.width / 2 ){
    car3.shapeColor = "blue";
    car3.velocityX = 0;
   }

   // creating the sprites.
  drawSprites();
}
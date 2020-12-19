
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas (600, 600)
  monkey = createSprite(80, 350, 20, 20)
  monkey.addAnimation("running", monkey_running)
  monkey.scale = 0.2
  
   ground = createSprite(200,415,600,20);
  ground.x = ground.width /2;
  
 

  bananaGroup = new Group ()
  obstacleGroup = new Group ()
}


function draw() {
  background ("yellow")
  spawnbanana ()
   if(keyDown("space")) {
        monkey.velocityY = -12;
    }
   monkey.velocityY = monkey.velocityY + 0.8
  monkey.collide(ground);
  spawnobstacles ()
drawSprites ()
   
}

function spawnbanana() {
  //write code here to spawn the clouds
  if (frameCount % 60 === 0) {
    var banana = createSprite(600,120,40,10);
    banana.y = Math.round(random(80,320));
    banana.addImage(bananaImage);
    banana.scale = 0.5;
    banana.velocityX = -3;
    banana.scale = 0.2
     //assign lifetime to the variable
    banana.lifetime = 200;
    
    //adjust the depth
    banana.depth = monkey.depth;
    monkey.depth = monkey.depth + 1;
    
    //add each cloud to the group
    bananaGroup.add(banana );
  }
}


function spawnobstacles() {
  //write code here to spawn the clouds
  if (frameCount % 200 === 0) {
    var obstacle = createSprite(600,400,40,10);
    obstacle.addImage(obstaceImage);
    obstacle.scale = 0.5;
    obstacle.velocityX = -3;
    obstacle.scale = 0.2
     //assign lifetime to the variable
    obstacle.lifetime = 200;
    
    //adjust the depth
    obstacle.depth = monkey.depth;
    monkey.depth = monkey.depth + 1;
    
    //add each cloud to the group
    obstacleGroup.add(obstacle );
  }
}


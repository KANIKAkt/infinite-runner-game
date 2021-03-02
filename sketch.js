var path, path1;
var jake, jake_running;
var invisiblePath1, invisiblePath2;


function preload(){
    //pre-load images
    path1 = loadImage("path.png");
    jake_running = loadAnimation("Jake1.png", "Jake2.png", "Jake3.png", "Jake4.png", "Jake5.png"); 
}

function setup(){
    createCanvas(363, 520);
    //create sprites here
    path = createSprite(180, 200, 10, 10);
    path.addImage("path.png",path1);
    path.scale = 1.2;

    jake = createSprite(200, 475, 20, 20);
    jake.addAnimation("running", jake_running);
    jake.scale = 0.5;

    invisiblePath1 = createSprite(10, 260, 28, 520);
    invisiblePath1.visible = false;
    invisiblePath2 = createSprite(366, 260, 45, 520);
    invisiblePath2.visible = false;
    
}

function draw() {
    background("black");
  
    console.log(jake.x);
    createEdgeSprites();

    if(path.y > 400){
      path.y = 100;
    }
    path.velocityY = 4;
    
    jake.x = mouseX;
    jake.collide(invisiblePath1);
    jake.collide(invisiblePath2);
    if(jake.x < 43){
      jake.x = 43;
    }
    if(jake.x > 321){
      jake.x = 321;
    }
  
    drawSprites();
}

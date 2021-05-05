var pgImage;
var tom,jerry
var tomImg,jerryImg;
var tomImg2, jerryImg2;
var jerryImg3, tomImg3;
function preload() {
    //load the images here
    pgImage = loadImage("images/garden.png")
    tomImg = loadImage("images/cat1.png")
    jerryImg = loadImage("images/mouse1.png")
    tomImg2 = loadAnimation("images/cat2.png","images/cat3.png")
    jerryImg2 = loadAnimation("images/mouse2.png", "images/mouse3.png")
    tomImg3 = loadAnimation("images/cat4.png");
    jerryImg3 = loadAnimation("images/mouse4.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    jerry = createSprite(200,600);
    jerry.addImage(jerryImg);
    jerry.scale=0.2;

    tom = createSprite(870,600);
    tom.addImage(tomImg);
    tom.scale=0.2;
}

function draw() {

    background(pgImage);
    //Write condition here to evalute if tom and jerry collide
    if(tom.x-130 - jerry.x < (tom.width - jerry.width)/2){
    tom.addAnimation("catStanding", tomImg3);
    jerry.addAnimation("mouseStanding", jerryImg3);
    tom.changeAnimation("catStanding");
    jerry.changeAnimation("mouseStanding");
    tom.velocityX=0;
    }

    drawSprites();
}

//For moving and changing animation write code here

function keyPressed(){

if(keyCode === LEFT_ARROW){
tom.velocityX=-5;
tom.addAnimation("tomRunning", tomImg2);
tom.changeAnimation("tomRunning");

jerry.addAnimation("jerryDancing", jerryImg2);
jerry.changeAnimation("jerryDancing");
}




  
  

}

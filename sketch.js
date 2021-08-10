var backing,rocketing,staring,astroiding,gameovering;

function preload(){
backing=loadImage("Infinte back.png")
rocketing=loadImage("R.png")
staring=loadImage("download.png")
astroiding=loadImage("A.png")
gameovering=loadImage("gameOver.png")
}

function setup() {
createCanvas(400,400) 

back=createSprite(200,200);
back.addImage(backing) 

rocket=createSprite(200,350)
rocket.addImage(rocketing)
rocket.scale=0.2;

gameover=createSprite(200,200)
gameover.addImage(gameovering);
gameover.depth=0

}

function draw() {
 drawSprites();

 var put = Math.round(random(1,2))

 rocket.x = World.mouseX;

 if (put===1) {
     Star()
 }
 
 if (put===2) {
     Astroid()
 }

 Text("Score ="+score);
 var score=0;
 if (rocket.isTouching(star)) {
     score=score+1;
 }

 if (rocket.isTouching(astroid)) {
     gameover.depth=2;
 }
}

function Star() {
    astroid=createSprite(Math.round(random(50,350)),50)
    astroid.addImage(astroiding);
    astroid.scale=0.05
    astroid.velocityY=3
}

function Astroid() {
    astroid=createSprite(Math.round(random(50,350)),50)
    astroid.addImage(astroiding);
    astroid.scale=0.05
    astroid.velocityY=3
}
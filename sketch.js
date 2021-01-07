var starImg, fairyImg, bgImg;
var fairy , fairyVoice;
var star, starBody;
var random_numbery, random_numberx
var border, border2, border3, border4

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	starImg = loadImage("images/star.png");
	fairyImg = loadAnimation("images/fairyImage1.png","images/fairyImage2.png");
	bgImg = loadImage("images/starNight.png");
	fairyVoice = loadSound("sound/JoyMusic.mp3");

}

function setup() {
	createCanvas(800, 750);

	x = random(100, 700)
	y = random(100, 650)

	// fairyVoice.play();

	fairy = createSprite(200, 500);
	fairy.addAnimation("fairyflying",fairyImg);  
	fairy.scale =0.25;

	star = createSprite(x,y, 10, 10);
	star.addImage(starImg);
	star.scale = 0.2;
	

	engine = Engine.create();
	world = engine.world;

	border = createSprite(200, -275, 1000, 10)

	border2 = createSprite(200,700, 1000,10)

	border3 = createSprite(20, 200, 10, 1000)

	border4  =createSprite(750, 200, 10, 10000)
	
	starBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, starBody);
	
	
	Engine.run(engine);


}


function draw() {
  background(bgImg);

  checkforcollisions()

  keyPressed()

  drawSprites();

}

function keyPressed() {
	if (keyDown('RIGHT_ARROW')){
		fairy.velocityX += 1
	}

	if (keyDown("LEFT_ARROW")){
		fairy.velocityX -= 1
	}

	if (keyDown("DOWN_ARROW")){
		star.velocityY += 1
	}

	//make_borders()


}

function make_borders(){

	while (fairy.y - border.y < (border.height + fairy.height)){
		fairy.velocityX = 0
		fairy.velocityY = 0
		
	  }

	while (border2.y - fairy.y < (border2.height + fairy.height)){
		fairy.velocityY = 0
		fairy.velocityX = 0
	
	  }

	while (border3.x - fairy.x < (border3.width + fairy.width)/2){
		fairy.velocityY = 0
		fairy.velocityX = 0

	}

	while (border4.x - fairy.x < (border4.width + fairy.width)/2){
		fairy.velocityX = 0
		fairy.velocityY = 0
	}
}
	
function checkforcollisions(){
	if (fairy.x - star.x < (fairy.width + star.width)/2){
		star.kill
	}

	if (fairy.y - star.y < (fairy.height + star.height)/2){
		star.kill
	}
}
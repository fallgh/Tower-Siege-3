const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, box2, box3, box4, box5, box6, box7, box8, box9;
var box10,box11,box12, box13, box14;
var player;
var ground1, ground2, ground3;

var box15, box16, box17, box18, box19, box20, box21;
var box22;
var rope;
var player;
var rope;
var ball;
var img;
var backgroundImg;

var score = 0;

function preload()
{
  img = loadImage("polygon.png");
  getBackgroundImg();

}

function setup() 
{
  createCanvas(1500,600);
  engine = Engine.create();
    world = engine.world;


  box1 = new Box(600,260,30,40);
  box2 = new Box(570,260,30,40);
  box3 = new Box(540,260,30,40);
  box4 = new Box(630,260,30,40);
  box5 = new Box(660,260,30,40);



  box6 = new Box(585,220,30,40);
  box7 = new Box(555,220,30,40);
  box8 = new Box(615,220,30,40);
  box9 = new Box(645,220,30,40);



  box10 = new Box(600,170,30,40);
  box11 = new Box(570,180,30,40);
  box12 = new Box(630,180,30,40);


  box13 = new Box(600,140,30,40);
  ground1 = new Ground(600,285,200,10);
  ground2 = new Ground(900,195,200,10);
  ground3 = new Ground(750, 600, 1500, 10)


  box14 = new Box(900,170,30,40);
  box15 = new Box(930,170,30,40);
  box16 = new Box(870,170,30,40);
  box17 = new Box(840,170,30,40);
  box18 = new Box(960,170,30,40);

  box19 = new Box(900,140,30,40);
  box20 = new Box(930,140,30,40);
  box21 = new Box(870,140,30,40);

  box22 = new Box(900,110,30,40);

  player = new Ball(50,200,30,30);

  ball = Bodies.circle(50,200,20);
  World.add(world,ball);

  rope = new Rope(this.ball,{x:150, y:160});

}

function draw() 
{
  if(backgroundImg)

  background(backgroundImg);
  Engine.update(engine);

  
  fill(rgb(135, 205, 236));

  box1.display();
  box1.score();
  box2.display();
  box2.score();
  box3.display();
  box3.score();
  box4.display();
  box4.score();
  box5.display();
  box5.score();

  fill("lightBlue");
  box6.display();
  box6.score();
  box7.display();
  box7.score();
  box8.display();
  box8.score();
  box9.display();
  box9.score();

  fill("lightPink");
  box10.display();
  box10.score();
  box11.display();
  box11.score();
  box12.display();
  box12.score();

  fill(rgb(47, 48, 48));
  box13.display();
  box13.score();

  fill(rgb(135, 205, 236));
  box14.display();
  box14.score();
  box15.display();
  box15.score();
  box16.display();
  box16.score();
  box17.display();
  box17.score();
  box18.display();
  box18.score();

  fill("lightGreen");
  box19.display();
  box19.score();
  
  box20.display();
  box20.score();
  box21.display();
  box21.score();

  fill("lime");
  box22.display();
  box22.score();

  ground1.display();
  ground2.display();
  ground3.display();

  imageMode(CENTER);
  image(img,ball.position.x,ball.position.y,40,40);

  rope.display();
  text("Score:"+score,750,40);
}


function mouseDragged()
{
  Matter.Body.setPosition(this.ball, {x: mouseX , y: mouseY});
}


function mouseReleased()
{
  rope.fly();
}

function keyPressed()
{
	if(keyCode === 32)
	{
	 rope.attach(this.ball);
	}
}

async function getBackgroundImg() 
{
  var response = await fetch("https://worldtimeapi.org/api/timezone/Asia/Kolkata");
  var responseJSON = await response.json();
  var date = responseJSON.datetime;
  var hour = date.slice(11, 13);
  if(hour>=06 && hour<=19){
      bg = "bg.jpg"
  } else {
      bg = "bgnight.jpg"
  }
  backgroundImg = loadImage(bg);
  console.log(backgroundImg);
}

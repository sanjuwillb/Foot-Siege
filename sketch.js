const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world;
var holder,ball,ground;
var stand1,stand2;
var polygon;
var slingshot;
var polygon_img, i
function preload(){
  polygon_img=loadImage("polygon.png");
}
function setup() {
  i = 0
  createCanvas(900,400);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
  ground = new Ground();
  stand1 = new Stand(390,300,250,10);
  stand2 = new Stand(700,200,200,10);
  polygon = Bodies.circle(150,200,20)
  World.add(world,polygon)
  slingshot = new Slingshot(this.polygon,{x:150,y:200})
  //level one
  block1 = new Block(300,275,30,40);
  block2 = new Block(330,275,30,40);
  block3 = new Block(360,275,30,40);
  block4 = new Block(390,275,30,40);
  block5 = new Block(420,275,30,40);
  block6 = new Block(450,275,30,40);
  block7 = new Block(480,275,30,40);
  //level two
  block8 = new Block(330,235,30,40);
  block9 = new Block(360,235,30,40);
  block10 = new Block(390,235,30,40);
  block11 = new Block(420,235,30,40);
  block12 = new Block(450,235,30,40);
  black1 = new Block(635,170,30,40);
  black2 = new Block(665,170,30,40);
  black3 = new Block(695,170,30,40);
  black4 = new Block(725,170,30,40);
  black5 = new Block(755,170,30,40);
  //level three
  block13 = new Block(360,195,30,40);
  block14 = new Block(390,195,30,40);
  block15 = new Block(420,195,30,40);
  black6 = new Block(665,130,30,40);
  black7 = new Block(695,130,30,40);
  black8 = new Block(725,130,30,40);
  //top
  block16 = new Block(390,155,30,40);
  black9 = new Block(695,90,30,40);
}
function draw() {
  background("black"); 
  textSize(20);
  fill(200);
  text("Pull the foot and let it go to launch. Press space to recall your trusty foot.",120,50)
  imageMode(CENTER)
  image(polygon_img,polygon.position.x,polygon.position.y,40,40)
  ground.display();
  stand1.display();
  stand2.display()
  slingshot.display()
  strokeWeight(2);
  stroke(15);
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  black1.display();
  black2.display();
  black3.display();
  black4.display();
  black5.display();
  block13.display();
  block14.display();
  block15.display();
  black6.display()
  black7.display()
  black8.display()
  block16.display();
  black9.display();
}
function mouseDragged(){
  if (i === 0){
    if (mouseX < 260){
      Matter.Body.setPosition(this.polygon, {x: mouseX , y: mouseY});
      block1.cheese();
      block2.cheese();
      block3.cheese();
      block4.cheese();
      block5.cheese();
      block6.cheese();
      block7.cheese();
      block8.cheese();
      block9.cheese();
      block10.cheese();
      block11.cheese();
      block12.cheese();
      black1.cheese();
      black2.cheese();
      black3.cheese();
      black4.cheese();
      black5.cheese();
      block13.cheese();
      block14.cheese();
      block15.cheese();
      black6.cheese()
      black7.cheese()
      black8.cheese()
      block16.cheese();
      black9.cheese();
    }
  }
}
function mouseReleased(){
  slingshot.fly()
  i = 1
  black9.chicken()
}
function keyPressed(){
  if (keyCode === 32){
    polygon = Bodies.circle(150,200,15)
    World.add(world,polygon)
    slingshot = new Slingshot(this.polygon,{x:150,y:200})
    i = 0
  }
}
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var guy,guyimg
var ground
var bgImag
var raindrop=[];
var mdrops=200



function preload(){
 guyimg = loadImage("10.png")
 bgImg= loadImage("bg.jpg")
}


function setup(){
   createCanvas(500,windowHeight)
   engine = Engine.create();
    world = engine.world;

   guy = Bodies.rectangle(260,500,235,390,{'isStatic': true})
   World.add(world,guy);
   

   ground = new Ground(600,700,1200,2);
   if(frameCount%80===0){
  for(var i=0;i<mdrops;i++){
   raindrop.push(new Raindrops(200,5,7))

  }
   }
   
}


function draw(){
    Engine.update(engine);
    background(bgImg)
    imageMode(CENTER)
    image(guyimg,guy.position.x,guy.position.y, 235,390)
    ground.display()
    

   for(var i=0;i<mdrops;i++){
 raindrop[i].display() 
 raindrop[i].update()
   }

    
}   



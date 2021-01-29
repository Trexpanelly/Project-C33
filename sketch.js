const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var particles = [];
var plinkos = [];
var divisions = [];
var divisionHeight = 300;

function setup() {
  engine = Engine.create();
  world = engine.world;
  createCanvas(480,800);
  
  ground = new Ground (240, 795, 480, 10);

 for(var k = 0; k <= width; k = k + 80){
    divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
  }

  for(var l = 40; l <= width; l=l + 50){
    plinkos.push(new Plinko(l, 75));
  }

  for(var l = 15; l<= width - 10; l=l+50){
    plinkos.push(new Plinko(l, 175));
  }

  for(var l = 40; l<= width; l = l + 50){
    plinkos.push(new Plinko(l, 275));
  }
  for(var l = 15; l<= width; l = l + 50){
    plinkos.push(new Plinko(l, 375));
  } 

 

}

function draw() {
  Engine.update(engine);
  background(0);  
  
  ground.display();

  if(frameCount%60===0){
    particles.push(new Particle(random(width/2 - 10, width/2 + 10), 10, 10));
  }

  for (var j = 0; j < particles.length; j++){
    particles[j].display();
  }
  
  for (var i = 0; i < divisions.length; i++){
    divisions[i].display();
  }
  for(var h = 0; h < plinkos.length; h++){
    plinkos[h].display();
  }
}
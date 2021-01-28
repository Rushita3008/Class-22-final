const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies

var engine, world;
var ground, ball, box;

function setup() {
    createCanvas(400,400);

    engine = Engine.create();
    world = engine.world;

    var options = {
        isStatic: true
    }

    ground = Bodies.rectangle(200,390,200,20, options)
    World.add(world,ground);

    var ball_options = {

        restitution: 1.0 

    }

    ball = Bodies.circle(200, 100, 20, ball_options);
    World.add(world, ball);

    var box_options = {

        restitution: 1.0

    }

    box = Bodies.rectangle(100, 100, 50, 50, box_options);
    World.add(world, box);

  }
  
function draw() {
    background(0);  
    
    Engine.update(engine);


    rectMode(CENTER)
    rect(ground.position.x,ground.position.y,400,20)

    ellipseMode(RADIUS)
    ellipse(ball.position.x, ball.position.y, 20, 20);

    rectMode(CENTER)
    rect(box.position.x, box.position.y, 50, 50);

  }
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var divisions = [];
var plinkos= [];
var divisionHeight=250;
var score=0;
var particle;
var count=0;
var gameState = "play";

function setup() {
  createCanvas(480, 800 );
  engine = Engine.create();
  world = engine.world;


  ground= new Ground(0,800,1000,20);

  for (var k = 0; k <=width; k = k + 80) 
  {
    divisions.push(new Block(k, height-divisionHeight/2, 10, divisionHeight));
  }

  for (var j = 75; j <=width; j=j+50) {
    plinkos.push(new Ball(j,75));
 }

 for (var j = 50; j <=width-10; j=j+50) {
     plinkos.push(new Ball(j,175));
 }

 for (var j = 75; j <=width; j=j+50) {
     plinkos.push(new Ball(j,275));
 }

 for (var j = 50; j <=width-10; j=j+50) {
     plinkos.push(new Ball(j,375));
 }
 
/*divisions1 = new Block(0,700,10,200);
divisions2 = new Block(60,700,10,200);
divisions3 = new Block(120,700,10,200);
divisions4 = new Block(180,700,10,200);
divisions5= new Block(240,700,10,200);
divisions6 = new Block(300,700,10,200);
divisions7 = new Block(360,700,10,200);
divisions8 = new Block(420,700,10,200);
divisions9 = new Block(480,700,10,200);*/
 /* ball1= new Ball(400,200,20);
  ball2= new Ball(450,100,20);
  ball3= new Ball(450,300,20);
  ball4= new Ball(400,400,20);
  ball5= new Ball(450,500,20);
  ball6= new Ball(350,100,20);
  ball7= new Ball(300,200,20);
  ball8= new Ball(350,300,20);
  ball9= new Ball(300,400,20);
  ball10= new Ball(350,500,20);
  ball11= new Ball(250,100,20);
  ball12= new Ball(200,200,20);
  ball13= new Ball(250,300,20);
  ball14= new Ball(200,400,20);
  ball15= new Ball(250,500,20);
  ball16= new Ball(150,100,20);
  ball17= new Ball(100,200,20);
  ball18= new Ball(150,300,20);
  ball19= new Ball(100,400,20);
  ball20= new Ball(150,500,20);
  ball21= new Ball(50,100,20);
  ball22= new Ball(0,200,20);
  ball23= new Ball(50,300,20); 
  ball24= new Ball(0,400,20);
  ball25= new Ball(50,500,20);*/

  //line1=createSprite(0,550,500,5); 


}
 
function draw() {
 
  background("black"); 

  textSize(30);
  text("SCORE: "+score,20,50);

  text("200",15,600);
  text("200",95,600);
  text("200",175,600);
  text("200",255,600);
  text("500",335,600);
  text("500",415,600);
  
  Engine.update(engine);
  ground.display();

  if ( gameState =="end") {
    
    textSize(100);
    text("GameOver", 150, 250);
    //return
  }
 
  for (var i = 0; i < plinkos.length; i++) {
    plinkos[i].display();  
 }
    /*if(particle != null){

      particle.display();
      
        if(particle.body.position.y>760)
        {
          if(particle.body.position.x<300 ){
          score=score+200
          particle=null
          if(turn>=5) gameState = "end"

          }
        else if(particle.body.position.x<480 && particle.body.position.x>360){
          score=score+500
          particle=null
          if(turn>=5)gameState = "end"

          }
        }

     }*/
     if(particle!=null)
     {
        particle.display();
         
         if (particle.body.position.y>760)
         {
               if (particle.body.position.x < 300) 
               {
                   score=score+200;      
                   particle=null;
                   if ( count>= 5) gameState ="end";                          
               }
 
 
               else if (particle.body.position.x < 480 && particle.body.position.x > 360 ) 
               {
                     score = score + 500;
                     particle=null;
                     if ( count>= 5) gameState ="end";
 
               }   
               
         }
   
       }
       for(var k=0;k<divisions.length;k++){

        divisions[k].display() ;
         }
    
 //mousePressed();
  //particle.display();
 
  
   /*ball1.display();
   ball2.display();
   ball3.display();
   ball4.display();
   ball5.display();
   ball6.display();
   ball7.display();
   ball8.display();
   ball9.display();
   ball10.display();
   ball11.display();
   ball12.display();
   ball13.display();
   ball14.display();
   ball15.display();
   ball16.display();
   ball17.display();
   ball18.display();
   ball19.display();
   ball20.display();
   ball21.display();
   ball22.display();
   ball23.display();
   ball24.display();
   ball25.display();*/
  // drawSprites();
  }
  
  function mousePressed()
{
  console.log("Mousepress")
  if(gameState!=="end")
  {
      count++;
     particle=new Particles(mouseX, 10, 10,10); 
  }   
}
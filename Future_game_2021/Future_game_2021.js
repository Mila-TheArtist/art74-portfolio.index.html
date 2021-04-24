var img;
var img1;
var img2;
var img3;
var img4;
var ballx = 300;
var bally = 300;
var ballSize = 50;
var score =100;
var gameState= "L1";
var gif_createImg;

function preload(){
  img0 = loadImage('https://raw.githubusercontent.com/Mila-TheArtist/art74-portfolio.index.html/main/images/Infinity_Train_Door.png');
  img11 = loadImage("https://raw.githubusercontent.com/Mila-TheArtist/art74-portfolio.index.html/main/images/exit_door.gif");
  img = loadImage('https://raw.githubusercontent.com/Mila-TheArtist/art74-portfolio.index.html/main/images/Grid_Car.png');
  img1 = loadImage('https://raw.githubusercontent.com/Mila-TheArtist/art74-portfolio.index.html/main/images/Chrome_car.jpeg');
  img2 = loadImage('https://raw.githubusercontent.com/Mila-TheArtist/art74-portfolio.index.html/main/images/Beach_Car.png');
  img3 = loadImage('https://raw.githubusercontent.com/Mila-TheArtist/art74-portfolio.index.html/main/images/Mall_Car.jpeg');
  img4 = loadImage('https://raw.githubusercontent.com/Mila-TheArtist/art74-portfolio.index.html/main/images/Movie_Theater_Car.png');
  img5 = loadImage('https://raw.githubusercontent.com/Mila-TheArtist/art74-portfolio.index.html/main/images/Business_Chart_Car.png');
  img6 = loadImage('https://raw.githubusercontent.com/Mila-TheArtist/art74-portfolio.index.html/main/images/Sand_Dollar_Car.png');
  img7 = loadImage('https://raw.githubusercontent.com/Mila-TheArtist/art74-portfolio.index.html/main/images/Pencil_Bank_Car.png');
  img8 = loadImage('https://raw.githubusercontent.com/Mila-TheArtist/art74-portfolio.index.html/main/images/The_Debutante_Ball_Car_Background.jpeg');
  img9 = loadImage('https://raw.githubusercontent.com/Mila-TheArtist/art74-portfolio.index.html/main/images/Green_Car.PNG.png');
}

function setup() {
  createCanvas(1200, 700);
  textAlign(CENTER);
  textSize(20);
} // end setup


function draw() {
  background(img, 800, 800);
  if (gameState=="L1"){
  levelOne();
  } 
  if (gameState=="L2"){
   levelTwo(); 
  }
  if (gameState=="L3"){
   levelThree(); 
  }
  if (gameState=="L4"){
    levelFour();
  }
  if (gameState=="L5"){
     levelFive();
  }
  if (gameState=="L6"){
     levelSix();
  }
  if (gameState=="L7"){
     levelSeven();
  }
  if (gameState=="L8"){
     levelEight();
  }
  if (gameState=="L9"){
     levelNine();
  }
  if (gameState=="L10"){
     levelTen();
  }
  if (gameState=="L11"){
     lastLevel();
  }
  text(("Score: " + score), width/2, 40);
  

} // end draw


function levelOne(){
  text("Level 1", width/2, height-20);
  var distToBall= dist(ballx, bally, mouseX, mouseY);
  if (distToBall <ballSize/2){
    ballx = random(width);
    bally= random(height);
    score= score -1;
  }
  if(score<90){
// call level 2
 // fill(random(255));
 gameState= "L2";
  }
  
  line(ballx, bally, mouseX, mouseY);
  image(img0, ballx, bally, 100, 200);
  
} // end level one

function levelTwo(){
  background(img1, 800, 800);
  text("Level 2", width/2, height-20);
  var distToBall= dist(ballx, bally, mouseX, mouseY);
  if (distToBall <ballSize/2){
    ballx = random(width);
    bally= random(height);
    score= score -1;
  }
  if(score<80){
// level 3
   gameState = "L3";

  }
  
  line(ballx, bally, mouseX, mouseY);
  image(img0, ballx, bally, 100, 200);
} // end level two

function levelThree(){
    background(img2, 800, 800);
  text("Level 3", width/2, height-20);
  var distToBall= dist(ballx, bally, mouseX, mouseY);
  if (distToBall <ballSize/2){
    ballx = random(width);
    bally= random(height);
    score= score -1;
  }
  if(score<70){
// level 4
 gameState = "L4";
   

  }
  
  line(ballx, bally, mouseX, mouseY);
  image(img0, ballx, bally, 100, 200);
} // end level three

function levelFour(){
   background(img3, 800, 800);
   text(("Score: " + score), width/2, 40);
   text("Level 4", width/2, height-20);
   var distToBall= dist(ballx, bally, mouseX, mouseY);
  if (distToBall <ballSize/2){
    ballx = random(width);
    bally= random(height);
    score= score -1;
   }
   if(score<60){
//level 5
gameState = "L5";


   }
   
   line(ballx, bally, mouseX, mouseY);
 image(img0, ballx, bally, 100, 200);
 } // end level four

function levelFive(){
    background(img4, 800, 800);
  text("Level 5", width/2, height-20);
  var distToBall= dist(ballx, bally, mouseX, mouseY);
  if (distToBall <ballSize/2){
    ballx = random(width);
    bally= random(height);
    score= score -1;
  }
  if(score<50){
// level 6
 gameState = "L6";
   

  }
  
  line(ballx, bally, mouseX, mouseY);
  image(img0, ballx, bally, 100, 200);
} //end level 5

function levelSix(){
    background(img5, 800, 800);
  text("Level 6", width/2, height-20);
  var distToBall= dist(ballx, bally, mouseX, mouseY);
  if (distToBall <ballSize/2){
    ballx = random(width);
    bally= random(height);
    score= score -1;
  }
  if(score<40){
// level 7
 gameState = "L7";
   

  }
  
  line(ballx, bally, mouseX, mouseY);
  image(img0, ballx, bally, 100, 200);
} //end level 6

function levelSeven(){
    background(img6, 800, 800);
  text("Level 7", width/2, height-20);
  var distToBall= dist(ballx, bally, mouseX, mouseY);
  if (distToBall <ballSize/2){
    ballx = random(width);
    bally= random(height);
    score= score -1;
  }
  if(score<30){
// level 8
 gameState = "L8";
   

  }
  
  line(ballx, bally, mouseX, mouseY);
  image(img0, ballx, bally, 100, 200);
} //end level 7

function levelEight(){
    background(img7, 800, 800);
  text("Level 8", width/2, height-20);
  var distToBall= dist(ballx, bally, mouseX, mouseY);
  if (distToBall <ballSize/2){
    ballx = random(width);
    bally= random(height);
    score= score -1;
  }
  if(score<20){
// level 9
 gameState = "L9";
   

  }
  
  line(ballx, bally, mouseX, mouseY);
  image(img0, ballx, bally, 100, 200);
} //end level 8

function levelNine(){
    background(img8, 800, 800);
  text("Level 9", width/2, height-20);
  var distToBall= dist(ballx, bally, mouseX, mouseY);
  if (distToBall <ballSize/2){
    ballx = random(width);
    bally= random(height);
    score= score -1;
  }
  if(score<10){
// level 10
 gameState = "L10";
   

  }
  
  line(ballx, bally, mouseX, mouseY);
  image(img0, ballx, bally, 100, 200);
} //end level 9

function levelTen(){
    background(img9, 800, 800);
  text("Level 10", width/2, height-20);
  var distToBall= dist(ballx, bally, mouseX, mouseY);
  if (distToBall <ballSize/2){
    ballx = random(width);
    bally= random(height);
    score= score -1;
  }
  if(score<0){
// last level
  gameState = "L11";
  
  }
  
  line(ballx, bally, mouseX, mouseY);
  image(img0, ballx, bally, 100, 200);
} //end level 10

function lastLevel(){
  background(img11, 200, 200);
  text("Congratulations, you got your exit!", width/2, height-50);
}

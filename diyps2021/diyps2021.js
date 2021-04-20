var img;
var img1;
var img2;
var img3;
var img4;
var img5;
var img6;
var img7;
var img8;
var img9;
var img0;
var initials ='jm'; // your initials
var choice = '1'; // starting choice, so it is not empty
var screenbg = 250; // off white background
var lastscreenshot=61; // last screenshot never taken

function preload() {
// preload() runs once, it may make you wait
//  img = loadImage('cat.jpg');  // cat.jpg needs to be next to this .js file
// you can link to an image on your github account
   img = loadImage('https://raw.githubusercontent.com/Mila-TheArtist/art74-portfolio.index.html/main/images/infinity_train2.jpeg');
   img1 = loadImage('https://raw.githubusercontent.com/Mila-TheArtist/art74-portfolio.index.html/main/images/infinity_train4.jpeg');
   img2 = loadImage('https://raw.githubusercontent.com/Mila-TheArtist/art74-portfolio.index.html/main/images/gf.jpg');
   img3 = loadImage('https://raw.githubusercontent.com/Mila-TheArtist/art74-portfolio.index.html/main/images/steven-universe-future-117044.jpeg');
   img4 = loadImage('https://raw.githubusercontent.com/Mila-TheArtist/art74-portfolio.index.html/main/images/bh6.jpg');
   img5 = loadImage('https://raw.githubusercontent.com/Mila-TheArtist/art74-portfolio.index.html/main/images/svtfoe.jpg');
   img6 = loadImage('https://raw.githubusercontent.com/Mila-TheArtist/art74-portfolio.index.html/main/images/obsidian.jpeg');
   img7 = loadImage('https://raw.githubusercontent.com/Mila-TheArtist/art74-portfolio.index.html/main/images/regular_show.jpg');
   img8 = loadImage('https://m.media-amazon.com/images/M/MV5BNTA2NTc5MzQwNV5BMl5BanBnXkFtZTgwOTY2ODI2MjI@._V1_.jpg');
   img9 = loadImage('https://pbs.twimg.com/media/EC7l7dRX4AEQSb6.jpg');
   img0 = loadImage('https://m.media-amazon.com/images/M/MV5BOGQ0MDQyYWMtNjdlYy00ZDAyLWE5YTItMzcyMjllZTA4MTcyXkEyXkFqcGdeQXVyMjEzNTg5Mzk@._V1_.jpg');
}


function setup() {
createCanvas(800, 700);  // canvas size
background(screenbg);   // use our background screen color

}

function draw() {
  if (keyIsPressed) {
    choice = key; // set choice to the key that was pressed
    clear_print(); // check to see if it is clear screen or save image
  }
  if (mouseIsPressed){
    newkeyChoice(choice);  // if the mouse is pressed call newkeyChoice
  }
}

function newkeyChoice(toolChoice) { //toolchoice is the key that was pressed
  // the key mapping if statements that you can change to do anything you want.
  // just make sure each key option has the a stroke or fill and then what type of 
  // graphic function

 if (toolChoice == '1' ) {  // first tool
   
    noStroke();
    line(mouseX, mouseY, pmouseX, pmouseY);
    image(img1, mouseX-20, mouseY-20, 230, 270);
  } else if (toolChoice == '2') { // second tool

    noStroke();
    line(mouseX, mouseY, pmouseX, pmouseY);
    image(img2, mouseX-20, mouseY-20, 230, 270);
  } else if (toolChoice == '3') { // third tool

    noStroke();
    line(mouseX, mouseY, pmouseX, pmouseY);
    image(img3, mouseX-20, mouseY-20, 310, 180);
  } else if (toolChoice == '4') {

    noStroke();
    line(mouseX, mouseY, pmouseX, pmouseY);
    image(img4, mouseX-20, mouseY-20, 310, 180);
  } else if (key == '5') { // this tool calls a function
    
    noStroke();
    line(mouseX, mouseY, pmouseX, pmouseY);
    image(img5, mouseX-20, mouseY-20, 230, 270);
 //   line(mouseX, mouseY, pmouseX, pmouseY);
  } else if (toolChoice == '6') {

    noStroke();
    line(mouseX, mouseY, pmouseX, pmouseY);
    image(img6, mouseX-20, mouseY-20, 230, 270);
  } else if (toolChoice == '7') {

    noStroke();
    line(mouseX, mouseY, pmouseX, pmouseY);
    image(img7, mouseX-20, mouseY-20, 230, 270);
  } else if (toolChoice == '8') {

    noStroke();
    line(mouseX, mouseY, pmouseX, pmouseY);
    image(img8, mouseX-20, mouseY-20, 230, 270);
  } else if (toolChoice == '9') {
    
    noStroke();
    line(mouseX, mouseY, pmouseX, pmouseY);
    image(img9, mouseX-20, mouseY-20, 230, 270);
  } else if (toolChoice == '0') {
    
    noStroke();
    line(mouseX, mouseY, pmouseX, pmouseY);
    image(img0, mouseX-20, mouseY-20, 230, 270);
  } else if (toolChoice == 'i' || toolChoice == 'I') { // g places the image we pre-loaded
    image(img, mouseX, mouseY, 230, 270);
    
  }
 }
 
function testbox(r, g, b) {
// this is a test function that will show you how you can put your own functions into the sketch
  x = mouseX;
  y = mouseY;
  fill(r, g, b);
  rect(x-50, y-50, 100, 100);

}

function clear_print() {
// this will do one of two things, x clears the screen by resetting the background
// p calls the routine saveme, which saves a copy of the screen
  if (key == 'x' || key == 'X') {
    background(screenbg); // set the screen back to the background color
  } else if (key == 'p' || key == 'P') {
     saveme();  // call saveme which saves an image of the screen
  }
}

function saveme(){
    //this will save the name as the intials, date, time and a millis counting number.
    // it will always be larger in value then the last one.
  filename=initials+day() + hour() + minute() +second();
  if (second()!=lastscreenshot) { // don't take a screenshot if you just took one
    saveCanvas(filename, 'jpg');
  }
  lastscreenshot=second(); // set this to the current second so no more than one per second
  
}


var r = 0;
var g = 50;
var b=255;

function setup(){
  //create the canvas
  createCanvas(1200,400);
}


function draw(){

  // Remember to fill the canvas with white paint before creating the ellipse.
  //background color
  background("white");

  // change the value of Red based on the mouse movement about the X axis
  let r = map(mouseX,0,width,0,255);

  // change the value of Green based on the mouse movement about the X axis
  let g = map(mouseX,0,width,0,255);

  // change the value of Blue based on the mouse movement about the X axis
  let b = map(mouseX,0,width,0,255);

  // Pass the values to the background() function 
  background(r,g,b);
  
  // Create an ellipse that will move around with you mouse about the X axis.
  ellipse(mouseX,300,50,50);
}
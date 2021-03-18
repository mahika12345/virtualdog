//Create variables here
var pet;
var position,database;
var food,happydog,dog,foodstock;

var happydog="happydog.png";
var dog = "dog.png";

function changePosition(x,y){
    database.ref("pet/position") .set({
        x:position.x+x,
        y:position.y+y
    })
}
function readposition(data){
    position=data.val();
    pet.x=position.x;
    pet.y=position.y;

}
function preload()
{
  dog.png();
  happydog.png();

	//load images here
}

function setup() {
	createCanvas(500, 500);
    database=firebase.database();
    pet= createSprite(250,250,10,10);
    pet.shapeColor = "red";
    var petref = database.ref("pet/position");
    petref.on("value",readposition);
}



function draw() {  
  background("white");
  if(keyDown(LEFT_ARROW)){
      changePosition(-1,0);
  }
  else if(keyDown(RIGHT_ARROW)){
      changePosition(1,0);
  }
  else if(keyDown(UP_ARROW)){
      changePosition(0,-1);
  }
  else if(keyDown(DOWN_ARROW)){
      changePosition(0,+1);
  }
  drawSprites();
  
  //add styles here

}




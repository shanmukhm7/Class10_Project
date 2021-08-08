var sea
var ship
var seaImg
var shipImg

function preload() {
  seaImg = loadImage("sea.png")
  shipImg1 = loadAnimation("shipOne.png","shipTwo.png","shipThree.png","shipFour.png")
}

function setup() {
  createCanvas(400,400) 
  sea = createSprite(400,250)
  sea.addImage(seaImg)
  sea.velocityX = -5
  sea.scale= 0.5
  //I removed background because I felt like it didn't do anything"
  
  ship = createSprite(100,250,30,30)
  ship.addAnimation("moving",shipImg1)
  ship.scale = 0.2
  
}

function draw() {
  sea.velocityX = -4  
  if(sea.x < 0){
    sea.x = sea.width/8
  }
  drawSprites()
}
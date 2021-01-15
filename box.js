class Box
{
 constructor(x,y,width,height,angle)
 {
  var options =
  {
   restitution:0.7,
   friction:0.6,
   isStatic:false,
  } 
  
  this.body = Bodies.rectangle(x,y,width,height,angle,options);
  this.width = width;
  this.height = height;
  this.visibility = 255
  World.add(world,this.body);
 }  
 
 display()
 {
  if(this.body.speed<3)
  {
    push();
    translate(this.body.position.x, this.body.position.y);
    rectMode(CENTER);
    fill(995,95,19);
    rect(0, 0, this.width, this.height);
    pop();
  }
  else
  {
    World.remove(world,this.body);
    push();
    this.visibility = this.visibility-5;
    tint(255,this.visibility);
    pop();    
  }
 }

 score()
 {
  if(this.visibility<0 && this.visibility>-105)
  {
   score = score+1;
  }
 }
}
 

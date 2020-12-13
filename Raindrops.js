class Raindrops{
    constructor(x, y, radius) {
        var options = {
            'restitution':0,
            'friction':1.0,
            'density':1.0,
            
        }
        this.radius = radius
        this.body = Bodies.circle(x, y, radius, options);
       this.color=color("white")
        World.add(world, this.body);
      }
      display(){
       
        fill(this.color)
       circle(this.body.position.x,this.body.position.y,this.radius);
        
      }
      update(){
        if(this.body.position.y<height){
        Matter.Body.setPosition(this.body,{x:random(0,width),y:random(0,height)})
        }
      }
}
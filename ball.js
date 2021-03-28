class Hitter{
    constructor(x,y){
        var option = {
           isStatic : false,
           restitution : 0.3,
           friction : 0.5,
           density:1.2,
        }
        this.hit=Bodies.circle(x,y,25,option);
        this.r=25
        World.add(world,this.hit);
    }
    display(){
        ellipseMode(RADIUS)
        var pos= this.hit.position;
        ellipse(pos.x,pos.y,this.r,this.r);
        
    }
    
    
}
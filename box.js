class Box{
    constructor(x,y){
        this.bodies=Bodies.rectangle(x,y,20,20)
        World.add(world,this.bodies)
        this.width=20
        this.height=20
    }
    display(){
        rectMode(CENTER);
        rect(this.bodies.position.x,this.bodies.position.y,this.width,this.height)
    }
}

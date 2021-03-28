class Ground{
    constructor(x,y,width,height){
        var o = {
            isStatic: true
        }
        this.body=Bodies.rectangle(x,y,width,height,o);
        this.width=width;
        this.height=height;
        World.add(world, this.body);
    }
    display(){
        var pos = this.body.position;
        rectMode(CENTER)
        fill("black")
        rect(pos.x,pos.y,this.width,this.height);
    }
}
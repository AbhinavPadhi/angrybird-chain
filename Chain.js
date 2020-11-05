class Chain
{
    constructor(bodyA, bodyB)
    {
        var options={
            bodyA: bodyA,
            bodyB:bodyB,
            stiffness:0,
            length:5,
        }

        // this.widht=width
        this.chain = Constraint.create(options);
        World.add(world, this.chain);
    }

    display()
    {
        var p1 = this.chain.bodyA.position;
        var p2 = this.chain.bodyB.position;
         
    line(p1.x,p1.y,p2.x,p2.y);
    }
}

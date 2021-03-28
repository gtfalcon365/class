class stone
{
	constructor(x,y,width,height)
	{
		var options={
			isStatic:true,
			restitution:0,
			friction:1,
			density:1.2
			}
		this.x=x;
		this.y=y;
		this.width=width
		this.height=height
		
		this.body=Bodies.circle(this.x, this.y, this.r/2, options)
		World.add(world, this.body);

	}
	display()
	{
			var stonepos=this.body.position;		
			push()
			translate(stonepos.x, stonepos.y);
			// rectMode(CENTER)
			// rotate(this.body.angle)
			
			imageMode(CENTER);
			rectMode(RADIUS)
			rect( 0,0,this.width, height)
		pop()
	}
}
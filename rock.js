class rock
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
		this.image=loadImage("images/rock.png")
		this.body=Bodies.rectangle(this.x, this.y, this.width,this.height, options)
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
			imageMode(RADIUS)
			image( this.image,0,0,this.width+150, this.height+500)
		pop()
	}
}
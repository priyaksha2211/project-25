class Paper {
	constructor(x, y,r) {

		this.x = x;
		this.y = y;
		this.r = r;

	  var options = {
		  isStatic:false,
		  restitution:0.3,
		  density:1.2,
		  friction:0
	  }
	  this.image = loadImage("paper.png");
	  this.body = Bodies.circle(this.x,this.y, this.r/2.7, options);
	   World.add(world, this.body);
	}
	display(){
	Engine.update(engine);
	  push();
	   translate(this.body.position.x,this.body.position.y);
	  imageMode(CENTER);
	  image(this.image, 0, 0, this.r,this.r);
	  pop();
	}
  }


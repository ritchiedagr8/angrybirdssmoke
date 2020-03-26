class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
    this.imageS= loadImage("sprites/smoke.png");
    this.feliksZ = [] 
  }

  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;
    super.display();
    if (this.body.position.x > 220 && this.body.speed>20) {
    var Bpos = [this.body.position.x,this.body.position.y]
    this.feliksZ.push(Bpos)
    }
    for(var BB = 0;BB<this.feliksZ.length;BB = BB + 1) {

      image(this.imageS,this.feliksZ[BB][0],this.feliksZ[BB][1])
    }
  }
}

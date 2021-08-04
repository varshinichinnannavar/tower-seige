class Block{
    constructor(x, y, width, height) {
        var options = {
            restitution :0.4,
            friction :0.0,
            isStatic : false
        }
        
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.visiblity=255
         this.image= loadImage("block.png")
        World.add(world, this.body);
      }

      display(){

        var pos= this.body.position;
        imageMode(CENTER);

        if(this.body.speed <3){
          image(this.image,pos.x,pos.y,this.width, this.height);
          var angle=this.body.angle;
          var pos=this.body.position;
          push();
          translate(pos.x,pos.y);
          rotate(angle);
          rectMode(CENTER);
          rect(0,0,this.width,this,height);
          pop();
        }
        else{

          World.remove(world, this.body);
          push();
          this.visiblity = this.visiblity - 5;
          pop();
          
          tint(255,this.visiblity);
          image(this.image, this.body.position.x, this.body.position.y,this.width, this.height);
          pop();
        }
         
      }
          
    }   
         
       


        

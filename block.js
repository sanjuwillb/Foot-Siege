var n = 0,m = 0, l = 0
class Block{
    constructor(x, y, width, height) {
        var options = {
          'restitution':0,
          'friction':0,
          'density':0.1
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.Visibility = 255
        this.image = loadImage("block.png")
        World.add(world, this.body);
      }
      cheese(){
        n = 1
      }
      chicken(){
        m = m + 1
        x = 1
      }
      display(){
        var x = this.body.speed
        if (this.body.speed<0.01 || n === 0){
          var angle = this.body.angle;
          var pos= this.body.position;
          push();
          translate(pos.x, pos.y);
          rotate(angle);
          imageMode(CENTER);
          image(this.image,0,0,30,40)
          //rect(0,0,this.width, this.height);
          pop();
        }
        else{
          World.remove(world, this.body);
          push()
          this.Visibility = this.Visibility-20
          tint(255,this.Visibility)
          imageMode(CENTER);
          image(this.image,this.body.position.x,this.body.position.y,30,40)
          pop()
          if (this.Visibility < 0){
            if (x > 0.01){
              l = l + 1
              this.body.speed = 0.01
            }
          }
          if (l > 24){
            textSize(25)
            text("You won in "+m+" shots",320,200)
          }
         }
        }
       }
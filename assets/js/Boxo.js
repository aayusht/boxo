function Boxo() {
  this.x = width/2;
  this.y = height/2;

  this.show = function() {
    rect(this.x, this.y, 20, 20)
  }
}

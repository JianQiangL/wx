(function (w) {
  function Land(ctx, oImg, iSpeed) {
    Land.len++;
    this.ctx = ctx;
    this.img = oImg;
    this.speed = iSpeed || 2;
    this.width = oImg.width;
    this.height = oImg.height;

    this.x = this.width * (Land.len - 1);
    this.y = this.ctx.canvas.height - this.height;
  }

  Land.len = 0;

  Land.prototype = {
    constructor: Land,

    draw: function () {
      this.ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    },

    update: function () {
      this.x -= this.speed;
      if (this.x <= -this.width) {
        this.x = this.width * (Land.len - 1);
      }
    }

  }
  w.getLand = function (ctx, oImg, iSpeed) {
    return new Land(ctx, oImg, iSpeed);
  }
})(GameGlobal)


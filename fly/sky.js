(function (w) {
  function Sky(ctx, oImg, iSpeed) {
    //每创建一个实例Sky.len自增
    Sky.len++;
    this.ctx = ctx;
    this.img = oImg;
    this.speed = iSpeed || 2;
    this.width = oImg.width;
    this.height = oImg.height;
    this.x = this.width * (Sky.len - 1);
    this.y = 0;
  }

  // 背景实例的个数
  Sky.len = 0;

  Sky.prototype = {
    constructor: Sky,

    draw: function () {  //绘制背景

      this.ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    },

    update: function () { //更新位置
      this.x -= this.speed;
      //console.log(Sky.len);
      if (this.x <= -this.width) {
        this.x = this.width * (Sky.len - 1);
      }
    }

  }
  w.getSky = function (ctx, oImg, iSpeed) {
    return new Sky(ctx, oImg, iSpeed);
  }
})(GameGlobal);
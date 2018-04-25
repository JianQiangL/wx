(function (w) {
  function Pipe(ctx, imgUp, imgDown, iLandHeight, iSpace, iSpeed) {
    Pipe.len++;
    this.ctx = ctx;
    this.imgUp = imgUp;
    this.imgDown = imgDown;
    this.landHeight = iLandHeight;
    this.space = iSpace;
    this.speed = iSpeed || 2;
    this.width = this.imgUp.width;
    this.height = this.imgUp.height;
    this.x = 300 + this.width * 3.5 * (Pipe.len - 1);
    this.minHeight = 50;
    //150   (600 - 150 -112 -100)最大高度
    this._init();
  }

  Pipe.len = 0;

  Pipe.prototype = {
    constructor: Pipe,

    _init: function () {
      this.maxHeight = this.ctx.canvas.height - this.space - this.landHeight - this.minHeight;
      //上边管子的高度
      this.downHeight = this.getRandom(this.maxHeight, this.minHeight);
      //上边管子的y轴坐标
      this.downY = this.downHeight - this.height;
      //下边管子的y轴坐标
      this.upY = this.downHeight + this.space;
    },

    getRandom: function (num1, num2) {
      return Math.floor(Math.random() * (num1 - num2)) + num2;
    },

    draw: function () {
      this.ctx.save();
      this.ctx.drawImage(this.imgDown, this.x, this.downY, this.width, this.height);
      this.ctx.drawImage(this.imgUp, this.x, this.upY, this.width, this.height);
      this.drawPath();
      this.ctx.restore();
    },

    drawPath: function () {
      this.ctx.rect(this.x, this.downY, this.width, this.height);
      this.ctx.rect(this.x, this.upY, this.width, this.height);
      this.ctx.strokeStyle = "blue";
      // this.ctx.stroke();
    },

    update: function () {
      this.x -= this.speed;
      if (this.x <= -this.width) {
        this._init();//重新绘制y轴坐标
        this.x = this.width * 3.5 * Pipe.len - this.width;
      }
    }
  }
  w.getPipe = function (ctx, imgUp, imgDown, iLandHeight, iSpace, iSpeed) {
    return new Pipe(ctx, imgUp, imgDown, iLandHeight, iSpace, iSpeed);
  }
})(GameGlobal);

(function (w) {
  function Bird(ctx, oImg, wFps, hFps, x, y) {
    this.ctx = ctx;
    this.img = oImg;
    //横向图片帧数
    this.wFps = wFps;
    //纵向图片帧数
    this.hFps = hFps;
    //横向当前帧数
    this.fps = 0;
    //没有纵向帧我们就不定义纵向档期帧数

    //鸟图片单帧宽高
    this.width = this.img.width / this.wFps;
    this.height = this.img.height;
    this.x = x;
    this.y = y;
    //y轴下落速度初始值
    this.speed = 2;
    //y轴下落加速度
    this.speedPlus = 0.5;


  }

  Bird.prototype = {
    constructor: Bird,

    draw: function () {
      //确定最小偏转角度 : 速度为1时的偏转角度
      var baseAngle = 10 * Math.PI / 180;
      //再写个偏转最大值45
      var maxAngle = 45 * Math.PI / 180;

      var birdAngle = baseAngle * this.speed;

      if (birdAngle > maxAngle) {
        birdAngle = maxAngle;
      }

      this.ctx.save();

      this.ctx.translate(this.x + this.width / 2, this.y + this.height / 2);
      //console.log(birdAngle);
      this.ctx.rotate(birdAngle);

      this.ctx.drawImage(this.img, this.width * this.fps, 0, this.width, this.height, -this.width / 2, -this.height / 2, this.width, this.height);
      // this.ctx.strokeRect(-this.width/2, -this.height/2, this.width, this.height);

      this.ctx.restore();
    },

    update: function () {
      this.fps++;
      if (this.fps === this.wFps) {
        this.fps = 0
      }
      this.y += this.speed;
      this.speed += this.speedPlus;
      this._bindEvent();
    },

    _bindEvent: function () {
      var _this = this;
      _this.ctx.canvas.onclick = function () {
        _this.speed = -5;
      }
    }

  }
  var bird = null;
  w.getBird = function (ctx, oImg, wFps, hFps, x, y) {
    //鸟实例全局唯一
    if (!bird) {
      bird = new Bird(ctx, oImg, wFps, hFps, x, y);
    }
    return bird;
  }
})(GameGlobal);


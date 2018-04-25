(function (w) {
  function Scene(ctx, imgObj) {
    this.ctx = ctx;
    this.imgObj = imgObj;
    this.listener = [];
    this.roles = [];
    this._initRoles();
  }

  Scene.prototype = {
    constructor: Scene,

    _initRoles: function () {
      //两个天空
      for (var i = 0; i < 2; i++) {
        this.roles.push(getSky(this.ctx, this.imgObj.sky, 3));
      }

      //六根管子
      for (var i = 0; i < 6; i++) {
        this.roles.push(getPipe(this.ctx, this.imgObj.pipeUp, this.imgObj.pipeDown, this.imgObj.land.height, 150, 3));
      }

      //四个大地
      for (var i = 0; i < 4; i++) {
        this.roles.push(getLand(this.ctx, this.imgObj.land, 3));
      }

      this.roles.push(getBird(this.ctx, this.imgObj.bird, 3, 1, 10, 10));
    },

    addListen: function (listen) {
      this.listener.push(listen);
    },

    isPointInPath:function(x,y){
      if ( y < this.imgObj.pipeUp || y > this.imgObj.pipeDown){
        this.birdDeath();
      }
    },

    birdDeath: function () {
      this.listener.forEach(function (listen) {
        listen();
      })
    },

    draw: function () {

      var bird = getBird();

      var birdPointX = bird.x + bird.width / 2;
      var birdPointY = bird.y + bird.height / 2;
      if (birdPointY < 0 || birdPointY > this.ctx.canvas.height - this.imgObj.land.height || this.ctx.isPointInPath(birdPointX, birdPointY)) {
        this.birdDeath();
        
      } else {
        this.ctx.beginPath();
        this.roles.forEach(function (role) {
          role.draw();
          role.update();
        })
      }
    }
  }

  w.getScene = function (ctx, imgUrl) {
    return new Scene(ctx, imgUrl);
  }
})(GameGlobal);
(function (w) {
  function GameOver(ctx) {
    this.ctx = ctx;
  }

  GameOver.prototype = {
    constructor: GameOver,

    draw: function () {
      this.ctx.save()
      this.ctx.fillStyle = "rgba(0,0,0,0.5)";
      this.ctx.fillRect(0, 0, 800, 600);
      this.ctx.beginPath();
      this.ctx.font = 'bold 120px "宋体"';
      this.ctx.fillStyle = "rgba(255,255,255,0.5)";
      this.ctx.textAlign = 'center';
      this.ctx.textBaseLine = 'middle';
      this.ctx.fillText("GAME OVER", 400, 300);
      this.ctx.restore();
      
    }
  }
  w.getOver = function (ctx) {
    return new GameOver(ctx);
  }
})(GameGlobal);
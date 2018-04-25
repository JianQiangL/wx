  import "tools.js";
  import "sky.js";
  import "land.js";
  import "pipe.js";
  import "bird.js";
  import "gameOver.js";
  import "gameScene.js";

function auto() {
  var oCanvas = wx.createCanvas();
  var ctx = oCanvas.getContext("2d");

  var imgUrl = {
    sky: 'images/sky.png',
    land: 'images/land.png',
    bird: 'images/bird.png',
    pipeUp: 'images/pipeUp.png',
    pipeDown: 'images/pipeDown.png'
  }

  function fn(imgObj) {
    oCanvas.width = imgObj.sky.width;
    oCanvas.height = imgObj.sky.height;
    var scene = getScene(ctx, imgObj);
    var over = getOver(ctx);

    scene.addListen(function () {
      clearInterval(timer);
      over.draw();
    });


    var timer = setInterval(function () {
      scene.draw();
    }, 30)
  }
  
  imgLoaded(imgUrl, fn)

  function imgLoaded(imgUrl, fn) {
    var imgObj = {};
    var oTmepImg = null;
    var loadedNum = 0;
    var imgNum = 0;

    for (var k in imgUrl) {
      imgNum++;

      oTmepImg = wx.createImage();
      oTmepImg.src = imgUrl[k];
      imgObj[k] = oTmepImg;

      oTmepImg.onload = function () {
        loadedNum++;
        if (loadedNum === imgNum) {
          fn && fn(imgObj);
        }
      }
    }
  }
}
auto()
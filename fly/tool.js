imgUrl={sky:"images/sky.png",land:"images/land.png",pipeDown:"images/pipeDown.png",
    pipeUp:"images/pipeUp.png",bird:"images/bird.png"};
function imgLoaded(imgUel,fn) {
    var imgObj ={};
    var tempImg = null;
    var iLoadNum = iImgNum =0;
    for(var k in imgUrl){
        iImgNum++;
        tempImg = new Image();
        tempImg.src = imgUrl[k];
        imgObj[k] = tempImg;
        // console.log(imgObj);
        tempImg.onload=function () {
            iLoadNum++;
            if(iLoadNum ===iImgNum){
                fn && fn(imgObj)
            }
        }
    }
}
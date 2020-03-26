//家具坐标偏移
var IMGHArr = ["-1em","-1em","-1em","-1em","-1em","-1em","-1em","-1em","-1em","-1em","-1em","-1em","-1em","-1em","-1em","-1em","-1em","-1em","-1em","-1em","-1em","-1em","-1em","-1em","-1em","-1em","-1em","-1em","-1em","-1em","-1em","-1em","-1em","-1em","-1em","-1em","-1em","-1em","-1em","-1em","-1em","-1em","-1em","-1em","-1em","-1em","-1em","-1em","-1em","-2em","-2em","-2em","-2em","-2em","-2em","-2em","-2em","-2em","-2em","-2em","-2em","-2em","-2em","-2em","-2em","-2em","-2em","-2em","-2em","-1em","-1em","-1em","-1em","-1em","-2em","-2em","-2em","-2em","-2em","-2em","-2em","-2em","-2em","-2em","-2em","-2em","0em","0em","0em","0em","0em","0em","-1em","-1em","-1em","-1em","-1em","-1em","-1em","-1em","-1em","-1em","-1em","-1em","-1em","-1em","-1em","-1em","-1em","-1em","-1em","-1em","-1em","-1em","-4em","-2em","-2em","-2em","-2em","-1em","-1em","-1em","-1em","-1em","-1em","0em","0em","-1em","-1em","-1em","-2em","-1em","-1em","-2em","0em","-2em","-1em","-1em","-1em","-4em","-4em","-4em","-4em","-4em","-1em","-2em","-2em","-1em","-1em","-1em","-1em","-1em","-1em","-1em","-1em","-1em","-1em","-1em","-1em","-1em","-3em","-1em","-1em","-2em","-1em","-1em","-1em","-1em","-1em","-1em","-1em","-1em","-1em","-1em","-1em","-1em","-1em","-1em","-1em","-1em","-1em","-1em","-1em","-1em","-1em","-1em","-1em","-1em","-1em","-1em","-1em","-1em","-1em","-1em","-1em","-1em","-1em","-1em","-1em","-1em","-1em","-1em","-1em","-1em","-1em","-1em","-1em","-1em","-1em","-1em","-1em","-1em","-1em","-1em","-1em","-1em","-1em","-1em","-1em","-1em","-1em","-1em","-1em","-1em","-1em","-1em","-1em","-1em","-1em","-1em","-1em","-1em","-1em","-1em","-1em","-1em","-1em"];
//家具Y轴标记
var IMGHsignArr = [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,1,1,1,1,2,2,2,2,2,2,1,1,2,2,2,1,1,1,1,1,1,2,2,2,1,1,1,1,1,1,2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1];
//家具X轴标记
var IMGWsignArr = [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,2,2,2,2,2,2,2,2,2,3,3,3,3,3,3,3,3,2,2,2,2,2,2,5,5,5,5,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,3,2,2,2,2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,3,1,1,1,1,3,3,3,3,3,3,1,1,2,3,2,1,1,1,1,2,1,2,3,3,2,2,2,2,2,2,2,3,1,1,1,1,1,1,1,1,1,1,1,2,2,2,1,2,2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1];
//家具宽度
var IMGWidthArr = ["1em","1em","1em","1em","1em","1em","1em","1em","1em","1em","1em","1em","1em","1em","1em","1em","1em","1em","1em","1em","1em","1em","1em","1em","1em","2em","2em","2em","2em","2em","2em","2em","2em","2em","2em","3em","3em","3em","3em","3em","3em","3em","3em","2em","2em","2em","2em","2em","2em","5em","5em","5em","5em","2em","2em","2em","2em","2em","2em","2em","2em","2em","2em","2em","2em","2em","2em","2em","2em","2em","2em","2em","2em","2em","3em","2em","2em","2em","2em","1em","1em","1em","1em","1em","1em","1em","1em","1em","1em","1em","1em","1em","1em","1em","1em","1em","1em","1em","1em","1em","1em","1em","1em","1em","1em","1em","1em","1em","1em","1em","1em","1em","1em","1em","3em","1em","1em","1em","1em","3em","3em","3em","3em","3em","3em","1em","1em","2em","3em","2em","1em","1em","1em","1em","2em","1em","2em","3em","3em","2em","2em","2em","2em","2em","2em","2em","3em","1em","1em","1em","1em","1em","1em","1em","1em","1em","1em","1em","2em","2em","2em","1em","2em","2em","1em","1em","1em","1em","1em","1em","1em","1em","1em","1em","1em","1em","1em","1em","1em","1em","1em","1em","1em","1em","1em","1em","1em","1em","1em","1em","1em","1em","1em","1em","1em","1em","1em","1em","1em","1em","1em","1em","1em","1em","1em","1em","1em","1em","1em","1em","1em","1em","1em","1em","1em","1em","1em","1em","1em","1em","1em","1em","1em","1em","1em","1em","1em","1em","1em","1em","1em","1em","1em","1em","1em","1em","1em"];
//家具高度
var IMGHeightArr = ["2em","2em","2em","2em","2em","2em","2em","2em","2em","2em","2em","2em","2em","2em","2em","2em","2em","2em","2em","2em","2em","2em","2em","2em","2em","2em","2em","2em","2em","2em","2em","2em","2em","2em","2em","2em","2em","2em","2em","2em","2em","2em","2em","2em","2em","2em","2em","2em","2em","3em","3em","3em","3em","3em","3em","3em","3em","3em","3em","3em","3em","3em","3em","3em","3em","3em","3em","3em","3em","2em","2em","2em","2em","2em","3em","3em","3em","3em","3em","3em","3em","3em","3em","3em","3em","3em","1em","1em","1em","1em","1em","1em","2em","2em","2em","2em","2em","2em","2em","2em","2em","2em","2em","2em","2em","2em","2em","2em","2em","2em","2em","2em","2em","2em","5em","3em","3em","3em","3em","2em","2em","2em","2em","2em","2em","1em","1em","2em","2em","2em","3em","2em","2em","3em","1em","3em","2em","2em","2em","5em","5em","5em","5em","5em","2em","3em","3em","2em","2em","2em","2em","2em","2em","2em","2em","2em","2em","2em","2em","2em","4em","2em","2em","3em","2em","2em","2em","2em","2em","2em","2em","2em","2em","2em","2em","2em","2em","2em","2em","2em","2em","2em","2em","2em","2em","2em","2em","2em","2em","2em","2em","2em","2em","2em","2em","2em","2em","2em","2em","2em","2em","2em","2em","2em","2em","2em","2em","2em","2em","2em","2em","2em","2em","2em","2em","2em","2em","2em","2em","2em","2em","2em","2em","2em","2em","2em","2em","2em","2em","2em","2em","2em","2em","2em","2em","2em","2em"];



//家具坐标偏移（转向）
var IMGHArr1 = ["-1em","-1em","-1em","-1em","-1em","-1em","-1em","-1em","-1em","-1em","-1em","-1em","-1em","-1em","-1em","-1em","-1em","-1em","-1em","-1em","-1em","-1em","-1em","-1em","-1em","-2em","-2em","-2em","-2em","-2em","-1em","-1em","-1em","-1em","-1em","-2em","-2em","-2em","-2em","-2em","-2em","-2em","-2em","-2em","-2em","-2em","-2em","-2em","-2em","-4em","-4em","-4em","-4em","-2em","-2em","-2em","-2em","-2em","-2em","-2em","-2em","-2em","-2em","-2em","-2em","-2em","-2em","-2em","-2em","-1em","-1em","-1em","-1em","-1em","-2em","-2em","-2em","-2em","-2em","-2em","-2em","-2em","-2em","-2em","-2em","-2em","-0em","-0em","-0em","-0em","-0em","-0em","-1em","-1em","-1em","-1em","-1em","-1em","-1em","-1em","-1em","-1em","-1em","-1em","-1em","-1em","-1em","-1em","-1em","-1em","-1em","-1em","-1em","-1em","-4em","-2em","-2em","-2em","-2em","-1em","-1em","-1em","-1em","-1em","-1em","-0em","-0em","-1em","-2em","-1em","-2em","-1em","-1em","-2em","-1em","-2em","-1em","-2em","-2em","-4em","-4em","-4em","-4em","-4em","-1em","-2em","-2em","-1em","-1em","-1em","-1em","-1em","-1em","-1em","-1em","-1em","-1em","-1em","-1em","-1em","-3em","-1em","-1em","-2em","-1em","-1em","-1em","-1em","-1em","-1em","-1em","-1em","-1em","-1em","-1em","-1em","-1em","-1em","-1em","-1em","-1em","-1em","-1em","-1em","-1em","-1em","-1em","-1em","-1em","-1em","-1em","-1em","-1em","-1em","-1em","-1em","-1em","-1em","-1em","-1em","-1em","-1em","-1em","-1em","-1em","-1em","-1em","-1em","-1em","-1em","-1em","-1em","-1em","-1em","-1em","-1em","-1em","-1em","-1em","-1em","-1em","-1em","-1em","-1em","-1em","-1em","-1em","-1em","-1em","-1em","-1em","-1em","-1em","-1em","-1em","-1em","-1em"];
//家具Y轴标记（转向)
var IMGHsignArr1 = [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,2,2,2,2,1,1,1,1,1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,4,4,4,4,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,1,1,1,1,2,2,2,2,2,2,1,1,2,3,2,1,1,1,1,2,1,2,3,3,1,1,1,1,1,1,2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1];
//家具X轴标记（转向)
var IMGWsignArr1 = [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,2,2,2,2,2,2,2,2,2,2,2,2,1,1,1,1,1,1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,3,2,2,2,2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,3,1,1,1,1,3,3,3,3,3,3,1,1,2,2,2,1,1,1,1,1,1,2,2,2,2,2,2,2,2,2,2,3,1,1,1,1,1,1,1,1,1,1,1,2,2,2,1,2,2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1];
//家具宽度（转向)
var IMGWidthArr1 = ["1em","1em","1em","1em","1em","1em","1em","1em","1em","1em","1em","1em","1em","1em","1em","1em","1em","1em","1em","1em","1em","1em","1em","1em","1em","1em","1em","1em","1em","1em","2em","2em","2em","2em","2em","2em","2em","2em","2em","2em","2em","2em","2em","1em","1em","1em","1em","1em","1em","2em","2em","2em","2em","2em","2em","2em","2em","2em","2em","2em","2em","2em","2em","2em","2em","2em","2em","2em","2em","2em","2em","2em","2em","2em","3em","2em","2em","2em","2em","1em","1em","1em","1em","1em","1em","1em","1em","1em","1em","1em","1em","1em","1em","1em","1em","1em","1em","1em","1em","1em","1em","1em","1em","1em","1em","1em","1em","1em","1em","1em","1em","1em","1em","1em","3em","1em","1em","1em","1em","3em","3em","3em","3em","3em","3em","1em","1em","2em","2em","2em","1em","1em","1em","1em","1em","1em","2em","2em","2em","2em","2em","2em","2em","2em","2em","2em","3em","1em","1em","1em","1em","1em","1em","1em","1em","1em","1em","1em","2em","2em","2em","1em","2em","2em","1em","1em","1em","1em","1em","1em","1em","1em","1em","1em","1em","1em","1em","1em","1em","1em","1em","1em","1em","1em","1em","1em","1em","1em","1em","1em","1em","1em","1em","1em","1em","1em","1em","1em","1em","1em","1em","1em","1em","1em","1em","1em","1em","1em","1em","1em","1em","1em","1em","1em","1em","1em","1em","1em","1em","1em","1em","1em","1em","1em","1em","1em","1em","1em","1em","1em","1em","1em","1em","1em","1em","1em","1em"];
//家具高度（转向)
var IMGHeightArr1 = ["2em","2em","2em","2em","2em","2em","2em","2em","2em","2em","2em","2em","2em","2em","2em","2em","2em","2em","2em","2em","2em","2em","2em","2em","2em","3em","3em","3em","3em","3em","2em","2em","2em","2em","2em","3em","3em","3em","3em","3em","3em","3em","3em","3em","3em","3em","3em","3em","3em","5em","5em","5em","5em","3em","3em","3em","3em","3em","3em","3em","3em","3em","3em","3em","3em","3em","3em","3em","3em","2em","2em","2em","2em","2em","3em","3em","3em","3em","3em","3em","3em","3em","3em","3em","3em","3em","1em","1em","1em","1em","1em","1em","2em","2em","2em","2em","2em","2em","2em","2em","2em","2em","2em","2em","2em","2em","2em","2em","2em","2em","2em","2em","2em","2em","5em","3em","3em","3em","3em","2em","2em","2em","2em","2em","2em","1em","1em","2em","3em","2em","3em","2em","2em","3em","2em","3em","2em","3em","3em","5em","5em","5em","5em","5em","2em","3em","3em","2em","2em","2em","2em","2em","2em","2em","2em","2em","2em","2em","2em","2em","4em","2em","2em","3em","2em","2em","2em","2em","2em","2em","2em","2em","2em","2em","2em","2em","2em","2em","2em","2em","2em","2em","2em","2em","2em","2em","2em","2em","2em","2em","2em","2em","2em","2em","2em","2em","2em","2em","2em","2em","2em","2em","2em","2em","2em","2em","2em","2em","2em","2em","2em","2em","2em","2em","2em","2em","2em","2em","2em","2em","2em","2em","2em","2em","2em","2em","2em","2em","2em","2em","2em","2em","2em","2em","2em","2em","2em"];

//转向数量
var IMGNumArr = [4,4,4,4,4,4,4,4,4,4,1,1,4,4,4,4,4,4,4,4,4,4,1,1,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,2,2,2,2,2,2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,2,2,2,1,1,1,1,1,1,1,1,2,2,2,2,2,2,1,1,1,2,1,1,1,1,1,2,1,2,2,2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,21];
//照片转向数量
var PhotoWsignArr = [2,2,2,2,3,2,2,3,2,2,2,2,2,1,1,1,1,1,1,1,1,2,3,2,1,1,1,1,1,2,1,1,2,1,2,1,2,1,2,2,2,2,2,2,2,2,2,2,1];
//照片宽度
var PhotoWidthArr = ["2em","2em","2em","2em","3em","2em","2em","3em","2em","2em","2em","2em","2em","1em","1em","1em","1em","1em","1em","1em","1em","2em","3em","2em","1em","1em","1em","1em","1em","2em","1em","1em","2em","1em","2em","1em","2em","1em","2em","2em","2em","2em","2em","2em","2em","2em","2em","2em","1em"];
//照片X轴标记
var PhotoNumArr = [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,2,1,2,1,1,2,2,1,2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1];
// console.log(IMGHArr.length);
// console.log(IMGHsignArr.length);
// console.log(IMGWsignArr.length);
// console.log(IMGWidthArr.length);
// console.log(IMGHeightArr.length);
// console.log(IMGNumArr.length);
// console.log(PhotoWsignArr.length);


canvas.oncontextmenu = function(e) {
	if (Label == 0) {
		e.preventDefault();
	    if (o == IMGNum1) {
	    	window.o = 1;
	    	window.IMG = ImgesUrl + IMGNum + "-" + o + ".png";
	    	e.target.firstChild.src = IMG;
	    }else{
	    	window.o = o + 1;
	    	window.IMG = ImgesUrl + IMGNum + "-" + o + ".png";
	    	e.target.firstChild.src = IMG;
	    }
	    if (o == 1 || o == 3) {
	    	var I1 = IMGHArr;
			var I2 = IMGHsignArr;
			var I3 = IMGWsignArr;
			var I4 = IMGWidthArr;
			var I5 = IMGHeightArr;
	    }else if (o == 2 || o == 4) {
	    	var I1 = IMGHArr1;
			var I2 = IMGHsignArr1;
			var I3 = IMGWsignArr1;
			var I4 = IMGWidthArr1;
			var I5 = IMGHeightArr1;
	    }else{
	    	var I1 = IMGHArr;
			var I2 = IMGHsignArr;
			var I3 = IMGWsignArr;
			var I4 = IMGWidthArr;
			var I5 = IMGHeightArr;
	    }
	    window.IMGH = I1[IMGNum];
		window.IMGHsign = I2[IMGNum];
		window.IMGWsign = I3[IMGNum];
		window.IMGWidth = I4[IMGNum];
		window.IMGHeight = I5[IMGNum];
	    ziliao();
	    mouseImg.src = IMG;
		mouseImg.style.top = IMGH;
		mouseImg.style.width = IMGWidth;
		mouseImg.style.height = IMGHeight;
		e.target.firstChild.src = IMG;
		e.target.firstChild.style.top = IMGH;
		e.target.firstChild.style.width = IMGWidth;
		e.target.firstChild.style.height = IMGHeight;
		mouseImg.src = "";
		signZ();
		signX1();
		signY1();
		ziliao();
	}else{
		return false;
	}
}


// var rotate = document.getElementById("rotate");
// rotate.addEventListener('click',function(e){
	
// })

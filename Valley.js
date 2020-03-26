var camera = document.getElementById("camera");
var canvas = document.getElementById("canvas");
var canvasGrid = document.getElementById("canvas-grid");
var EM = 64;
var IMGHsign = 1;
var IMGWsign = 1;
var sssr ="imges/y.png";
var home = document.getElementById("home");
var RoommateSign = 0;
var RoommateSign1 = 0;
var roommate = document.getElementById("roommate");
var IMGD = 0;
var LV = 0;
var roommateBtn = document.getElementById("roommateBtn");
var IMGWidth = "";
var IMGHeight = "";

var hide = 0;  //隐藏UI功能标记
var IMG = "imges/y.png";
var ImgWallBj = "imges/Wall/0.png";
var ImgFloorBj = "imges/floor-1.png";
var ImgWallBjBtn = "";
var ImgFloorBjBtn = "";
var IMGW = 0;
var IMGH = 0;
var imgw = "1em";
var imgh = "1em";
var zoomNum = 4;
var catalog = document.getElementById('catalog');
var zoom = document.getElementById('zoom');
var Label = 0;  //标记标签状态
var PageNumber = 0; //初始化页码（活动）
var PageNumber0 = 0;//初始化页码0
var PageNumber1 = 0;//初始化页码1
var PageNumber2 = 0;//初始化页码2
var furnitureImg = document.getElementById("furniture-img");
var PhotoImg = document.getElementById("Photo-img");
var WallImg = document.getElementById("Wall-img");
var furniture = document.getElementById("furniture");
var Photo = document.getElementById("Photo");
var furnitureIcon = furniture.getElementsByClassName("furniture-icon");
var PhotoIcon = Photo.getElementsByClassName("Photo-icon");
var Wall = document.getElementById("Wall");
var furnitureNum = furniture.querySelectorAll("div");
var PhotoNum = Photo.querySelectorAll("div");
var WallNum = Wall.querySelectorAll("div");
var NumImg0 = document.getElementById("Num-img-0");
var NumImg1 = document.getElementById("Num-img-1");
var NumImg2 = document.getElementById("Num-img-2");
var mouse = document.getElementById("mouse");
var mouseImg = document.getElementById("mouse-img");
var flag = false;
var cur = {
	x:0,
	y:0
}
var div0 = document.getElementById("camera");
var nx,ny,dx,dy,x,y ;
function down(){
    flag = true;
    var touch ;
    if(event.touches){
        touch = event.touches[0];
    }else {
        touch = event;
    }
    cur.x = touch.clientX;
    cur.y = touch.clientY;
    dx = div0.offsetLeft;
    dy = div0.offsetTop;
}
function move(){
    if(flag){
        var touch ;
        if(event.touches){
            touch = event.touches[0];
        }else {
        touch = event;
        }
        nx = touch.clientX - cur.x;
        ny = touch.clientY - cur.y;
        x = dx+nx;
        y = dy+ny;
        div0.style.left = x+"px";
        div0.style.top = y +"px";    
    }
}
//鼠标释放时候的函数
function end(){
    flag = false;
}
camera.addEventListener("touchstart", function(){
	window.div0 = document.getElementById("camera");
	console.log(div0);
});
catalog.addEventListener("touchstart", function(){
	window.div0 = document.getElementById("catalog");
	console.log(div0);
});
zoom.addEventListener("touchstart", function(){
	window.div0 = document.getElementById("zoom");
	console.log(div0);
});
camera.addEventListener("mousedown", function(){
	window.div0 = document.getElementById("camera");
	console.log(div0);
});
catalog.addEventListener("mousedown", function(){
	window.div0 = document.getElementById("catalog");
	console.log(div0);
});
zoom.addEventListener("mousedown", function(){
	window.div0 = document.getElementById("zoom");
	console.log(div0);
});
window.addEventListener("mousedown",function(){
	down();
},false);
window.addEventListener("touchstart",function(){
	down();
},false)
window.addEventListener("mousemove",function(){
	move();
},false);
window.addEventListener("touchmove",function(){
	move();
},false)
window.addEventListener("mouseup",function(){
	end();
},false);
window.addEventListener("touchend",function(){
	end();
},false);









//初始化目录子页面状态
for (var i = 0; i < furnitureNum.length; i++) {
	if (i > 0) {
		furnitureNum[i].index = i;
		furnitureNum[i].style.display = "none";
	}
}
for (var i = 0; i < PhotoNum.length; i++) {
	if (i > 0) {
		PhotoNum[i].index = i;
		PhotoNum[i].style.display = "none";
	}
}
for (var i = 0; i < WallNum.length; i++) {
	if (i > 0) {
		WallNum[i].index = i;
		WallNum[i].style.display = "none";
	}
}
//初始化目录子页面状态--------------------------------------------------
//目录翻页-------------------------------------------------------------
function next(){
	judge();
	NTurn();
}
function prev(){
	judge();
	PTurn();
}

function judge(){
	if(Label == 0){
		window.LabelLen = furnitureNum.length;
		window.LabelNumber = furnitureNum;
	}else if(Label == 1){
		window.LabelLen = PhotoNum.length;
		window.LabelNumber = PhotoNum;
	}else if(Label == 2){
		window.LabelLen = WallNum.length;
		window.LabelNumber = WallNum;
	}
}
function NTurn(){
	LPageNumber();
	if (PageNumber == LabelLen - 1){
		var NewPageNumber = 0;
		LabelNumber[PageNumber].style.display = "none";
		console.log("NewPageNumber: " + NewPageNumber);
		LabelNumber[NewPageNumber].style.display = "flex";
		window.PageNumber = NewPageNumber;
	}else{
		NewPageNumber = PageNumber + 1;
		LabelNumber[PageNumber].style.display = "none";
		LabelNumber[NewPageNumber].style.display = "flex";
		window.PageNumber = PageNumber + 1;
	}
	SPageNumber();
}
function PTurn(){
	LPageNumber();
	if (PageNumber == 0){
		var NewPageNumber = LabelLen - 1;
		LabelNumber[PageNumber].style.display = "none";
		console.log("NewPageNumber: " + NewPageNumber);
		LabelNumber[NewPageNumber].style.display = "flex";
		window.PageNumber = NewPageNumber;
	}else{
		NewPageNumber = PageNumber - 1;
		LabelNumber[PageNumber].style.display = "none";
		LabelNumber[NewPageNumber].style.display = "flex";
		window.PageNumber = PageNumber - 1;
	}
	SPageNumber();
}
//目录翻页-------------------------------------------------------------
//读取页码-------------------------------------------------------------
function LPageNumber(){
	if(Label == 0){
		window.PageNumber = PageNumber0;
	}else if(Label == 1){
		window.PageNumber = PageNumber1;
	}else if(Label == 2){
		window.PageNumber = PageNumber2;
	}
}
//读取页码-------------------------------------------------------------
//保存页码-------------------------------------------------------------
function SPageNumber(){
	if(Label == 0){
		window.PageNumber0 = PageNumber;
		NumImg0.src = "imges/PageNumber/furniture-" + PageNumber0 + ".png";
		console.log("imges/PageNumber/furniture-" + PageNumber0 + ".png")
	}else if(Label == 1){
		window.PageNumber1 = PageNumber;
		NumImg1.src = "imges/PageNumber/Photo-" + PageNumber1 + ".png";
		console.log("imges/PageNumber/Photo-" + PageNumber1 + ".png")
	}else if(Label == 2){
		window.PageNumber2 = PageNumber;
		NumImg2.src = "imges/PageNumber/Wall-" + PageNumber2 + ".png";
		console.log("imges/PageNumber/Wall-" + PageNumber2 + ".png");
	}
	// console.log("0页码：" + PageNumber0 + "   1页码：" + PageNumber1 + "   2页码：" + PageNumber2)
}
//保存页码-------------------------------------------------------------
//目录标签切换---------------------------------------------------------
furnitureImg.addEventListener('click',function(e){
    furniture.style.display = "block";
	Photo.style.display = "none";
	Wall.style.display = "none";
	furnitureImg.src = "imges/menu-furniture-2.png";
	PhotoImg.src = "imges/menu-Photo-1.png";
	WallImg.src = "imges/menu-Wall-1.png";
	NumImg0.style.display = "block";
	NumImg1.style.display = "none";
	NumImg2.style.display = "none";
	window.Label = 0;
	console.log(Label);
	homeBtn.style.display = "none";
})
PhotoImg.addEventListener('click',function(e){
    furniture.style.display = "none";
	Photo.style.display = "block";
	Wall.style.display = "none";
	furnitureImg.src = "imges/menu-furniture-1.png";
	PhotoImg.src = "imges/menu-Photo-2.png";
	WallImg.src = "imges/menu-Wall-1.png";
	NumImg0.style.display = "none";
	NumImg1.style.display = "block";
	NumImg2.style.display = "none";
	window.Label = 1;
	console.log(Label);
	homeBtn.style.display = "none";
	del();
	zhaopianSign();
})
WallImg.addEventListener('click',function(e){
    furniture.style.display = "none";
	Photo.style.display = "none";
	Wall.style.display = "block";
	furnitureImg.src = "imges/menu-furniture-1.png";
	PhotoImg.src = "imges/menu-Photo-1.png";
	WallImg.src = "imges/menu-Wall-2.png";
	NumImg0.style.display = "none";
	NumImg1.style.display = "none";
	NumImg2.style.display = "block";
	window.Label = 2;
	console.log(Label);
	homeBtn.style.display = "block";
})
//目录标签切换---------------------------------------------------------




//地板墙纸替换---------------------------------------------------------------
var bjWall1 = document.getElementById("bj-wall-1");
var bjWall1Btn = document.getElementById("bj-wall-1-btn");
var bjWall2 = document.getElementById("bj-wall-2");
var bjWall2Btn = document.getElementById("bj-wall-2-btn");
var bjWall3 = document.getElementById("bj-wall-3");
var bjWall3Btn = document.getElementById("bj-wall-3-btn");
var bjWall4 = document.getElementById("bj-wall-4");
var bjWall4Btn = document.getElementById("bj-wall-4-btn");
var bjWall5 = document.getElementById("bj-wall-5");
var bjWall5Btn = document.getElementById("bj-wall-5-btn");
var bjWall6 = document.getElementById("bj-wall-6");
var bjWall6Btn = document.getElementById("bj-wall-6-btn");
var bjWall7 = document.getElementById("bj-wall-7");
var bjWall7Btn = document.getElementById("bj-wall-7-btn");
var wallBj = document.getElementById("wall-bj");
var wallBjBtn = document.getElementById("wall-bj-btn");
var bjFloor1 = document.getElementById("bj-floor-1");
var bjFloor1Btn = document.getElementById("bj-floor-1-btn");
var bjFloor2 = document.getElementById("bj-floor-2");
var bjFloor2Btn = document.getElementById("bj-floor-2-btn");
var bjFloor3 = document.getElementById("bj-floor-3");
var bjFloor3Btn = document.getElementById("bj-floor-3-btn");
var bjFloor4 = document.getElementById("bj-floor-4");
var bjFloor4Btn = document.getElementById("bj-floor-4-btn");
var bjFloor5 = document.getElementById("bj-floor-5");
var bjFloor5Btn = document.getElementById("bj-floor-5-btn");
var bjFloor6 = document.getElementById("bj-floor-6");
var bjFloor6Btn = document.getElementById("bj-floor-6-btn");
var bjFloor7 = document.getElementById("bj-floor-7");
var bjFloor7Btn = document.getElementById("bj-floor-7-btn");
var floorBj = document.getElementById("floor-bj");
var floorBjBtn = document.getElementById("floor-bj-btn");
var homeBtn = document.getElementById("home-btn");
bjWall1Btn.addEventListener('click',function(e){
        console.log(e.target);
        bjWall1.style.background = "url(" + ImgWallBj + ")";
        bjWall1.style.backgroundSize = "1em";
})
bjWall2Btn.addEventListener('click',function(e){
        console.log(e.target);
        bjWall2.style.background = "url(" + ImgWallBj + ")";
        bjWall2.style.backgroundSize = "1em";
})
bjWall3Btn.addEventListener('click',function(e){
        console.log(e.target);
        bjWall3.style.background = "url(" + ImgWallBj + ")";
        bjWall3.style.backgroundSize = "1em";
})
bjWall4Btn.addEventListener('click',function(e){
        console.log(e.target);
        bjWall4.style.background = "url(" + ImgWallBj + ")";
        bjWall4.style.backgroundSize = "1em";
})
bjWall5Btn.addEventListener('click',function(e){
        console.log(e.target);
        bjWall5.style.background = "url(" + ImgWallBj + ")";
        bjWall5.style.backgroundSize = "1em";
})
bjWall6Btn.addEventListener('click',function(e){
        console.log(e.target);
        bjWall6.style.background = "url(" + ImgWallBj + ")";
        bjWall6.style.backgroundSize = "1em";
})
bjWall7Btn.addEventListener('click',function(e){
        console.log(e.target);
        bjWall7.style.background = "url(" + ImgWallBj + ")";
        bjWall7.style.backgroundSize = "1em";
})
bjFloor1Btn.addEventListener('click',function(e){
        console.log(e.target);
        bjFloor1.style.background = "url(" + ImgFloorBj + ")";
        bjFloor1.style.backgroundSize = "2em";
})
bjFloor2Btn.addEventListener('click',function(e){
        console.log(e.target);
        bjFloor2.style.background = "url(" + ImgFloorBj + ")";
        bjFloor2.style.backgroundSize = "2em";
})
bjFloor3Btn.addEventListener('click',function(e){
        console.log(e.target);
        bjFloor3.style.background = "url(" + ImgFloorBj + ")";
        bjFloor3.style.backgroundSize = "2em";
})
bjFloor4Btn.addEventListener('click',function(e){
        console.log(e.target);
        bjFloor4.style.background = "url(" + ImgFloorBj + ")";
        bjFloor4.style.backgroundSize = "2em";
})
bjFloor5Btn.addEventListener('click',function(e){
        console.log(e.target);
        bjFloor5.style.background = "url(" + ImgFloorBj + ")";
        bjFloor5.style.backgroundSize = "2em";
})
bjFloor6Btn.addEventListener('click',function(e){
        console.log(e.target);
        bjFloor6.style.background = "url(" + ImgFloorBj + ")";
        bjFloor6.style.backgroundSize = "2em";
})
bjFloor7Btn.addEventListener('click',function(e){
        console.log(e.target);
        bjFloor7.style.background = "url(" + ImgFloorBj + ")";
        bjFloor7.style.backgroundSize = "2em";
})
function wallBtn(){
	wallBjBtn.style.pointerEvents = "";
	floorBjBtn.style.pointerEvents = "none";
	mouse.firstElementChild.src = ImgWallBjBtn;
	mouseImg.style.width = "1em";
	mouseImg.style.height = "1em";
}
function floorBtn(){
	floorBjBtn.style.pointerEvents = "";
	wallBjBtn.style.pointerEvents = "none";
	mouse.firstElementChild.src = ImgFloorBjBtn;
	mouseImg.style.width = "1em";
	mouseImg.style.height = "1em";
}
Wall.addEventListener('click',function(e){
	console.log(e.target.index);
	if (e.target.index < 112) {
		window.ImgWallBj = "imges/Wall/" + e.target.index + ".png";
		window.ImgWallBjBtn = "imges/icon/Wall/" + e.target.index + ".png";
		wallBtn()
	}else{
		window.ImgFloorBj = "imges/Wall/" + e.target.index + ".png";
		window.ImgFloorBjBtn = "imges/icon/Wall/" + e.target.index + ".png";
		floorBtn()
	}
})
//地板墙纸替换---------------------------------------------------------------









//跟随鼠标模块---------------------------------------------------------
var mouse=document.getElementById('mouse');
document.onmousemove=function(ev){
    var oEvent=ev||event;
    var scrollTop=document.documentElement.scrollTop||document.body.scrollTop;
    var scrollLeft=document.documentElement.scrollLeft||document.body.scrollLeft;
    mouse.style.left=oEvent.clientX+scrollLeft+'px';
    mouse.style.top=oEvent.clientY+scrollTop+'px';
}




//缩放功能---------------------------------------------------------
function narrow(){
	var zoomImg = document.getElementById("zoom");
	if (zoomNum == 4) {
		window.zoomNum = 3;
		document.body.id = "body-3";
		zoomImg.style.background = "url(imges/zoom-75.png)";
	}else if (zoomNum == 3) {
		window.zoomNum = 2;
		document.body.id = "body-2";
		zoomImg.style.background = "url(imges/zoom-50.png)";
	}else if (zoomNum == 2) {
		window.zoomNum = 1;
		document.body.id = "body-1";
		zoomImg.style.background = "url(imges/zoom-25.png)";
	}
}
function enlarge(){
	var zoomImg = document.getElementById("zoom");
	if (zoomNum == 1) {
		window.zoomNum = 2;
		document.body.id = "body-2";
		zoomImg.style.background = "url(imges/zoom-50.png)";
	}else if (zoomNum == 2){
		window.zoomNum = 3;
		document.body.id = "body-3";
		zoomImg.style.background = "url(imges/zoom-75.png)";
	}else if (zoomNum == 3){
		window.zoomNum = 4;
		document.body.id = "body-4";
		zoomImg.style.background = "url(imges/zoom-100.png)";
	}
}
//缩放功能---------------------------------------------------------






var preview = document.getElementById('preview');
var preview1 = document.getElementById('preview1');
function screenshot(){
	var screenshot = document.getElementById('screenshot');
	preview.style.display = "flex";
	huanchong();
}
function huanchong(){
	html2canvas(camera).then(function(canvas) {
    preview1.appendChild(canvas);
    var oCavans = document.getElementsByTagName('canvas')[0];
    var strDataURI1 = oCavans.toDataURL();
    downLoadFn(strDataURI1);
	});
};



 //判断浏览器类型
function myBrowser() {
	var userAgent = navigator.userAgent; //取得浏览器的userAgent字符串
	var isdivera = userAgent.indexOf("divera") > -1;
	if(isdivera) {
    	return "divera"
	}; //判断是否divera浏览器
	if(userAgent.indexOf("Firefox") > -1) {
    	return "FF";
	} //判断是否Firefox浏览器
	if(userAgent.indexOf("Chrome") > -1) {
    	return "Chrome";
	}
	if(userAgent.indexOf("Safari") > -1) {
    	return "Safari";
	} //判断是否Safari浏览器
	if(userAgent.indexOf("compatible") > -1 && userAgent.indexOf("MSIE") > -1 && !isdivera) {
    	return "IE";
	}; //判断是否IE浏览器
	if(userAgent.indexOf("Trident") > -1) {
   	 return "Edge";
	} //判断是否Edge浏览器
}
myBrowser();
//IE浏览器图片保存本地
function SaveAs5(imgURL) {
    var divdiv = window.diven(imgURL, "", "width=1, height=1, top=5000, left=5000");
    for(; divdiv.document.readyState != "complete";) {
        if(divdiv.document.readyState == "complete") break;
    }
    divdiv.document.execCommand("SaveAs");
    divdiv.close();
}
function download(strDataURI1) {
    var link = document.getElementById("IsA");
    // link.innerHTML = 'download_canvas_image';
    link.download = 'mypainting.png';
    link.addEventListener('click', function(ev) {
    link.href = strDataURI1;
    }, false);
    document.getElementById("load").style.display = "none";
    document.getElementById("save").style.display = "block";
    document.getElementById("cancel").style.display = "block";
    // document.body.appendChild(link);
};
function downLoadFn(url) {

    if(myBrowser() === "IE" || myBrowser() === "Edge") {
        SaveAs5(url);
    } else {
        download(url);
    }
}



//隐藏UI----------------------------------------------------
function hide1(){
	if (hide == 0) {
		setTimeout(function(){ 
			catalog.style.divacity = "1";
			zoom.style.divacity = "1"; 
		}, 40);
		setTimeout(function(){ 
			catalog.style.divacity = "0.8";
			zoom.style.divacity = "0.8"; 
		}, 80);
		setTimeout(function(){ 
			catalog.style.divacity = "0.6";
			zoom.style.divacity = "0.6"; 
		}, 120);
		setTimeout(function(){ 
			catalog.style.divacity = "0.4";
			zoom.style.divacity = "0.4"; 
		}, 160);
		setTimeout(function(){ 
			catalog.style.divacity = "0.2";
			zoom.style.divacity = "0.2"; 
		}, 200);
		setTimeout(function(){ 
			catalog.style.display = "none";
			zoom.style.display = "none";
		}, 240);
		window.hide = 1;
	}else{
		setTimeout(function(){ 
		catalog.style.display = "block";
		zoom.style.display = "flex";
		}, 40);
		setTimeout(function(){ 
			catalog.style.divacity = "0.4";
			zoom.style.divacity = "0.4"; 
		}, 80);
		setTimeout(function(){ 
			catalog.style.divacity = "0.6";
			zoom.style.divacity = "0.6"; 
		}, 120);
		setTimeout(function(){ 
			catalog.style.divacity = "0.8";
			zoom.style.divacity = "0.8"; 
		}, 160);
		setTimeout(function(){ 
			catalog.style.divacity = "1";
			zoom.style.divacity = "1"; 
		}, 200);
		window.hide = 0;
	}
}
//隐藏UI----------------------------------------------------




Photo.addEventListener('click',function(e){
	console.log(e.target.index);
	var e = e.target.index;
    window.IMGD = 1;
    window.IMG = "imges/Photo/" + e + "-1.png";
    window.IMGH = "0";
    window.IMGHsign = 1;
    window.IMGWsign = PhotoWsignArr[e];
    window.IMGWidth = PhotoWidthArr[e];
	window.IMGHeight = "2em";
	window.IMGNum1 = PhotoNumArr[e];
	window.IMGNum = e;
	window.o = 1;
	window.ImgesUrl = "imges/Photo/";
	zhaopianSign();
	PhotoSignX();
	mouseImg.src = IMG;
	mouseImg.style.top = IMGH;
	mouseImg.style.width = IMGWidth;
	mouseImg.style.height = IMGHeight;
	ziliao();
})
function ziliao() {
	if (kongzhitai1 == 1) {
		document.getElementById("zoom").style.display = "block";
		document.getElementById("text-2").innerHTML ="IMG: " + IMG;
		document.getElementById("text-3").innerHTML ="IMGH: " + IMGH;
		document.getElementById("text-4").innerHTML ="IMGHsign: " + IMGHsign;
		document.getElementById("text-5").innerHTML ="IMGWsign: " + IMGWsign;
		document.getElementById("text-6").innerHTML ="IMGWidth: " + IMGWidth;
		document.getElementById("text-7").innerHTML ="IMGHeight: " + IMGHeight;
		document.getElementById("text-8").innerHTML ="IMGNum1: " + IMGNum1;
		document.getElementById("text-9").innerHTML ="IMGNum: " + IMGNum;
		document.getElementById("text-10").innerHTML ="ImgesUrl: " + ImgesUrl;
	}
}
var kongzhitai1 = 0;
function kongzhitai() {
	if (kongzhitai1 == 0) {
		document.getElementById("dddiv").style.display = "block";
		window.kongzhitai1 = 1;
	}else if (kongzhitai1 == 1) {
		document.getElementById("dddiv").style.display = "none";
		window.kongzhitai1 = 0;
	}
	
}
function zhaopianSign(){
		for (var i = 0; i < PhotoArr.length; i++) {
			if (PhotoArr[i] == 0) {
				// canvasNum[i].parentNode.style.background = "#000";
				// canvasNum[i].parentNode.style.opacity =  "0.5";
				canvasNum[i].parentNode.style.pointerEvents = "none";
			}else if (PhotoArr[i] == 1) {
				canvasNum[i].parentNode.style.background = "";
				canvasNum[i].parentNode.style.pointerEvents = "auto";
				// canvasNum[i].parentNode.style.background = "blue";
				// canvasNum[i].parentNode.style.opacity =  "0.5";
			}
		}
		for (var i = 0; i < PhotoWarr.length; i++) {
			if (PhotoWarr[i] != 0) {
				console.log(PhotoWarr[i]);
				for (var n = 0; n < PhotoWarr[i]; n++) {
					console.log(i+n);
					canvasNum[i+n].parentNode.style.pointerEvents = "none";
					// canvasNum[i+n].parentNode.style.background = "#fff";
					// canvasNum[i+n].parentNode.style.opacity =  "0.5";
				}
					
			}
		}
	}
function PhotoSignX() {
	for (var i = 1; i < PhotoSign.length; i++) {
		if (PhotoSign[i] == 1 || PhotoArr[i] == 0) {	
			if (i-(IMGWsign-1) > 0 && IMGWsign-1 > 0) {
				canvasNum[i-(IMGWsign-1)].parentNode.style.pointerEvents = "none";
				// canvasNum[i-(IMGWsign-1)].parentNode.style.background = "red";
				// canvasNum[i-(IMGWsign-1)].parentNode.style.opacity =  "0.5";
			}
			if (i-(IMGWsign-2) > 0 && IMGWsign-2 > 0) {
				canvasNum[i-(IMGWsign-2)].parentNode.style.pointerEvents = "none";
				// canvasNum[i-(IMGWsign-2)].parentNode.style.background = "red";
				// canvasNum[i-(IMGWsign-2)].parentNode.style.opacity =  "0.5";
			}
		}
	}
}





furniture.addEventListener('click',function(e){
	if (e.target.nodeName == "IMG") {
		console.log(e.target.index);
		var e = e.target.index;
		window.IMGD = 1;
		window.IMG = "imges/furniture/" + e + "-1.png";
		window.IMGH = IMGHArr[e];
		window.IMGHsign = IMGHsignArr[e];
		window.IMGWsign = IMGWsignArr[e];
		window.IMGWidth = IMGWidthArr[e];
		window.IMGHeight = IMGHeightArr[e];
		window.IMGNum1 = IMGNumArr[e];
		window.IMGNum = e;
		window.o = 1;
		window.ImgesUrl = "imges/furniture/";
		signZ();
		signX1();
		signY1();
		ziliao();
		mouseImg.src = IMG;
		mouseImg.style.top = IMGH;
		console.log(IMGWidth);
		mouseImg.style.width = IMGWidth;
		console.log(IMGHeight);
		mouseImg.style.height = IMGHeight;
	}
	
})



var signHarr = [];
var signWarr = [];
var signXarr = [];
var sign = [];
var PhotoArr = [];
var PhotoHarr = [];
var PhotoWarr = [];
var PhotoSign = [];
var Choice = document.getElementById("Choice");
Choice.style.width = screen.width + "px";
Choice.style.height = screen.height + "px";
console.log(PhotoIcon);
function LV1(){
	div0.style.left = "";
	window.homeNum = 144;
	window.z = 12;
	Choice.style.display = "none";
	SignArray();
	window.canvasNum = canvas.querySelectorAll("img");
	window.ssr = canvasNum[0].src;
	home.className = "home-S";
	canvas.className = "canvas-S";
	canvasGrid.className = "canvas-S";
	camera.className = "camera-S";
	for (var i = 0; i < canvasNum.length; i++) {
        canvasNum[i].index = i;
	}
	var Nwall = [bjWall1,bjWall2,bjWall3,bjWall4,bjWall5,bjWall6,bjWall7];
	var NwallBtn = [bjWall1Btn,bjWall2Btn,bjWall3Btn,bjWall4Btn,bjWall5Btn,bjWall6Btn,bjWall7Btn];
	var Nfloor = [bjFloor1,bjFloor2,bjFloor3,bjFloor4,bjFloor5,bjFloor6,bjFloor7];
	var NfloorBtn = [bjFloor1Btn,bjFloor2Btn,bjFloor3Btn,bjFloor4Btn,bjFloor5Btn,bjFloor6Btn,bjFloor7Btn];
	for(var i = 0; i < 7; i++){
		Nwall[i].className = "bj-wall-" + (i + 1) +"-S";
		NwallBtn[i].className = "bj-wall-" + (i + 1) +"-S";
		Nfloor[i].className = "bj-floor-" + (i + 1) +"-S";
		NfloorBtn[i].className = "bj-floor-" + (i + 1) +"-S";
	}
	canvasNum[120].src = "imges/home-1-bj-x.png";
	canvasNum[120].classList.add("home-S-bj-x");
	canvasNum[105].src = "imges/bed.png";
	canvasNum[105].classList.add("bed");
	var signD = [48,60,72,84,96,108,120,59,71,83,95,107,119,131,105,106,117,118,129,130];
	for (var i = 0; i < signD.length; i++) {
		signXarr.splice(signD[i],1,1);
	}
	for (var i = 0; i < 48; i++) {
		signXarr.splice(i,1,1);
	}
	for (var i = 132; i < 144; i++) {
		signXarr.splice(i,1,1);
	}
	for (var i = 13; i < 23; i++) {
		PhotoArr.splice(i,1,1);
	}
	console.log(PhotoSign);
	Roommate1()
	signZ()
	roommateBtn.style.display = "none";
	document.getElementById("roommate1").style.opacity = "0.2";
	document.getElementById("roommate1").style.pointerEvents = "auto";
}
function LV2(){
	window.homeNum = 360;
	window.z = 30;
	Choice.style.display = "none";
	SignArray();
	window.canvasNum = canvas.querySelectorAll("img");
	window.ssr = canvasNum[0].src;
	home.className = "home-M";
	canvas.className = "canvas-M";
	canvasGrid.className = "canvas-M";
	camera.className = "camera-M";
	var Nwall = [bjWall1,bjWall2,bjWall3,bjWall4,bjWall5,bjWall6,bjWall7];
	var NwallBtn = [bjWall1Btn,bjWall2Btn,bjWall3Btn,bjWall4Btn,bjWall5Btn,bjWall6Btn,bjWall7Btn];
	var Nfloor = [bjFloor1,bjFloor2,bjFloor3,bjFloor4,bjFloor5,bjFloor6,bjFloor7];
	var NfloorBtn = [bjFloor1Btn,bjFloor2Btn,bjFloor3Btn,bjFloor4Btn,bjFloor5Btn,bjFloor6Btn,bjFloor7Btn];
	for(var i = 0; i < 7; i++){
		Nwall[i].className = "bj-wall-" + (i + 1) +"-M";
		NwallBtn[i].className = "bj-wall-" + (i + 1) +"-M";
		Nfloor[i].className = "bj-floor-" + (i + 1) +"-M";
		NfloorBtn[i].className = "bj-floor-" + (i + 1) +"-M";
	}
	Nwall[1].style.background = "url(imges/Wall/0.png)";
	Nwall[1].style.backgroundSize = "1em";
	Nwall[2].style.background = "url(imges/Wall/0.png)";
	Nwall[2].style.backgroundSize = "1em";
	Nfloor[0].style.background = "url(imges/Kitchen-floor.png)";
	Nfloor[0].style.backgroundSize = "2em";
	Nfloor[3].style.background = "url(imges/floor-1.png)";
	Nfloor[3].style.backgroundSize = "2em";
	for (var i = 0; i < canvasNum.length; i++) {
        canvasNum[i].index = i;
	}
	var canvasN = [62,61,81,300];
	var canvasSrc = ["imges/kitchen-R-M.png","imges/kitchen-L-M.png","imges/DoubleBed.png","imges/home-2-bj-x.png"];
	var canvasClass = ["kitchen-R-M","kitchen-L-M","DoubleBed","home-M-bj-x"];
	for (var i = 0; i < canvasN.length; i++){
		canvasNum[canvasN[i]].src = canvasSrc[i];
		canvasNum[canvasN[i]].classList.add(canvasClass[i]);
	}
	var signD = [120,121,122,123,124,125,126,150,151,180,181,210,211,240,241,270,300,149,179,209,239,269,299,329,141,142,143,171,172,173,138,139,168,169,198,199,228,229,258,259,318,319];
	for (var i = 0; i < signD.length; i++) {
		signXarr.splice(signD[i],1,1);
	}
	for (var i = 0; i < 30; i++) {
		signXarr.splice(i,1,1);
		signXarr.splice(i+z,1,1);
		signXarr.splice(i+z*2,1,1);
		signXarr.splice(i+z*3,1,1);
	}
	for (var i = 330; i < 360; i++) {
		signXarr.splice(i,1,1);
	}
	for (var i = 31; i < 48; i++) {
		PhotoArr.splice(i,1,1);
	}
	for (var i = 50; i < 59; i++) {
		PhotoArr.splice(i,1,1);
	}
	window.roommateImg = "url(imges/home-2-2-bj.png)";
	window.roommateImgX = "imges/home-2-bj-x.png";
	window.roommateImg1 = "url(imges/home-2-1-bj.png)";
	window.roommateImgX1 = "imges/home-2-bj-x.png";
	window.roommateN = canvasNum[300];
	roommate.className = "roommate-M";
	window.roommateSize = "30em"
	Roommate1();
	signZ()
	roommateBtn.style.display = "none";
}
function LV3(){
	LV4();
	home.style.background = "url(imges/home-3-1-bj.png)";
	canvasNum[210].src = "imges/home-3-1-x-bj.png";
	window.roommateImg = "url(imges/home-3-2-bj.png)";
	window.roommateImgX = "imges/home-3-2-x-bj.png";
	window.roommateImg1 = "url(imges/home-3-1-bj.png)";
	window.roommateImgX1 = "imges/home-3-1-x-bj.png";
	window.roommateN = canvasNum[210];
	home.style.backgroundSize = "35em";
	window.roommateSize = "35em"
}
function LV4(){
	home.className = "home-L";
	window.z = 35;
	Choice.style.display = "none";
	window.homeNum = 875;
	SignArray();
	window.canvasNum = canvas.querySelectorAll("img");
	window.ssr = canvasNum[0].src;
	var canvasN = [412,127,131,85,389,386,210];
	var canvasSrc = ["imges/DoubleBed.png","imges/bed.png","imges/bed.png","imges/BabyDed.png","imges/kitchen-R.png","imges/kitchen-L.png","imges/home-4-1-x-bj.png"];
	var canvasClass = ["DoubleBed","bed","bed","BabyDed","kitchen-R","kitchen-L","home-L-2-bj-x"];
	for (var i = 0; i < canvasN.length; i++){
		canvasNum[canvasN[i]].src = canvasSrc[i];
		canvasNum[canvasN[i]].classList.add(canvasClass[i]);
	}
	for (var i = 0; i < canvasNum.length; i++) {
        canvasNum[i].index = i;
	}
	var signD = [153,154,188,189,168,203,238,273,308,281,282,283,284,285,286,287,288,289,290,316,317,318,319,320,321,322,323,324,325,258,259,293,294,476,477,511,512,546,547,581,582,616,617,686,687,197,198,232,233,201,202,236,237,482,483,484,517,518,519,162,163,166,167,157,156,155,190,191,192];
	for (var i = 0; i < signD.length; i++) {
		signXarr.splice(signD[i],1,1);
	}
	var arr1 = [0,328,169,204,239,274,309,351,387,422,459,363,398,433,710,806,780,745];
	var arr2 = [140,350,175,210,245,280,315,361,396,431,465,385,420,455,723,840,793,758];
	for (var i = 0; i < arr1.length; i++) {

		for (var x = arr1[i]; x < arr2[i]; x++) {
			signXarr.splice(x,1,1);
		}        
	}
	for (var i = 0; i < 21; i++) {
		var x = 140 + (35*i);
		signXarr.splice(x,1,1);
	}
	for (var i = 0; i < 9; i++) {
		var x = 386 + (35*i);
		signXarr.splice(x,1,1);
	}
	for (var i = 0; i < 10; i++) {
		var x = 489 + (35*i);
		signXarr.splice(x,1,1);
	}
	for (var i = 36; i < 48; i++) {
		PhotoArr.splice(i,1,1);
	}
	for (var i = 50; i < 62; i++) {
		PhotoArr.splice(i,1,1);
	}
	for (var i = 351; i < 360; i++) {
		PhotoArr.splice(i,1,1);
	}
	for (var i = 364; i < 371; i++) {
		PhotoArr.splice(i,1,1);
	}
	for (var i = 373; i < 384; i++) {
		PhotoArr.splice(i,1,1);
	}
	for (var i = 457; i < 489; i++) {
		canvasNum[i].style.zIndex="31"
	}
	signX1();
	signY1();
	signZ();
	window.roommateImg = "url(imges/home-4-2-bj.png)";
	window.roommateImgX = "imges/home-4-2-x-bj.png";
	window.roommateImg1 = "url(imges/home-4-1-bj.png)";
	window.roommateImgX1 = "imges/home-4-1-x-bj.png";
	home.style.background = "url(imges/home-4-1-bj.png)";
	home.style.backgroundSize = "35em";
	window.roommateSize = "35em"
	window.roommateN = canvasNum[210];
	roommate.className = "roommate-L";
	window.LV = 4;
	Roommate1()
	roommateBtn.style.display = "none";
}
function SignArray(){
	for(var i = 0; i < homeNum; i++){
		createHtml();
		createHtml1()
		signHarr.push(0);
		signWarr.push(0);
		signXarr.push(0);
		sign.push(0);
		PhotoSign.push(0);
		PhotoArr.push(0);
		PhotoHarr.push(0);
		PhotoWarr.push(0);
	}
}
var canvasGridNnm = 0;
function createHtml(){
	var div = document.createElement("div");
	var Img = document.createElement("img");
	Img.src = "imges/y.png";
	div.appendChild(Img);
	canvas.appendChild(div);
}
function createHtml1(){
	var div = document.createElement("div");
	var Img = document.createElement("img");
	Img.src = "imges/t.png";
	div.appendChild(Img);
	canvasGrid.appendChild(div);
}
function Grid(){
	if (canvasGridNnm == 0) {
		canvasGrid.style.display = "flex";
		window.canvasGridNnm = 1;
	}else if (canvasGridNnm == 1) {
		canvasGrid.style.display = "none";
		window.canvasGridNnm = 0;
	}
	
}
function Roommate1(){
	window.roommateBtnImg = roommateBtn.querySelectorAll("img");
	for (var i = 0; i < roommateBtnImg.length; i++) {
        roommateBtnImg[i].index = i;
	}
}
canvas.addEventListener('click',function(e){
	if (e.target.nodeName == "DIV") {
			e.target.firstChild.src = IMG;
			e.target.firstChild.style.width = IMGWidth;
			e.target.firstChild.style.height = IMGHeight;
			console.log(e.target.firstChild.index);
			var H = e.target.firstChild.index;
			e.target.firstChild.style.top = IMGH;
			window.sssr = IMG;
			if (IMGD == 1 && Label == 0) {
				signHarr.splice(H,1,IMGHsign);
				signWarr.splice(H,1,IMGWsign);
				sign.splice(H,1,1);
				console.log(signHarr[H]);
				console.log(signWarr[H]);
			}else if (IMGD == 1 && Label == 1) {
				PhotoHarr.splice(H,1,IMGHsign);
				PhotoWarr.splice(H,1,IMGWsign);
				PhotoSign.splice(H,1,1);
				console.log(PhotoHarr);
				console.log(PhotoWarr);
			}
		}
		if (IMGD == 1) {
			var r = e.target.firstChild.index;
			for (var i = 0; i < IMGWsign; i++){
				for (var n = 0; n < IMGHsign; n++){
					canvasNum[r-(z*n)].parentNode.style.pointerEvents = "none";
					// canvasNum[r-(z*n)].parentNode.style.background = "red";
					// canvasNum[r-(z*n)].parentNode.style.opacity =  "0.5";
					signXarr.splice(r-(z*n),1,1);
				}
				// console.log(signXarr[r]);
				var r = r + 1;
			}
			console.log(canvasNum[e.target.firstChild.index]);
			// console.log(signXarr);
			if (Label == 0) {
				signX1();
				signY1();
			}else if (Label == 1) {
				PhotoSignX()
			}
			
		}else if (IMGD == 0) {
			console.log(signHarr[H]);
			console.log(signWarr[H]);
			var r = e.target.firstChild.index;
			for (var i = 0 ; i < signWarr[H]; i++) {
				for (var n = 0 ; n < signHarr[H]; n++) {
					canvasNum[r-(z*n)].parentNode.style.background = "";
					canvasNum[r-(z*n)].parentNode.style.pointerEvents = "auto";
					signXarr.splice(r-(z*n),1,0);
				}
				var r = r + 1;
			}
			signHarr.splice(H,1,0);
			signWarr.splice(H,1,0);
			// console.log(signXarr);
		}	
})
function signZ(){
	for (var i = 0; i < signXarr.length; i++) {
		if (signXarr[i] == 0) {
			canvasNum[i].parentNode.style.background = "";
			// canvasNum[i].parentNode.style.background = "green";
			// canvasNum[i].parentNode.style.opacity =  "0.5";
			canvasNum[i].parentNode.style.pointerEvents = "auto";
		}else if (signXarr[i] == 1) {
			// canvasNum[i].parentNode.style.background = "red";
			// canvasNum[i].parentNode.style.opacity =  "0.5";
			canvasNum[i].parentNode.style.pointerEvents = "none";
		}
	}
	for (var i = 1; i < signXarr.length; i++) {
		if (sign[i] == 1) {
			canvasNum[i].parentNode.style.background = "";
			canvasNum[i].parentNode.style.pointerEvents = "auto";
		}
	}
	for (var i = 1; i < PhotoSign.length; i++) {
		if (PhotoSign[i] == 1) {
			canvasNum[i].parentNode.style.background = "";
			canvasNum[i].parentNode.style.pointerEvents = "auto";
		}
	}
}

function signX1(){
	for (var i = 1; i < signXarr.length; i++) {
		if (signXarr[i] == 1) {
			if (i-(IMGWsign-1) > 0) {
				canvasNum[i-(IMGWsign-1)].parentNode.style.pointerEvents = "none";
				// canvasNum[i-(IMGWsign-1)].parentNode.style.background = "red";
				// canvasNum[i-(IMGWsign-1)].parentNode.style.opacity =  "0.5";
				if (IMGHsign == 2 || IMGHsign == 3) {
					if (canvasNum[i-(IMGWsign-1)+(z*(IMGHsign-1))] != undefined) {
						canvasNum[i-(IMGWsign-1)+(z*(IMGHsign-1))].parentNode.style.pointerEvents = "none";
						// canvasNum[i-(IMGWsign-1)+(z*(IMGHsign-1))].parentNode.style.background = "#eee";
						// canvasNum[i-(IMGWsign-1)+(z*(IMGHsign-1))].parentNode.style.opacity =  "0.5";
					}
				}
				if (canvasNum[i-(IMGWsign-2)] != undefined && IMGWsign-2 > 0) {
					canvasNum[i-(IMGWsign-2)].parentNode.style.pointerEvents = "none";
					// canvasNum[i-(IMGWsign-2)].parentNode.style.background = "red";
					// canvasNum[i-(IMGWsign-2)].parentNode.style.opacity =  "0.5";
				}
				if (canvasNum[i-(IMGWsign-3)] != undefined && IMGWsign-3 > 0) {
					canvasNum[i-(IMGWsign-3)].parentNode.style.pointerEvents = "none";
					// canvasNum[i-(IMGWsign-3)].parentNode.style.background = "green";
					// canvasNum[i-(IMGWsign-3)].parentNode.style.opacity =  "0.5";
				}
				if (canvasNum[i-(IMGWsign-3)+z] != undefined && IMGWsign-3 > 0) {
					canvasNum[i-(IMGWsign-3)+z].parentNode.style.pointerEvents = "none"
					// canvasNum[i-(IMGWsign-3)+z].parentNode.style.background = "green";
					// canvasNum[i-(IMGWsign-3)+z].parentNode.style.opacity =  "0.5";
				};	
			}	
		}	
	}
}

function signY1(){
	for (var i = 1; i < signXarr.length; i++) {
		if (signXarr[i] == 1) {
			// if (canvasNum[i+z*(IMGHsign-1)-1] != undefined && IMGHsign-1 > 0) {
			// 	canvasNum[i+z*(IMGHsign-1)-1].parentNode.style.pointerEvents = "none";
			// 	canvasNum[i+z*(IMGHsign-1)-1].parentNode.style.background = "blue";
				// canvasNum[i+z*(IMGHsign-1)-1].parentNode.style.opacity =  "0.5";
			// }
			if (canvasNum[i+z*(IMGHsign-1)] != undefined) {
				canvasNum[i+z*(IMGHsign-1)].parentNode.style.pointerEvents = "none";
				// canvasNum[i+z*(IMGHsign-1)].parentNode.style.background = "#000";
				// canvasNum[i+z*(IMGHsign-1)].parentNode.style.opacity =  "0.5";
			}
			if (LV == 4) {
				var a = [222,221,220,219]
				var b = [650,649,648,647]
				for (var c = 0; c < IMGWsign - 1; c++) {
					if (canvasNum[a[c]] != undefined) {
						canvasNum[a[c]].parentNode.style.pointerEvents = "none";
						// canvasNum[a[c]].parentNode.style.background = "#000";
						// canvasNum[a[c]].parentNode.style.opacity =  "0.5";
					}
					if (canvasNum[b[c]] != undefined) {
						canvasNum[b[c]].parentNode.style.pointerEvents = "none";
						// canvasNum[b[c]].parentNode.style.background = "#000";
						// canvasNum[b[c]].parentNode.style.opacity =  "0.5";
					}
				}
			}	
		}	
	}
}

function television1(){
	window.IMGD = 1;
	window.IMG = "imges/television-1.png";
	window.IMGH = "-2em";
	window.IMGHsign = 2;
	window.IMGWsign = 2;
	window.IMGWidth = "2em";
	window.IMGHeight = "3em";
	signZ();
	signX1();
	signY1();
}
function del(){
	window.IMGD = 0;
	window.IMG = "imges/y.png";
	window.IMGH = "0";
	window.IMGHsign = "0";
	window.IMGWsign = "0";
	mouseImg.src = IMG;
	mouseImg.style.top = IMGH;
	mouseImg.style.width = IMGWidth;
	mouseImg.style.height = IMGHeight;
	signZ()
	console.log(IMG);
}
canvas.onmouseover = function(e){
	if (e.target.nodeName == "DIV" && IMGD != 0) {
		window.sssr = e.target.firstChild.src;
		if (e.target.firstChild.src == ssr) {
			// e.target.style.background = "#00ff00";
			// e.target.style.opacity =  "0.7";
			e.target.firstChild.src = IMG;
			e.target.firstChild.style.top = IMGH;
			mouseImg.src = "";
			e.target.firstChild.style.width = IMGWidth;
			e.target.firstChild.style.height = IMGHeight;
		}else{
			mouse.style.background = "red";
			mouseImg.src = IMG;
			mouseImg.style.top = IMGH;
			mouseImg.style.width = IMGWidth;
			mouseImg.style.height = IMGHeight;
		}
	}else if (e.target.nodeName == "DIV" && IMGD == 0 && e.target.id != "canvas") {
		if (e.target.firstChild.src != ssr) {
			// e.target.style.background = "#00ff00";
			// e.target.style.opacity =  "0.7";
		}
	}
}
canvas.onmouseout = function(e){
	if (e.target.nodeName == "DIV" && IMGD != 0) {
			e.target.style.background = "";
			e.target.style.opacity =  "1";
			e.target.firstChild.src = sssr;
			mouse.style.background = "";
	}else if (e.target.nodeName == "DIV" && IMGD == 0 && e.target.id != "canvas") {
		if (e.target.firstChild.src != ssr) {
			e.target.style.background = "";
			e.target.style.opacity =  "1";
		}
	}else{
		mouse.style.background = "";
	}
}

function Roommate(){
		home.style.background = roommateImg;
		home.style.backgroundSize = roommateSize;
		roommate.style.display = "block";
		roommateN.src = roommateImgX;
		roommateBtn.style.display = "block";
}
roommateBtn.addEventListener('click',function(e){
	if (e.target.index == 16) {
		home.style.background = roommateImg1;
		home.style.backgroundSize = roommateSize;
		roommate.style.display = "none";
		roommateN.src = roommateImgX1;
		window.RoommateSign1 = 0;
		roommateBtn.style.display = "none";
		window.RoommateSign = 0;
	}else if (e.target.index == 17) {
		roommateBtn.style.display = "none";
	}else if (e.target.index != undefined) {
		document.getElementById("roommate123").src = "imges/roommate/" + e.target.index + ".png";
		document.getElementById("roommate1").src = "imges/roommate/roommate-" + e.target.index + ".png";
		console.log(e.target.index != undefined);
	}
})




var menu = document.getElementById("menu");
var menuNum = menu.getElementsByClassName("menuNum");
var menuNumWall = Wall.getElementsByClassName("menuNum");
var WallIcon = Wall.getElementsByClassName("Wall-icon");
var menuNumPhoto = Photo.getElementsByClassName("menuNum");

// console.log(menuNum.length);
for (var i = 0 ; i < 14; i++) {
	var N = menuNum[i];
	for (var x = 0 ; x < 18; x++) {
		var Img = document.createElement("img");
		Img.src = "imges/icon/furniture/" + (x+i*18) + ".png";
		if (x+i*18 > 236) {
			Img.src = "imges/y.png";
			Img.style.pointerEvents = "none";
		}
		N.appendChild(Img).className = "furniture-icon";
	}
}

for (var i = 0 ; i < 10; i++) {
	var N = menuNumWall[i];
	for (var x = 0 ; x < 18; x++) {
		var Img = document.createElement("img");
		Img.src = "imges/icon/wall/" + (x+i*18) + ".png";
		if (x+i*18 > 167) {
			Img.src = "imges/y.png";
			Img.style.pointerEvents = "none";
		}
		N.appendChild(Img).className = "Wall-icon";
	}
}
for (var i = 0 ; i < 3; i++) {
	var N = menuNumPhoto[i];
	for (var x = 0 ; x < 18; x++) {
		var Img = document.createElement("img");
		Img.src = "imges/icon/Photo/" + (x+i*18) + ".png";
		if (x+i*18 > 48) {
			Img.src = "imges/y.png";
			Img.style.pointerEvents = "none";
		}
		N.appendChild(Img).className = "Photo-icon";
	}
}
for (var i = 0; i < furnitureIcon.length; i++) {
        furnitureIcon[i].index = i;
	}
for (var i = 0; i < PhotoIcon.length; i++) {
        PhotoIcon[i].index = i;
	}
for (var i = 0; i < WallIcon.length; i++) {
        WallIcon[i].index = i;
	}



function cancel() {
	var Dcanvas = document.body.querySelectorAll("canvas");
	console.log(Dcanvas);
}
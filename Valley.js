var camera = document.getElementById("camera");
var canvas = document.getElementById("canvas");
var canvasNum = canvas.querySelectorAll("div");

var IMG = ""
var IMGW = 0;
var IMGH = 0;
var imgw = "1em";
var imgh = "1em";
var zoomNum = 4;
var catalog = document.getElementById('catalog');
var zoom = document.getElementById('zoom');
var x = 0;
var y = 0;
var l = 0;
var t = 0;
var isDown = false;
var arrNot = document.getElementsByClassName("home-1-not");
var Label = 0;  //标记标签状态
var PageNumber = 0; //初始化页码（活动）
var PageNumber0 = 0;//初始化页码0
var PageNumber1 = 0;//初始化页码1
var PageNumber2 = 0;//初始化页码2
var furnitureImg = document.getElementById("furniture-img");
var productionImg = document.getElementById("production-img");
var WallImg = document.getElementById("Wall-img");
var furniture = document.getElementById("furniture");
var production = document.getElementById("production");
var Wall = document.getElementById("Wall");
var furnitureNum = furniture.querySelectorAll("div");
var productionNum = production.querySelectorAll("div");
var WallNum = Wall.querySelectorAll("div");
var NumImg0 = document.getElementById("Num-img-0");
var NumImg1 = document.getElementById("Num-img-1");
var NumImg2 = document.getElementById("Num-img-2");
//初始化目录子页面状态
for (var i = 0; i < furnitureNum.length; i++) {
	if (i > 0) {
		furnitureNum[i].index = i;
		furnitureNum[i].style.display = "none";
	}
}
for (var i = 0; i < productionNum.length; i++) {
	if (i > 0) {
		productionNum[i].index = i;
		productionNum[i].style.display = "none";
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
		window.LabelLen = productionNum.length;
		window.LabelNumber = productionNum;
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
		LabelNumber[NewPageNumber].style.display = "block";
		window.PageNumber = NewPageNumber;
	}else{
		NewPageNumber = PageNumber + 1;
		LabelNumber[PageNumber].style.display = "none";
		LabelNumber[NewPageNumber].style.display = "block";
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
		LabelNumber[NewPageNumber].style.display = "block";
		window.PageNumber = NewPageNumber;
	}else{
		NewPageNumber = PageNumber - 1;
		LabelNumber[PageNumber].style.display = "none";
		LabelNumber[NewPageNumber].style.display = "block";
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
		NumImg1.src = "imges/PageNumber/production-" + PageNumber1 + ".png";
		console.log("imges/PageNumber/production-" + PageNumber1 + ".png")
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
	production.style.display = "none";
	Wall.style.display = "none";
	furnitureImg.src = "imges/menu-furniture-2.png";
	productionImg.src = "imges/menu-production-1.png";
	WallImg.src = "imges/menu-Wall-1.png";
	NumImg0.style.display = "block";
	NumImg1.style.display = "none";
	NumImg2.style.display = "none";
	window.Label = 0;
	console.log(Label);
})
productionImg.addEventListener('click',function(e){
    furniture.style.display = "none";
	production.style.display = "block";
	Wall.style.display = "none";
	furnitureImg.src = "imges/menu-furniture-1.png";
	productionImg.src = "imges/menu-production-2.png";
	WallImg.src = "imges/menu-Wall-1.png";
	NumImg0.style.display = "none";
	NumImg1.style.display = "block";
	NumImg2.style.display = "none";
	window.Label = 1;
	console.log(Label);
})
WallImg.addEventListener('click',function(e){
    furniture.style.display = "none";
	production.style.display = "none";
	Wall.style.display = "block";
	furnitureImg.src = "imges/menu-furniture-1.png";
	productionImg.src = "imges/menu-production-1.png";
	WallImg.src = "imges/menu-Wall-2.png";
	NumImg0.style.display = "none";
	NumImg1.style.display = "none";
	NumImg2.style.display = "block";
	window.Label = 2;
	console.log(Label);
})
//目录标签切换---------------------------------------------------------

//跟随鼠标模块---------------------------------------------------------
var mouse=document.getElementById('mouse');
document.onmousemove=function(ev){
    var oEvent=ev||event;
    var scrollTop=document.documentElement.scrollTop||document.body.scrollTop;
    var scrollLeft=document.documentElement.scrollLeft||document.body.scrollLeft;
    mouse.style.left=oEvent.clientX+scrollLeft+'px';
    mouse.style.top=oEvent.clientY+scrollTop+'px';
}


//定位div位置---------------------------------------------------------
for (var i = 0; i < canvasNum.length; i++) {
        canvasNum[i].index = i + 1;
}
canvas.addEventListener('click',function(e){
        console.log(e.target.index);
        // console.log(e.target.nodeName);
        if (e.target.nodeName == "DIV") {
        	e.target.firstElementChild.src = IMG;
        	e.target.firstElementChild.style.width = imgw;
        	e.target.firstElementChild.style.height = imgh;
        }
        
        // alert(e.target.index);
})
//定位div位置----------------------------------------------------------


//拖拽功能--------------------------------------------------------------
//鼠标按下catalog
catalog.onmousedown = function(e) {
    //获取x坐标和y坐标
    x = e.clientX;
    y = e.clientY;
    //获取左部和顶部的偏移量
    l = catalog.offsetLeft;
    t = catalog.offsetTop;
    //开关打开
    isDown = true;
    //设置样式  
    catalog.style.cursor = 'move';
    window.isDIV = 1;
}
//鼠标抬起catalog
catalog.onmouseup = function() {
    //开关关闭
    isDown = false;
    catalog.style.cursor = 'default';
    window.isDIV = 0;
}
//鼠标按下zoom
zoom.onmousedown = function(e) {
    //获取x坐标和y坐标
    x = e.clientX;
    y = e.clientY;

    //获取左部和顶部的偏移量
    l = zoom.offsetLeft;
    t = zoom.offsetTop;
    //开关打开
    isDown = true;
    //设置样式  
    zoom.style.cursor = 'move';
    window.isDIV = 2;
}
//鼠标抬起zoom
zoom.onmouseup = function() {
    //开关关闭
    isDown = false;
    zoom.style.cursor = 'default';
    window.isDIV = 0;
}
//鼠标按下camera
camera.onmousedown = function(e) {
    //获取x坐标和y坐标
    x = e.clientX;
    y = e.clientY;
    //获取左部和顶部的偏移量
    l = camera.offsetLeft;
    t = camera.offsetTop;
    //开关打开
    isDown = true;
    //设置样式  
    camera.style.cursor = 'move';
    window.isDIV = 3;
}
//鼠标抬起camera
camera.onmouseup = function() {
    //开关关闭
    isDown = false;
    camera.style.cursor = 'default';
    canvas.style.width = "12em";
    canvas.style.height = "12em";
    window.isDIV = 0;
}
//鼠标移动
window.onmousemove = function(e) {
    if (isDown == false) {
        return;
    }
    //获取x和y
    var nx = e.clientX;
    var ny = e.clientY;
    //计算移动后的左偏移量和顶部的偏移量
    var nl = nx - (x - l);
    var nt = ny - (y - t);
    if (isDIV == 1) {
    	catalog.style.left = nl + 'px';
    	catalog.style.top = nt + 'px';
    }else if (isDIV == 2){
    	zoom.style.left = nl + 'px';
    	zoom.style.top = nt + 'px';
    }else if (isDIV == 3){
    	camera.style.left = nl + 'px';
    	camera.style.top = nt + 'px';
    }
    
}
//拖拽功能---------------------------------------------------------


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


function painting1(){
	window.IMGW = 1;
	window.IMGH = 99;
	window.imgw = "1em";
	window.imgh = "2em";
	window.IMG = "imges/painting-1.png";
	mouse.firstElementChild.src = IMG;
	hNot();
	wNot();
}
function television1(){
	window.IMGW = 2;
	window.IMGH = 3;
	window.imgw = "2em";
	window.imgh = "3em";
	window.IMG = "imges/television-1.png";
	mouse.firstElementChild.src = IMG;
	hNot();
	wNot();
}
function hNot(){
	// 
	var arr1 = document.getElementsByClassName("home-1-h-1");
	var arr2 = document.getElementsByClassName("home-1-h-2");
	var arr3 = document.getElementsByClassName("home-1-h-3");
	var arr4 = document.getElementsByClassName("home-1-h-4");
	var arr5 = document.getElementsByClassName("home-1-h-wall");
	console.log(arr1.length);
	if (IMGH != 99){
		for (var i = 0; i < arr5.length; i++) {
        	arr5[i].classList.remove("home-1-not");
		}
	}else{
		window.arrH = arr1.length;
	}
	if (IMGH == 5) {
		for (var i = 0; i < arr1.length; i++) {
			arr5[i].classList.remove("home-1-not");
        	arr1[i].classList.add("home-1-not");
        	arr2[i].classList.add("home-1-not");
        	arr3[i].classList.add("home-1-not");
        	arr4[i].classList.add("home-1-not");
        	window.arrH = arr1.length - 3;
		}
	}else if(IMGH == 4){
		for (var i = 0; i < arr1.length; i++) {
			arr5[i].classList.remove("home-1-not");
        	arr1[i].classList.add("home-1-not");
        	arr2[i].classList.add("home-1-not");
        	arr3[i].classList.add("home-1-not");
        	arr4[i].classList.remove("home-1-not");
        	window.arrH = arr1.length - 2;
		}
	}else if(IMGH == 3){
		for (var i = 0; i < arr1.length; i++) {
			arr5[i].classList.remove("home-1-not");
        	arr1[i].classList.add("home-1-not");
        	arr2[i].classList.add("home-1-not");
        	arr4[i].classList.remove("home-1-not");
        	arr3[i].classList.remove("home-1-not");
        	window.arrH = arr1.length - 1;
		}
	}else if(IMGH == 2){
		for (var i = 0; i < arr1.length; i++) {
			arr5[i].classList.remove("home-1-not");
        	arr1[i].classList.add("home-1-not");
        	arr4[i].classList.remove("home-1-not");
        	arr3[i].classList.remove("home-1-not");
        	arr2[i].classList.remove("home-1-not");
        	window.arrH = arr1.length;
        	
		}
	}else if(IMGH == 1){
		for (var i = 0; i < arr1.length; i++) {
			arr5[i].classList.remove("home-1-not");
        	arr4[i].classList.remove("home-1-not");
        	arr3[i].classList.remove("home-1-not");
        	arr2[i].classList.remove("home-1-not");
        	arr1[i].classList.remove("home-1-not");
        	window.arrH = arr1.length;
		}
	}
}
function wNot(){
	// alert(IMGW);
	var arr1 = document.getElementsByClassName("home-1-w-1");
	var arr2 = document.getElementsByClassName("home-1-w-2");
	var arr3 = document.getElementsByClassName("home-1-w-3");
	var arr4 = document.getElementsByClassName("home-1-w-4");
	var arr5 = document.getElementsByClassName("home-1-h-wall");
	if (IMGW == 5) {
		for (var i = 0; i < arrH; i++) {
        	arr1[i].classList.add("home-1-not");
        	arr2[i].classList.add("home-1-not");
        	arr3[i].classList.add("home-1-not");
        	arr4[i].classList.add("home-1-not");
		}
	}else if(IMGW == 4){
		for (var i = 0; i < arrH; i++) {
        	arr1[i].classList.add("home-1-not");
        	arr2[i].classList.add("home-1-not");
        	arr3[i].classList.add("home-1-not");
        	arr4[i].classList.remove("home-1-not");
		}
	}else if(IMGW == 3){
		for (var i = 0; i < arrH; i++) {
        	arr1[i].classList.add("home-1-not");
        	arr2[i].classList.add("home-1-not");
        	arr4[i].classList.remove("home-1-not");
        	arr3[i].classList.remove("home-1-not");
		}
	}else if(IMGW == 2){
		for (var i = 0; i < arrH; i++) {
        	arr1[i].classList.add("home-1-not");
        	arr4[i].classList.remove("home-1-not");
        	arr3[i].classList.remove("home-1-not");
        	arr2[i].classList.remove("home-1-not");
		}
	}else if(IMGW == 1){
		for (var i = 0; i < arrH; i++) {
        	arr4[i].classList.remove("home-1-not");
        	arr3[i].classList.remove("home-1-not");
        	arr2[i].classList.remove("home-1-not");
        	arr1[i].classList.remove("home-1-not");
		}
	}
	if (IMGH == 99){
		for (var i = 0; i < arr5.length; i++) {
        	arr5[i].classList.add("home-1-not");
		}
	}
}
var preview = document.getElementById("preview");
camera
html2canvas(camera).then(function(canvas) {
    preview.appendChild(canvas);
    var oCavans = document.getElementsByTagName('canvas')[0];
    var strDataURI1 = oCavans.toDataURL();
    downLoadFn(strDataURI1);
});
 //判断浏览器类型
function myBrowser() {
	var userAgent = navigator.userAgent; //取得浏览器的userAgent字符串
	var isOpera = userAgent.indexOf("Opera") > -1;
	if(isOpera) {
    	return "Opera"
	}; //判断是否Opera浏览器
	if(userAgent.indexOf("Firefox") > -1) {
    	return "FF";
	} //判断是否Firefox浏览器
	if(userAgent.indexOf("Chrome") > -1) {
    	return "Chrome";
	}
	if(userAgent.indexOf("Safari") > -1) {
    	return "Safari";
	} //判断是否Safari浏览器
	if(userAgent.indexOf("compatible") > -1 && userAgent.indexOf("MSIE") > -1 && !isOpera) {
    	return "IE";
	}; //判断是否IE浏览器
	if(userAgent.indexOf("Trident") > -1) {
   	 return "Edge";
	} //判断是否Edge浏览器
}
myBrowser();
//IE浏览器图片保存本地
function SaveAs5(imgURL) {
    var oPop = window.open(imgURL, "", "width=1, height=1, top=5000, left=5000");
    for(; oPop.document.readyState != "complete";) {
        if(oPop.document.readyState == "complete") break;
    }
    oPop.document.execCommand("SaveAs");
    oPop.close();
}
function download(strDataURI1) {
    var link = document.getElementById("IsA");
    link.innerHTML = 'download_canvas_image';
    link.download = 'mypainting.png';
    link.addEventListener('click', function(ev) {
    link.href = strDataURI1;
    }, false);
    // document.body.appendChild(link);
};
function downLoadFn(url) {
    if(myBrowser() === "IE" || myBrowser() === "Edge") {
        SaveAs5(url);
    } else {
        download(url);
    }
}
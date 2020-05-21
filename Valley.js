var House = document.getElementById("House");//房屋主体
var HouseTop = document.getElementById("House-Top");
var HouseMiddle = document.getElementById("House-Middle");
var HouseBottom = document.getElementById("House-bottom");
var menuBodySign = 0;
var IMG = "imges/0.png";//鼠标指针移入图片
var Timg = "imges/0.png";//鼠标指针移除图片
var IMG_T = "-1em";//获取物品向上偏移量
var IMG_L = 0;//获取物品向左偏移量
var IMG_W = "1em";//获取物品宽度
var IMG_H = "2em";//获取物品高度
var state = "common";
House.style.left = "400px";
var isHouse = false;//房屋移动标记
var isDown = false;//标记菜单滚动条是否启用
var isBtnY = false;//标记缩放滚动条是否启用
var isMenu = false;//标记菜单滑动是否启用
var Menu_status = false;//标记菜单状态,防止误触
var Is_state = 0;
var IsE;
var menuBodyBtn = document.getElementById("menu-body-btn");//获取菜单滚动条按钮
var bodyBtn = document.getElementById("body-btn");//获取菜单滚动条按钮
var bodyBtnY = document.getElementById("body-btn-y");//获取缩放滚动条
var Grid_status = false;
var MapWidth;
var Map_Num;
var Grade;
var HouseNumT
var HouseNumM
var HouseNumB
var wall_sign_Arr
var GoodsNumber
var screen_H = screen.height;
if (screen_H < 800) {
	var Title_img = document.getElementById("Title-img");
	var Title_2 = document.getElementById("Title-2");
	Title_img.src = "imges/Choice/TitleX2.png";
	Title_img.className = "Title-img-2";
	Title_2.className = "Title-2-2";
}
function LV_1() {
	Grade = 1;
	var Is_map = [lv1_sign,lv1_furniture_sign,lv1_wall_sign]
	wall_sign_Arr = lv1_wall_sign;
	MapWidth = 12;
	Map_Num = 144;
	establish()
	House.className = "lv1_1";
	var House_bj = document.getElementById("House-bj");
	House_bj.src = "imges/bj/home-1-bj.png";
	HouseTop.className = "House_1"
	HouseMiddle.className = "House_1"
	HouseBottom.className = "House_1"
	House_bj.className = "House-bj_1"
	document.getElementById("wall-1").className = "wall wall-1-1"
	document.getElementById("wall-2").style.display = "none";
	document.getElementById("wall-3").style.display = "none";
	document.getElementById("wall-4").style.display = "none";
	document.getElementById("wall-5").style.display = "none";
	document.getElementById("wall-6").style.display = "none";
	document.getElementById("wall-7").style.display = "none";
	document.getElementById("floor-1").className = "floor floor-1-1";
	document.getElementById("floor-2").style.display = "none";
	document.getElementById("floor-3").style.display = "none";
	document.getElementById("floor-4").style.display = "none";
	document.getElementById("floor-5").style.display = "none";
	document.getElementById("floor-6").style.display = "none";
	document.getElementById("floor-7").style.display = "none";
	HouseNumM[105].firstChild.className = "bed";
	HouseNumM[105].firstChild.src = "imges/bj/bed.png";
	HouseNumM[132].firstChild.src = "imges/bj/home-1-bj-x.png";
	HouseNumM[132].firstChild.className = "home-1-bj-x";
	for (var i = 0 ; i < Is_map.length; i++) {
		for (var x = 0 ; x < Is_map[i].length; x++) {
			var e = (Is_map[i])[x];
			// HouseNumT[e].firstChild.src = "imges/no.png";
			HouseNumB[e].style.pointerEvents = "none";
		}
	}
	for (var y = 0 ; y < HouseNumB.length; y++) {
		if (HouseNumB[y].style.pointerEvents == "none") {
			sign_X.push(1);
			sign_Y.push(1);
			carpet_X.push(1);
			carpet_Y.push(1);
		}else{
			sign_X.push(0);
			sign_Y.push(0);
			carpet_X.push(0);
			carpet_Y.push(0);
		}
	}
	document.getElementById("name-text-1").innerHTML = "初级农舍";//写入名称栏
	document.getElementById("name-text-2").innerHTML = "初级农舍";//写入名称栏
	document.getElementById("describe-1").innerHTML = "想脱单就升个级吧。 ";//写入内容栏
	document.getElementById("describe-2").innerHTML = "想脱单就升个级吧。 ";//写入内容
	document.getElementById("Choice").style.display = "none";
}
function LV_2() {
	Grade = 2;
	var Is_map = [lv2_sign,lv2_furniture_sign,lv2_wall_sign]
	wall_sign_Arr = lv2_wall_sign;
	MapWidth = 30;
	Map_Num = 360;
	establish()
	House.className = "lv2_1";
	var House_bj = document.getElementById("House-bj");
	House_bj.src = "imges/bj/home-2-1-bj.png";
	HouseTop.className = "House_2"
	HouseMiddle.className = "House_2"
	HouseBottom.className = "House_2"
	House_bj.className = "House-bj_2"
	document.getElementById("wall-1").className = "wall wall-1-2"
	document.getElementById("wall-2").className = "wall wall-2-2"
	document.getElementById("wall-3").className = "wall wall-3-2"
	document.getElementById("wall-4").className = "wall wall-4-2";
	document.getElementById("wall-5").className = "wall wall-5-2";
	document.getElementById("wall-6").className = "wall wall-6-2";
	document.getElementById("wall-7").className = "wall wall-7-2";
	document.getElementById("floor-1").className = "floor floor-1-2";
	document.getElementById("floor-2").className = "floor floor-2-2";
	document.getElementById("floor-3").className = "floor floor-3-2";
	document.getElementById("floor-4").className = "floor floor-4-2";
	document.getElementById("floor-5").className = "floor floor-5-2";
	document.getElementById("floor-6").className = "floor floor-6-2";
	document.getElementById("floor-7").className = "floor floor-7-2";
	document.getElementById("roommate").className = "roommate-2";
	HouseNumM[121].firstChild.src = "imges/bj/kitchen-L-M.png";
	HouseNumM[121].firstChild.className = "kitchen-L-M";
	HouseNumM[122].firstChild.src = "imges/bj/kitchen-R-M.png";
	HouseNumM[122].firstChild.className = "kitchen-R-M";
	HouseNumM[141].firstChild.src = "imges/bj/DoubleBed.png";
	HouseNumM[141].firstChild.className = "DoubleBed";
	HouseNumM[330].firstChild.src = "imges/bj/home-2-bj-x.png";
	HouseNumM[330].firstChild.className = "home-2-bj-x";
	for (var i = 0 ; i < Is_map.length; i++) {
		for (var x = 0 ; x < Is_map[i].length; x++) {
			var e = (Is_map[i])[x];
			// HouseNumT[e].firstChild.src = "imges/no.png";
			HouseNumB[e].style.pointerEvents = "none";
		}
	}
	for (var y = 0 ; y < HouseNumB.length; y++) {
		if (HouseNumB[y].style.pointerEvents == "none") {
			sign_X.push(1);
			sign_Y.push(1);
			carpet_X.push(1);
			carpet_Y.push(1);
		}else{
			sign_X.push(0);
			sign_Y.push(0);
			carpet_X.push(0);
			carpet_Y.push(0);
		}
	}
	document.getElementById("name-text-1").innerHTML = "中级农舍";//写入名称栏
	document.getElementById("name-text-2").innerHTML = "中级农舍";//写入名称栏
	document.getElementById("describe-1").innerHTML = "增加了一个厨房一个卧室，床从单人的升级为双人的，可以结婚。";//写入内容栏
	document.getElementById("describe-2").innerHTML = "增加了一个厨房一个卧室，床从单人的升级为双人的，可以结婚。";//写入内容
	document.getElementById("Choice").style.display = "none";
	document.getElementById("Choice").style.display = "none";
}
function LV_3() {
	LV_4()
	HouseNumM[840].firstChild.src = "imges/bj/home-3-b-bj.png";
	document.getElementById("name-text-1").innerHTML = "高级农舍";//写入名称栏
	document.getElementById("name-text-2").innerHTML = "高级农舍";//写入名称栏
	document.getElementById("describe-1").innerHTML = "增加了两个新房间，一个是空着的，还有一个有一张婴儿床以及两个单人床。  ";//写入内容栏
	document.getElementById("describe-2").innerHTML = "增加了两个新房间，一个是空着的，还有一个有一张婴儿床以及两个单人床。  ";//写入内容
	document.getElementById("Choice").style.display = "none";
}
function LV_4() {
	Grade = 4;
	MapWidth = 35;
	Map_Num = 875;
	var Is_map = [lv4_sign,lv4_furniture_sign,lv4_wall_sign]
	wall_sign_Arr = lv4_wall_sign;
	establish();
	HouseNumM[155].firstChild.src = "imges/bj/BabyDed.png";
	HouseNumM[155].firstChild.className = "BabyDed";
	HouseNumM[162].firstChild.src = "imges/bj/bed.png";
	HouseNumM[162].firstChild.className = "bed";
	HouseNumM[166].firstChild.src = "imges/bj/bed.png";
	HouseNumM[166].firstChild.className = "bed";
	HouseNumM[456].firstChild.src = "imges/bj/kitchen-L.png";
	HouseNumM[456].firstChild.className = "kitchen-L";
	HouseNumM[459].firstChild.src = "imges/bj/kitchen-R.png";
	HouseNumM[459].firstChild.className = "kitchen-R";
	HouseNumM[482].firstChild.src = "imges/bj/DoubleBed.png";
	HouseNumM[482].firstChild.className = "DoubleBed";
	HouseNumM[315].firstChild.src = "imges/bj/home-4-t-bj.png";
	HouseNumM[315].firstChild.className = "home-4-2-t-bj";
	HouseNumM[840].firstChild.src = "imges/bj/home-4-b-bj.png";
	HouseNumM[840].firstChild.className = "home-4-2-b-bj";
	for (var i = 0 ; i < Is_map.length; i++) {
		for (var x = 0 ; x < Is_map[i].length; x++) {
			var e = (Is_map[i])[x];
			// HouseNumT[e].firstChild.src = "imges/no.png";
			HouseNumB[e].style.pointerEvents = "none";
		}
	}
	for (var y = 0 ; y < HouseNumB.length; y++) {
		if (HouseNumB[y].style.pointerEvents == "none") {
			sign_X.push(1);
			sign_Y.push(1);
			carpet_X.push(1);
			carpet_Y.push(1);
		}else{
			sign_X.push(0);
			sign_Y.push(0);
			carpet_X.push(0);
			carpet_Y.push(0);
		}
	}
	document.getElementById("name-text-1").innerHTML = "顶级农舍";//写入名称栏
	document.getElementById("name-text-2").innerHTML = "顶级农舍";//写入名称栏
	document.getElementById("describe-1").innerHTML = "增加了地窖，入口设在厨房。玩家可以用地窖中的酒桶陈酿酒和奶酪，使之价值更高。 ";//写入内容栏
	document.getElementById("describe-2").innerHTML = "增加了地窖，入口设在厨房。玩家可以用地窖中的酒桶陈酿酒和奶酪，使之价值更高。 ";//写入内容
	document.getElementById("Choice").style.display = "none";
}

function establish() {
	for(var i = 0; i < Map_Num; i++){
		createHtml_T();//创建网格层
		createHtml_M();//创建物品层
		createHtml_B();//创建地板层	
	}
	HouseNumT = House.getElementsByClassName("House-T");//获取网格层集合
	HouseNumM = House.getElementsByClassName("House-M");//获取物品层集合
	HouseNumB = House.getElementsByClassName("House-B");//获取地板层集合
	for(var i = 0; i < Map_Num; i++){
		HouseNumB[i].index = i;//给地块编号
	}
	for (var i = 0; i < HouseNumB.length; i++) {
		sign_wall_X.push(1)
	}
	for (var i = 0; i < wall_sign_Arr.length; i++) {
		var e = wall_sign_Arr[i]
		sign_wall_X.splice(e,1,0)
	}
	console.log(HouseNumT.length);
}

var y = 0;
var t = 0;
var x = 0;
var l = 0;
var nl = 20;
var HouseX = 0;
var HouseY = 0;
var HouseT = 0;
var HouseL = 0;
var HouseNl = 0;
var HouseNt = 0;
var BtnYNum = 4;
var menuBody = document.getElementById("menu-body");//物品栏

	




function createHtml_T(){//创建网格层
	var div = document.createElement("div");
	var Img = document.createElement("img");
	Img.src = "imges/0.png";
	div.appendChild(Img);
	HouseTop.appendChild(div).className = "House-T";
}
function createHtml_M(){//创建物品层
	var div = document.createElement("div");
	var Img = document.createElement("img");
	Img.src = "imges/0.png";
	div.appendChild(Img);
	HouseMiddle.appendChild(div).className = "House-M";
}
function createHtml_B(){//创建地板层
	var div = document.createElement("div");
	var Img = document.createElement("img");
	Img.src = "imges/0.png";
	div.appendChild(Img);
	HouseBottom.appendChild(div).className = "House-B";
}
House.onmousedown = function(e) {//鼠标移入农场时开启农场移动状态
    //获取坐标
    HouseX = e.clientX;
    HouseY = e.clientY;
    //获取偏移量
    HouseT = House.offsetTop;
    HouseL = House.offsetLeft;
    //开关打开
    isHouse = true;
    //设置样式  
}
bodyBtn.onmousedown = function(e) {//鼠标移入菜单滚动条时开启农场移动状态
    if (e.target.nodeName == "IMG") {
		y = e.clientY;//获取y坐标
		t = bodyBtn.offsetTop;//获取顶部的偏移量
		isDown = true;//开关打开
	}
}
menuBody.onmousedown = function(e) {
	if (e.target.id != "body-btn") {
		y = e.clientY;//获取y坐标
		t = myMenu.offsetTop;//获取顶部的偏移量
		isMenu = true;//开关打开
	}
}
window.onmousemove = function(e) {//移动功能函数
    if (isDown == true) {//菜单滚动条
        var ny = e.clientY;
		//计算移动后的左偏移量和顶部的偏移量
		var nt = ny - (y - t);
		if (nt < 0) {
			var nt = 0;
		}else if (nt > bodyBtnNum){
			var nt = bodyBtnNum;
		}
		if (menuBody.offsetHeight > myMenu.offsetHeight) {
			var nt = 0;
		}
		bodyBtn.style.top = nt + "px";
		myMenu.style.bottom = nt/q3 + "px";
    }else if (isBtnY == true) {//缩放滚动条
        var nx = e.clientX;
		nl = nx - (x - l);
	    bodyBtnY.style.left = nl + "px";
	    if (nl > 20 && nl < 70) {
			document.body.id = "body-1";
			House.style.left = (document.body.clientWidth - 320)/2 - House.offsetWidth/2 + 320 + "px";
			House.style.top = window.screen.height/2 - House.offsetHeight/2 + "px";
		}else if (nl > 70 && nl < 140) {
			document.body.id = "body-2";
			House.style.left = (document.body.clientWidth - 320)/2 - House.offsetWidth/2 + 320 + "px";
			House.style.top = window.screen.height/2 - House.offsetHeight/2 + "px";
		}else if (nl > 140 && nl < 215){
			document.body.id = "body-3";
			House.style.left = (document.body.clientWidth - 320)/2 - House.offsetWidth/2 + 320 + "px";
			House.style.top = window.screen.height/2 - House.offsetHeight/2 + "px";
		}
		else if (nl > 215 && nl < 236){
			document.body.id = "body-4";
			House.style.left = (document.body.clientWidth - 320)/2 - House.offsetWidth/2 + 320 + "px";
			House.style.top = window.screen.height/2 - House.offsetHeight/2 + "px";
		}
		else if (nl > 236){
			bodyBtnY.style.left = "236px";
		}else if (nl < 20){
			bodyBtnY.style.left = "20px";
		}
    }else if (isHouse == true) {//移动房屋
    	var HouseNx = e.clientX;
        var HouseNy = e.clientY;
        HouseNl = HouseNx - (HouseX - HouseL);
        HouseNt = HouseNy - (HouseY - HouseT);
        House.style.left = HouseNl + "px";
        House.style.top = HouseNt + "px";
    }else if (isMenu == true) {
    	var ny = e.clientY;
		//计算移动后的左偏移量和顶部的偏移量
		var nt = ny - (y - t + 20);
		if (nt > 0) {
			var nt = 0;
		}else if (nt < -q1){
			var nt = -q1;
		}
		if (menuBody.offsetHeight > myMenu.offsetHeight) {
			var nt = 0;
		}
		myMenu.style.bottom = -nt + "px";
		bodyBtn.style.top = -(nt*q3) + "px";
    }
}
window.onmouseup = function() {//结束移动函数
	//开关关闭
	if (isDown == true) {
		isDown = false;
	}else if (isBtnY == true) {
		isBtnY = false;
		if (nl > 20 && nl < 70) {//判断拖动结束时滚动条对应位置以及比例
			bodyBtnY.style.left = "20px";
		}else if (nl > 70 && nl < 140) {
			bodyBtnY.style.left = "86px";
		}else if (nl > 140 && nl < 215){
			bodyBtnY.style.left = "157px";
		}
		else if (nl > 215 && nl < 236){
			bodyBtnY.style.left = "236px";
		}
		else if (nl > 236){
			bodyBtnY.style.left = "236px";
		}else if (nl < 20){
			bodyBtnY.style.left = "20px";
		}
    }else if (isHouse == true) {
    	isHouse = false;
	}else if (isMenu == true) {
		isMenu = false;
	}
}

var menuBtn = document.getElementById("menu-btn");//菜单按钮
var menuNum = menuBtn.querySelectorAll("img");//菜单按钮集合
var menuBody = document.getElementById("menu-body");//物品栏
var menuBody1 = document.getElementById("menu-body-1");//物品栏第一页
var menuBodyNum = menuBody.getElementsByClassName("menu-body");//物品栏集合
for(var i = 0; i < menuNum.length; i++){
	menuNum[i].index = i;//给菜单按钮编号
}
for(var i = 0; i < menuBodyNum.length; i++){
	menuBodyNum[i].index = i;//物品栏编号
	if (i != 0) {
		menuBodyNum[i].style.display = "none";//关闭其他物品栏页面
	}
}
var myMenu = menuBodyNum[0];//创建"当前菜单"
var MenuArr = document.getElementById("menu-body-0").getElementsByClassName("menu-body");
var menuH = menu.offsetHeight;//获取菜单栏高度
menuBody.style.height = menuH - 288 + "px";//设置菜单也显示区高度
menuBodyBtn.style.height = menuH - 300 + "px";//设置菜单滚动条高度
var bodyBtnNum = menuH - 340;//滚动条长度
var q1 = myMenu.offsetHeight - menuBody.offsetHeight;
var q2 = menuBodyBtn.offsetHeight - bodyBtn.offsetHeight;
var q3 = q2/q1;
var signX = 1;//当前物品占地宽度
var signY = 1;//当前物品占地高度
menuNum[0].style.left = "-8px";//校准一个菜单按钮位置
///////////////////////////////////点击菜单按钮功能/////////////////////////////////////
menuBtn.addEventListener("click",function(e){
	state = "common";//将状态设置为"通常"
	document.getElementById("Pickaxe").src = "imges/Pickaxe-1.png";
	Menu_status = false;//进入菜单模式
	IMG = "imges/0.png";//初始化鼠标指针图片
	if (e.target.index != 8) {//菜单按钮切换函数
		menuBodySign = e.target.index;//标记当前菜单序号
		console.log(e.target.index);//显示当前菜单序号
		for(var i = 0; i < 8; i++){//设置菜单页面状态
			menuNum[i].style.left = "0";
			menuBodyNum[i].style.display = "none";
			menuBodyNum[i].style.bottom = 0;
			if (menu.style.left == "-320px" || menu.style.left == 0) {//初始化菜单位置
				menu.style.left = "0";
				menuNum[8].src = "imges/button/arrow-2.png";
			}
		}
		menuBodyNum[e.target.index].style.display = "flex";//显示被点击的菜单
		var myMenu = menuBodyNum[e.target.index];//获取当前菜单
		if (menuBody.offsetHeight > myMenu.offsetHeight) {
			menuBodyBtn.style.display = "none";
			myMenu.style.left = "22px";
		}else{
			menuBodyBtn.style.display = "block";
		}
		window.q1 = myMenu.offsetHeight - menuBody.offsetHeight;//获取菜单页面高度信息
		window.q2 = menuBodyBtn.offsetHeight - bodyBtn.offsetHeight;//获取滚动条高度信息
		window.q3 = q2/q1;//页面和滚动条映射关系
		e.target.style.left = "-8px";//校准菜单位置
		window.myMenu = menuBodyNum[e.target.index];//定义"当前菜单"
		bodyBtn.style.top = 0;//初始化滚动条位置c
	}
	var name_text = document.getElementById("name-text");
	if (e.target.index == 4 || e.target.index == 5 || e.target.index == 6) {
		for (var i = 0 ; i < HouseNumT.length; i++) {
			HouseNumT[i].firstChild.src = "imges/0.png";
		}
	}
	if (e.target.index == 7) {
		var name_text_1 = document.getElementById("name-text-1");
		var name_text_2 = document.getElementById("name-text-2");
		var describe_1 = document.getElementById("describe-1");
		var describe_2 = document.getElementById("describe-2");
		name_text_1.innerHTML = "缩放等级";//写入名称栏
		name_text_2.innerHTML = "缩放等级";//写入名称栏
		describe_1.innerHTML = "调整当前画面显示倍率<br>（当前倍率：4）";//写入内容栏
		describe_2.innerHTML = "调整当前画面显示倍率<br>（当前倍率：4）";//写入内容栏
	}
	document.getElementById("rotate").style.display = "none";
	document.getElementById("Discoloration").style.display = "none";
	document.getElementById("del").style.display = "none";
})




function MenuSwitch() {//显示/隐藏菜单功能
	if (menu.style.left == "0px" || menu.style.left == 0) {
		menu.style.left = "-320px";
		menuNum[8].src = "imges/button/arrow-1.png";
	}else{
		menu.style.left = "0";
		menuNum[8].src = "imges/button/arrow-2.png";
	}
}




// var menuBody0Num = [51,17,26,8,38,19,5];//菜单页内按钮行数
// var menuBody0Num1 = [150,48,77,25,111,55,12];//菜单页内按钮数量
// var menuBody0Class = ["other-icon","other-icon","other-icon","other-icon","other-icon","other-icon"];//菜单页内按钮class
// for (var i = 0 ; i < menuBodyNum.length; i++) {//生成按钮
// 	var N = menuBodyNum[i];
// 	var M = menuBody0Num1[i];
// 	for (var x = 0 ; x < menuBody0Num[i]*3; x++) {
// 		var Img = document.createElement("img");
// 		Img.src = "imges/icon/" + i + "/" + x + ".png";
// 		Img.index = x;
// 		if (x > M) {//空按钮,填充空位
// 			Img.src = "imges/0.png";
// 			Img.style.pointerEvents = "none";
// 		}
// 		N.appendChild(Img).className = menuBody0Class[i];
// 	}
// }



var menuBody0Num = [55,21,27,8,19,19,5,2];//菜单页内按钮行数
var menuBody0Num1 = [164,61,78,23,56,55,13,4];//菜单页内按钮数量
var menuBody0Class = "other-icon";//菜单页内按钮class
for (var i = 0 ; i < menuBodyNum.length; i++) {//生成按钮
	var N = menuBodyNum[i];
	var M = menuBody0Num1[i];
	for (var x = 0 ; x < menuBody0Num[i]; x++) {
		for (var y = 0 ; y < 3; y++) {
			var div = document.createElement("div");
			div.style.background = "url(imges/icon/" + i + ".png)";
			div.index = y + (x*3);
			div.style.backgroundPosition = y*-64 + "px" + " " + x*-64 + "px";
			// div.innerHTML = y + (x*3);
			N.appendChild(div).className = menuBody0Class;
			if (y + (x*3) > M) {//空按钮,填充空位
				div.src = "imges/0.png";
				div.style.pointerEvents = "none";
			}
		}
		
		
		
	}
}





House.onmouseover = function(e){//鼠标移入地块
	switch (state){
	case "common":
	if (e.target.index != undefined) {
		if (menuBodySign== 3) {
			var Z = HouseNumB;
		}else{
			var Z = HouseNumM;
		}
		Timg = Z[e.target.index].firstChild.src;
		Z[e.target.index].firstChild.src = IMG;
		Z[e.target.index].firstChild.style.top = IMG_T;
		Z[e.target.index].firstChild.style.width = IMG_W;
		Z[e.target.index].firstChild.style.height = IMG_H;
	}
	break;
	}
}
House.onmouseout = function(e){//鼠标移出地块
	switch (state){
	case "common":
	if (e.target.index != undefined) {
		if (menuBodySign== 3) {
			HouseNumB[e.target.index].firstChild.src = Timg;
		}else{
			HouseNumM[e.target.index].firstChild.src = Timg;
		}
	}
	break;
	}
}


menuBody.addEventListener("click",function(e){
	if (e.target.className == "other-icon") {//判断被点击目标的是否为img
		Menu_status = true;//标记菜单状态
		otherSign = e.target.index;//获取物品序号
		console.log(otherSign);
		Is_state = 0;
		switch (menuBodySign){
		case 0:
		if (e.target.id != "body-btn") {
			if (otherSign != undefined) {//当前有选中的物品
				IMG = "imges/" + menuBodySign + "/" + otherSign + "/" + Is_state + ".png";//刷新移入时贴图
				NAME = furniture_Arr[otherSign];
				Write();//点击按钮非滚动条时执行写入数据	
			}
			HouseBottom.style.pointerEvents = "auto";
		 	Initialization();
		 	signMap();
		 	signMapX();
		}
		break;
		case 1:
		if (e.target.id != "body-btn") {
			if (otherSign != undefined) {//当前有选中的物品
				IMG = "imges/" + menuBodySign + "/" + otherSign + ".png";//刷新移入时贴图
			}
			NAME = furniture_Arr[otherSign];
			HouseBottom.style.pointerEvents = "auto";
		 	Write();//点击按钮非滚动条时执行写入数据
		 	wall_sign();
		 	wall_sign_X();
			console.log(wall_Arr[otherSign]);
		}
		break;
		case 2:
		if (otherSign != undefined) {//当前有选中的物品
			IMG = "imges/" + menuBodySign + "/" + otherSign +  ".png";//刷新移入时贴图
			NAME = toolNum[otherSign];
		 	Write();//点击按钮非滚动条时执行写入数据	
		}
		 	Initialization();
		 	HouseBottom.style.pointerEvents = "auto";
		 	signMap();
		 	signMapX();
		
		break;
		case 3:
		if (otherSign != undefined) {//当前有选中的物品
			IMG = "imges/" + menuBodySign + "/" + otherSign + "/" + Is_state + ".png";//刷新移入时贴图
			NAME = carpetNum[otherSign];
		 	Write();//点击按钮非滚动条时执行写入数据
		 	Initialization();
		 	HouseBottom.style.pointerEvents = "auto";
			sign_carpet();
			sign_carpet_X();
		}
		break;
		case 4:
		Write()
		HouseBottom.style.pointerEvents = "none";
		for (var i = 0 ; i < HouseNumB.length; i++) {
			HouseNumB[i].style.pointerEvents = "none";
		}
		break;
		case 5:
		Write()
		HouseBottom.style.pointerEvents = "none";
		for (var i = 0 ; i < HouseNumB.length; i++) {
			HouseNumB[i].style.pointerEvents = "none";
		}
		break;
		case 6:
		var roommate = document.getElementById("roommate");
		var House_bj = document.getElementById("House-bj");
		if (Grade == 4) {
			if (otherSign == 13) {
				roommate.style.display = "none";
				House_bj.src = "imges/bj/home-4-1-bj.png";
				House.className = "lv4_1";
				for (var i = 0 ; i < lv4_roommate.length; i++) {
					var n = lv4_roommate[i];
					sign_X.splice(n,1,1)
					sign_Y.splice(n,1,1)
				}
			}else{
				roommate.style.display = "block";
				roommate.src = "imges/6/" + otherSign + ".png";
				House_bj.src = "imges/bj/home-4-2-bj.png";
				House.className = "lv4_2";
				for (var i = 0 ; i < lv4_roommate.length; i++) {
					var n = lv4_roommate[i];
					sign_X.splice(n,1,0)
					sign_Y.splice(n,1,0)
				}
			}
		}else if (Grade == 2) {
			if (otherSign == 13) {
				roommate.style.display = "none";
				House_bj.src = "imges/bj/home-2-1-bj.png";
				House.className = "lv2_1";
				for (var i = 0 ; i < lv4_roommate.length; i++) {
					var n = lv4_roommate[i];
					sign_X.splice(n,1,1)
					sign_Y.splice(n,1,1)
				}
			}else{
				roommate.style.display = "block";
				roommate.src = "imges/6/" + otherSign + ".png";
				House_bj.src = "imges/bj/home-2-2-bj.png";
				House.className = "lv2_2";
				for (var i = 0 ; i < lv4_roommate.length; i++) {
					var n = lv4_roommate[i];
					sign_X.splice(n,1,0)
					sign_Y.splice(n,1,0)
				}
			}
		}
		
		Write();
		break;
		case 7:
		var IsBody =  document.getElementById("name-text");
		var IsBodyArr = ["body-1","body-2","body-3","body-4"];
		document.body.id = IsBodyArr[otherSign];
		var describe_1 = document.getElementById("describe-1");
		var describe_2 = document.getElementById("describe-2");
		describe_1.innerHTML = "调整当前画面显示倍率<br>（当前倍率：" + (otherSign + 1) + "）";//写入内容栏
		describe_2.innerHTML = "调整当前画面显示倍率<br>（当前倍率：" + (otherSign + 1) + "）";//写入内容栏
		break;
		}
		document.getElementById("Pickaxe").src = "imges/Pickaxe-1.png";
		document.getElementById("del").style.display = "none";
		state = "common";
		console.log(state);
		change_Num = 0;
	}
})

House.addEventListener("click",function(e){
	console.log(e.target.index);//显示点击位置坐标
	// console.log(e.target);//显示点击位置坐标
	if (e.target.nodeName == "DIV" && Menu_status == true) {//判断被点击位置是否"div"及菜单状态是否正常
		if (state != "Pickaxe") {
			if ( menuBodySign == 4 || menuBodySign == 5 || e.target.index != undefined) {//判断被点击的位置是否可选
			
				var n = e.target;
				IsE = e.target.index;//保存当前坐标
				var e = e.target.index;//简化坐标变量名长度
				switch (menuBodySign){//判断当前工具状态
				case 0://菜单序号为建筑
				IsAdd();
				HouseNumM[e].firstChild.src = IMG//
				Timg = HouseNumM[e].firstChild.src;
				HouseNumB[e].style.pointerEvents = "none";
				Initialization()
			 	signMap()
			 	signMapX()
				break;
				case 1:
				HouseNumM[e].firstChild.src = IMG;//
				wall_Position.push(IsE);//写入坐标
				wall_X.push(signX)
				wall_name.push(otherSign);//写入物品序号
				HouseNumM[e].firstChild.style.width = IMG_W;//设置物品宽度
				HouseNumM[e].firstChild.style.height = IMG_H;//设置物品高度
				sign_X.splice(IsE,1,signX);//写入物品宽度
				sign_Y.splice(IsE,1,signY);//写入物品高度
				Timg = HouseNumM[e].firstChild.src;
				HouseNumB[e].style.pointerEvents = "none";
				wall_sign();
			 	wall_sign_X();
				break;
				case 2:
				IsAdd();
				HouseNumM[e].firstChild.src = IMG;//
				Timg = HouseNumM[e].firstChild.src;
				HouseNumB[e].style.pointerEvents = "none";
				Initialization();
			 	signMap();
			 	signMapX();
				break;
				case 3:
				IsAdd();
				if (otherSign == 23) {
					HouseNumB[e].firstChild.src = "imges/" + menuBodySign + "/" + otherSign + "/" + Math.ceil(Math.random()*16) + ".png";
				}else{
					HouseNumB[e].firstChild.src = IMG;//
				}
				
				Timg = HouseNumB[e].firstChild.src;
				HouseNumB[e].style.pointerEvents = "none";
				Initialization();
				sign_carpet();
				sign_carpet_X();
				if (otherSign > 12) {
					floor()
				}
				// console.log(carpet_Position)
				// console.log(carpet_Catalog)
				// console.log(carpet_name)
				// console.log(carpet_Number)
				// console.log(carpet_state)
				break;
				case 4:
				console.log(n);
				if (n.getAttribute("class").indexOf("wall") > - 1) {
					n.style.background = "url(imges/wall/" + otherSign + ".png)";
					n.style.backgroundSize = "1em";
				}
				break;
				case 5:
				console.log(n);
				if (n.getAttribute("class").indexOf("floor") > - 1) {
					n.style.background = "url(imges/floor/" + otherSign + ".png)";
					n.style.backgroundSize = "2em";
				}
				
				break;
				}
			}	
		}
		
		if (state == "Pickaxe") {
			var e = e.target.index;
			HouseNumM[e].firstChild.src = "imges/0.png";//
			HouseNumB[e].firstChild.src = "imges/0.png";//
			var Del_Position = Position.indexOf(e);//获取物品坐标位置
			var Del_wall = wall_Position.indexOf(e);//获取地板坐标位置
			var Del_carpet = carpet_Position.indexOf(e);//获取栅栏坐标位置
			if (Del_Position != -1) {
				Position.splice(Del_Position,1);
				Position_Catalog.splice(Del_Position,1);
				Position_name.splice(Del_Position,1);
				Position_Number.splice(Del_Position,1);
				Position_state.splice(Del_Position,1);
				sign_X.splice(e,1,0);//删除宽度标记
				sign_Y.splice(e,1,0);//删除高度标记
			}
			if (Del_wall != -1) {
				wall_Position.splice(Del_wall,1);
				wall_name.splice(Del_wall,1);
				wall_X.splice(Del_wall,1);
				sign_wall_X.splice(e,1,0);//删除宽度标记
			}
			if (Del_carpet != -1) {
				carpet_Position.splice(Del_carpet,1);
				carpet_Catalog.splice(Del_carpet,1);
				carpet_name.splice(Del_carpet,1);
				carpet_Number.splice(Del_carpet,1);
				carpet_state.splice(Del_carpet,1);
				carpet_X.splice(e,1,0);
				carpet_Y.splice(e,1,0);
				floor()
			}
			for (var i = 0; i < HouseNumB.length; i++) {
				HouseNumB[i].style.pointerEvents = "auto";
				if (Grid_status == true) {
					HouseNumT[i].firstChild.src = "imges/yes.png";
				}	
			}
		}	
	}
})


var Position = [];
var Position_Catalog = [];
var Position_name = [];
var Position_Number = [];
var Position_state = [];
var sign_X = [];
var sign_Y = [];


var wall_Position = [];
var wall_name = [];
var wall_X = [];
var sign_wall_X = [];

var carpet_Position = [];
var carpet_Catalog = [];
var carpet_name = [];
var carpet_Number = [];
var carpet_state = [];
var carpet_X = [];
var carpet_Y = [];


function Write() {//获取当前物品数据
	// console.log("Write");
	var name_text_1 = document.getElementById("name-text-1");
	var name_text_2 = document.getElementById("name-text-2");
	var describe_1 = document.getElementById("describe-1");
	var describe_2 = document.getElementById("describe-2");
	if (menuBodySign == 1) {
		signX = wall_Arr[otherSign];//获取当前物品占地宽度
		signY = 1;
		IMG_W = wall_Arr[otherSign] + "em";
		IMG_H = "2em";
		IMG_T = "0em";
		name_txt = wall_name_text[otherSign];
		describe_text = "可以放进你的房子。";
	}else if (menuBodySign == 4) {
		name_txt = "壁纸";//
		describe_text = "装饰一间房间的墙面。";//
		GoodsNumber = 1;
	}else if (menuBodySign == 5) {
		name_txt = "铺地板";//
		describe_text = "装饰一间房间的地板。";//
		GoodsNumber = 1;
	}else if (menuBodySign == 6) {
		name_txt = roommate_name[otherSign];//
		describe_text = roommate_text[otherSign];//
	}else{
		signX = NAME[0];//获取当前物品占地宽度
		signY = NAME[1];//获取当前物品占地高度
		IMG_W = NAME[2];//获取当前物品宽度
		IMG_H = NAME[3];//获取当前物品高度
		IMG_T = NAME[4];//获取当前物品向上偏移量
		GoodsNumber = NAME[5];//
		name_txt = NAME[6];//
		describe_text = NAME[7];//
		
	}
	name_text_1.innerHTML = name_txt;//写入名称栏
	name_text_2.innerHTML = name_txt;//写入名称栏
	describe_1.innerHTML = describe_text;//写入内容栏
	describe_2.innerHTML = describe_text;//写入内容栏
	// console.log(signX);
	// console.log(signY);
	// console.log(IMG_W);
	// console.log(IMG_H);
	// console.log(IMG_T);
	// console.log(signX);
	// console.log(signY);
	// console.log(IMG_icon_T);
	// console.log(IMG_icon_W);
	// console.log(IMG_icon_H);
	if (menuBodySign != 6 && GoodsNumber != 1) {
		if (GoodsNumber == 20) {
			document.getElementById("Discoloration").style.display = "block";
		}else{
			document.getElementById("rotate").style.display = "block";
		}
	}else{
		document.getElementById("Discoloration").style.display = "none";
		document.getElementById("rotate").style.display = "none";
	}
}






function IsAdd() {//将物品信息写入数据库
	if (menuBodySign == 3) {
		carpet_Position.push(IsE);//写入坐标
		carpet_Catalog.push(menuBodySign);//写入目录序号
		carpet_name.push(otherSign);//写入物品序号
		carpet_Number.push(GoodsNumber);//写入变化状态数量
		carpet_state.push(Is_state);//写入当前状态
		carpet_X.splice(IsE,1,signX);//写入物品宽度
		carpet_Y.splice(IsE,1,signY);//写入物品高度
	}else{
		Position.push(IsE);//写入坐标
		Position_Catalog.push(menuBodySign);//写入目录序号
		Position_name.push(otherSign);//写入物品序号
		Position_Number.push(GoodsNumber);//写入变化状态数量
		Position_state.push(Is_state);//写入当前状态
		sign_X.splice(IsE,1,signX);//写入物品宽度
		sign_Y.splice(IsE,1,signY);//写入物品高度
	}
		
	HouseNumM[IsE].firstChild.style.top = IMG_T;//设置纵向偏移
	HouseNumM[IsE].firstChild.style.width = IMG_W;//设置物品宽度
	HouseNumM[IsE].firstChild.style.height = IMG_H;//设置物品高度
		// console.log(Position);
		// console.log(Position_name);
		// console.log(Position_Catalog);
		// console.log(Position_Season_spring);
		// console.log(Position_Season_summer);
		// console.log(Position_Season_autumn);
		// console.log(Position_Season_winter);
		// console.log(Position_Number);
		// console.log(sign_X);
		// console.log(sign_Y);
}











function Initialization() {//将所有未标记地块设置为可选
	// console.log("Initialization");
	for (var i = 0; i < sign_X.length; i++) {
		if (sign_X[i] == 0) {
			HouseNumB[i].style.pointerEvents = "auto";
			HouseNumB[i].firstChild.style.background = "";
			HouseNumB[i].firstChild.style.opacity =  "1";
			HouseNumT[i].firstChild.src = "imges/0.png";
			if (Grid_status == true) {
				HouseNumT[i].firstChild.src = "imges/yes.png";
			}
		}else{
			HouseNumB[i].style.pointerEvents = "none";
			HouseNumT[i].firstChild.src = "imges/0.png";
			// HouseNumT[i].firstChild.src = "imges/no.png";
		}
	}
}
function signMap() {//设置高度大于2的物品纵向禁用地块
	// console.log("signMap");
	for (var i = 0; i < sign_X.length; i++) {
		if (sign_X[i] != 0) {
			for (var x = 0; x < sign_X[i]; x++) {
				for (var y = 0; y < sign_Y[i]; y++) {
					HouseNumB[i+x-MapWidth*y].style.pointerEvents = "none";
					HouseNumT[i+x-MapWidth*y].firstChild.src = "imges/0.png";
					// HouseNumT[i+x-MapWidth*y].firstChild.src = "imges/no.png";
				}
			}
		}
	}
}

function signMapX() {
	// console.log("signMapX");
	for (var i = 0; i < sign_X.length; i++) {
		if (sign_X[i] != 0 && i-signX+1 > 0) {
			for (var x = 0; x < signX; x++) {
				HouseNumB[i-x].style.pointerEvents = "none";
				HouseNumT[i-x].firstChild.src = "imges/0.png";
				// HouseNumT[i-x].firstChild.src = "imges/no.png";
				for (var y = 0; y < sign_Y[i]; y++) {
					if (i-x-MapWidth*y > 0) {
						HouseNumB[i-x-MapWidth*y].style.pointerEvents = "none";
						HouseNumT[i-x-MapWidth*y].firstChild.src = "imges/0.png";
						// HouseNumT[i-x-MapWidth*y].firstChild.src = "imges/no.png";
					}
				}
			}
		}
		if (sign_X[i] != 0) {
			for (var x = 0; x < sign_X[i]; x++) {
				for (var y = 0; y < signY; y++) {
					if (i+x+MapWidth*y < Map_Num) {
						HouseNumB[i+MapWidth*y+x].style.pointerEvents = "none";
						HouseNumT[i+MapWidth*y+x].firstChild.src = "imges/0.png";
						// HouseNumT[i+MapWidth*y+x].firstChild.src = "imges/no.png";
					}
				}
			}
			for (var x = 0; x < signX; x++) {
				for (var y = 1; y < signY; y++) {
					if (i+MapWidth*y-x > 0 && i+MapWidth*y-x <Map_Num) {
						HouseNumB[i-x+MapWidth*y].style.pointerEvents = "none";
						HouseNumT[i-x+MapWidth*y].firstChild.src = "imges/0.png";
						// HouseNumT[i-x+MapWidth*y].firstChild.src = "imges/no.png";
					}
				}
			}
		}
	}
}

function sign_carpet() {//设置高度大于2的物品纵向禁用地块
	// console.log("signMap");
	for (var i = 0; i < carpet_X.length; i++) {
		if (carpet_X[i] != 0) {
			for (var x = 0; x < carpet_X[i]; x++) {
				for (var y = 0; y < carpet_Y[i]; y++) {
					HouseNumB[i+x-MapWidth*y].style.pointerEvents = "none";
					HouseNumT[i+x-MapWidth*y].firstChild.src = "imges/0.png";
				}
				// 	HouseNumT[i+x-MapWidth*y].firstChild.src = "imges/no.png";
				// }
			}
		}
	}
}

function sign_carpet_X() {
	// console.log("signMapX");
	for (var i = 0; i < carpet_X.length; i++) {
		if (carpet_X[i] != 0 && i-signX+1 > 0) {
			for (var x = 0; x < signX; x++) {
				HouseNumB[i-x].style.pointerEvents = "none";
				HouseNumT[i-x].firstChild.src = "imges/0.png";
				// HouseNumT[i-x].firstChild.src = "imges/no.png";
				for (var y = 0; y < carpet_Y[i]; y++) {
					if (i-x-MapWidth*y > 0) {
						HouseNumB[i-x-MapWidth*y].style.pointerEvents = "none";
						HouseNumT[i-x-MapWidth*y].firstChild.src = "imges/0.png";
						// HouseNumT[i-x-MapWidth*y].firstChild.src = "imges/no.png";
					}
				}
			}
		}
		if (carpet_X[i] != 0) {
			for (var x = 0; x < carpet_X[i]; x++) {
				for (var y = 0; y < signY; y++) {
					if (i+x+MapWidth*y < Map_Num) {
						HouseNumB[i+MapWidth*y+x].style.pointerEvents = "none";
						HouseNumT[i+MapWidth*y+x].firstChild.src = "imges/0.png";
						// HouseNumT[i+MapWidth*y+x].firstChild.src = "imges/no.png";
					}
				}
			}
			for (var x = 0; x < signX; x++) {
				for (var y = 1; y < signY; y++) {
					if (i+MapWidth*y-x > 0 && i+MapWidth*y-x <Map_Num) {
						HouseNumB[i-x+MapWidth*y].style.pointerEvents = "none";
						HouseNumT[i-x+MapWidth*y].firstChild.src = "imges/0.png";
						// HouseNumT[i-x+MapWidth*y].firstChild.src = "imges/no.png";
					}
				}
			}
		}
	}
}






function wall_sign() {
	for (var i = 0; i < HouseNumB.length; i++) {
		HouseNumB[i].style.pointerEvents = "none";
		HouseNumT[i].firstChild.src = "imges/0.png";
		// HouseNumT[i].firstChild.src = "imges/no.png";
		sign_wall_X.splice(e,1,1)
	}
	for (var i = 0; i < wall_sign_Arr.length; i++) {
		var e = wall_sign_Arr[i]
		console.log(HouseNumB[e]);
		HouseNumB[e].style.pointerEvents = "auto";
		if (Grid_status == true) {
			HouseNumT[e].firstChild.src = "imges/yes.png";
		}
		sign_wall_X.splice(e,1,0)
	}
}


function wall_sign_X() {
	for (var i = 0; i < wall_X.length; i++) {
		var e = wall_Position[i];
		var x = wall_X[i];
		for (var n = 0; n < x; n++) {
			HouseNumB[e+n].style.pointerEvents = "none";
			HouseNumT[e+n].firstChild.src = "imges/0.png";
			// HouseNumT[e+n].firstChild.src = "imges/no.png";
		}
		for (var n = 0; n < signX; n++) {
			HouseNumB[e-n].style.pointerEvents = "none";
			HouseNumT[e-n].firstChild.src = "imges/0.png";
			// HouseNumT[e-n].firstChild.src = "imges/no.png";
		}	
	}
	for (var i = 0; i < sign_wall_X.length; i++) {
		if (sign_wall_X[i] != 0 && i-signX > 0) {
			for (var x = 0; x < signX; x++) {
				HouseNumB[i-x].style.pointerEvents = "none";
				HouseNumT[i-x].firstChild.src = "imges/0.png";
				// HouseNumT[i-x].firstChild.src = "imges/no.png";
			}
		}
	}
}


function floor() {
	for (var i = 0 ; i < carpet_Position.length; i++) {
		var up = carpet_name[carpet_Position.indexOf(carpet_Position[i] - MapWidth)];
		var down = carpet_name[carpet_Position.indexOf(carpet_Position[i] + MapWidth)];
		var left = carpet_name[carpet_Position.indexOf(carpet_Position[i] - 1)];
		var right = carpet_name[carpet_Position.indexOf(carpet_Position[i] + 1)];
		var L_up = carpet_name[carpet_Position.indexOf(carpet_Position[i] - MapWidth - 1)];
		var L_down = carpet_name[carpet_Position.indexOf(carpet_Position[i] + MapWidth - 1)];
		var R_up = carpet_name[carpet_Position.indexOf(carpet_Position[i] - MapWidth + 1)];
		var R_down = carpet_name[carpet_Position.indexOf(carpet_Position[i] + MapWidth + 1)];
		var name = carpet_name[i];
		var coordinate = [up,down,left,right,L_up,L_down,R_up,R_down];
		var Binary = 0; 
		for (var x = 0 ; x < coordinate.length; x++) {
			if (coordinate[x] == name) {
				Binary = Binary + "1";
			}else{
				Binary = Binary + "0";
			}
		}
		var Binary_4 = parseInt(Binary.substring(1,5),2);
		if (name > 12 && name != 23) {
			n = 0;
			if (name > 12 && name < 19) {
				// Binary[5,1,7]坐
				// Binary[3,0,4]标
				// Binary[6.2.8]系
				switch(Binary_4){
					case 10:
						var n = Binary[5];
					break;
					case 9:
						var n = Binary[7];
					break;
					case 6:
						var n = Binary[6];
					break;
					case 5:
						var n = Binary[8];
					break;
					case 11:
						var n = Binary[5] + Binary[7];
					break;
					case 7:
						var n = Binary[6] + Binary[8];
					break;
					case 14:
						var n = Binary[5] + Binary[6];
					break;
					case 13:
						var n = Binary[7] + Binary[8];
					break;
					case 15:
						var n = Binary[5] + Binary[6] + Binary[7] + Binary[8];
					break;
				}
			}
			Binary_8 = parseInt(n,2);
			var Is_state = Binary_4 + "-" + Binary_8;
			HouseNumB[carpet_Position[i]].firstChild.src = "imges/3/" + name + "/" + Is_state + ".png";
			Timg = HouseNumB[carpet_Position[i]].firstChild.src;
		}
		if (state == "Pickaxe") {
			HouseNumB[carpet_Position[i]].style.pointerEvents = "auto";
		}
		Binary = undefined;
	}
}

document.body.style.width = screen.width + "px";
document.body.style.height = screen.height + "px";


function Grid() {//开启网格系统
	var Grid_Btn = document.getElementById("Grid");
	if (Grid_status == false) {
		Grid_Btn.src = "imges/Grid-2.png";
		Grid_status = true;
		if (menuBodySign == 1) {
			Initialization();
			wall_sign();
		 	wall_sign_X();
		}else if (menuBodySign == 3) {
			Initialization();
			sign_carpet();
			sign_carpet_X();
		}else if (menuBodySign == 0 || menuBodySign == 2) {
			Initialization();
			signMap();
		 	signMapX();
		}
	}else{
		Grid_Btn.src = "imges/Grid-1.png";
		Grid_status = false;
		if (menuBodySign == 1) {
			Initialization();
			wall_sign();
		 	wall_sign_X();
		}else if (menuBodySign == 3) {
			Initialization();
			sign_carpet();
			sign_carpet_X();
		}else if (menuBodySign == 0 || menuBodySign == 2) {
			Initialization();
			signMap();
		 	signMapX();
		}
	}
}
function Pickaxe() {//开启十字镐状态
	var Pickaxe_Btn = document.getElementById("Pickaxe");
	if (state == "common") {
		Pickaxe_Btn.src = "imges/Pickaxe-2.png";
		document.getElementById("del").style.display = "block";
		document.getElementById("rotate").style.display = "none";
		document.getElementById("Discoloration").style.display = "none";
		state = "Pickaxe";
		for (var i = 0; i < HouseNumB.length; i++) {
			HouseNumB[i].style.pointerEvents = "auto";
			if (Grid_status == true) {
				HouseNumT[i].firstChild.src = "imges/yes.png";
			}	
		}
	}else{
		Pickaxe_Btn.src = "imges/Pickaxe-1.png";
		document.getElementById("del").style.display = "none";
		state = "common";
		if (menuBodySign == 1) {
			Initialization();
			wall_sign();
		 	wall_sign_X();
		}else if (menuBodySign == 3) {
			Initialization();
			sign_carpet();
			sign_carpet_X();
		}else if (menuBodySign == 0 || menuBodySign == 2) {
			Initialization();
			signMap();
		 	signMapX();
		}
	}
}


var change_Num = 0;
House.oncontextmenu = function(e) {
	e.preventDefault();
	if (menuBodySign < 4 && menuBodySign != 1 && NAME[5] != 1) {
		var n = NAME[5];
		if (menuBodySign== 3) {
			var Z = HouseNumB;
		}else{
			var Z = HouseNumM;
		}
		if (change_Num < n && n != 20) {
			switch(change_Num) {
				case 0:
				change_Num++;
				signX = NAME[8];//获取当前物品占地宽度
				signY = NAME[9];//获取当前物品占地高度
				IMG_W = NAME[10];//获取当前物品宽度
				IMG_H = NAME[11];//获取当前物品高度
				IMG_T = NAME[12];//获取当前物品向上偏移量				
				break;
				case 1:
				if (n == 2) {
					change_Num = 0;
				}else{
					change_Num++;
				}
				signX = NAME[0];//获取当前物品占地宽度
				signY = NAME[1];//获取当前物品占地高度
				IMG_W = NAME[2];//获取当前物品宽度
				IMG_H = NAME[3];//获取当前物品高度
				IMG_T = NAME[4];//获取当前物品向上偏移量
				break;
				case 2:
				change_Num++;
				signX = NAME[8];//获取当前物品占地宽度
				signY = NAME[9];//获取当前物品占地高度
				IMG_W = NAME[10];//获取当前物品宽度
				IMG_H = NAME[11];//获取当前物品高度
				IMG_T = NAME[12];//获取当前物品向上偏移量
				break;
				case 3:
				change_Num = 0;
				signX = NAME[0];//获取当前物品占地宽度
				signY = NAME[1];//获取当前物品占地高度
				IMG_W = NAME[2];//获取当前物品宽度
				IMG_H = NAME[3];//获取当前物品高度
				IMG_T = NAME[4];//获取当前物品向上偏移量
				break;
			}
		}else{
			if (change_Num < 20) {
				change_Num++;
			}else if (change_Num == 20) {
				change_Num = 0;
			}
			signX = NAME[0];//获取当前物品占地宽度
			signY = NAME[1];//获取当前物品占地高度
			IMG_W = NAME[2];//获取当前物品宽度
			IMG_H = NAME[3];//获取当前物品高度
			IMG_T = NAME[4];//获取当前物品向上偏移量
			console.log(change_Num)
		}
		if (menuBodySign== 3) {
			var Z = HouseNumB;
		}else{
			var Z = HouseNumM;
		}
		IMG = "imges/" + menuBodySign + "/" + otherSign + "/" + change_Num + ".png";
		if (e.target.index != undefined) {
			Z[e.target.index].firstChild.src = "imges/" + menuBodySign + "/" + otherSign + "/" + change_Num + ".png";
			Z[e.target.index].firstChild.style.top = IMG_T;
			Z[e.target.index].firstChild.style.width = IMG_W;
			Z[e.target.index].firstChild.style.height = IMG_H;
		}
		
		// console.log(NAME)
		Initialization();
		if (menuBodySign == 0) {
			signMap();
			signMapX();
		}else if (menuBodySign == 3) {
			sign_carpet();
			sign_carpet_X();
		}
	}
}
function Statistics() {
	var Statistics_0 = [];
	var Statistics_1 = [];
	var Statistics_2 = [];
	var Statistics_3 = [];
	var Statistics_4 = [];
	for (var i = 0 ; i < Position_Catalog.length; i++) {
		switch (Position_Catalog[i]){
			case 0:
			var n1 = Position_name[i];
			var n2 = furniture_Arr[n1];
			var n3 = n2[6];
			Statistics_0.push(n3)
			break;
			case 2:
			var n1 = Position_name[i];
			var n2 = toolNum[n1];
			var n3 = n2[6];
			Statistics_1.push(n3)
			break;
		}
	}
	for (var i = 0 ; i < wall_name.length; i++) {
		var n1 = wall_name[i];
		var n2 = wall_name_text[n1];
		Statistics_2.push(n2)
	}
	for (var i = 0 ; i < carpet_name.length; i++) {
		var n1 = carpet_name[i];
		var n2 = carpetNum[n1];
		var n3 = n2[6];
		Statistics_3.push(n3)
	}
	console.log(Statistics_0)
	console.log(Statistics_1)
	console.log(Statistics_2)
	console.log(Statistics_3)
	var Statistics_name = [Statistics_0,Statistics_1,Statistics_2,Statistics_3,Statistics_4];
	var Statistics_name_s = [];
	for (var x = 0; x < Statistics_name.length; x++) {
		Statistics_name[x].sort();
		for (var i = 0; i < Statistics_name[x].length;) {
			var count = 0;
			for (var j = i; j < Statistics_name[x].length; j++) {  
				if ((Statistics_name[x])[i] == (Statistics_name[x])[j]) {  
					count++;  
				}
			}
			Statistics_name_s.push([(Statistics_name[x])[i], count]);  
			i += count;
		}
		var Statistics_0_name_Num = [];
		for (var i = 0; i < Statistics_name_s.length; i++) {
			Statistics_0_name_Num.push(Statistics_name_s[i][0] + ":" + Statistics_name_s[i][1]);
		}
	}

	console.log(Statistics_0_name_Num);
	for (var i = 0 ; i < Statistics_0_name_Num.length; i++) {
		if (i < 105) {
			StatisticsArr[i].innerHTML = "&bull; " + Statistics_0_name_Num[i];
			var x = "none";
		}else{
			StatisticsArr[i].innerHTML = "&bull; " + Statistics_0_name_Num[i];
			var x = "block";
		}
		document.getElementById("Statistics-prev").style.display = x;
		document.getElementById("Statistics-next").style.display = x;
		document.getElementById("Statistics_table-1-img").style.display = x;
	}
	document.getElementById("Statistics").style.display = "block";
}
var StatisticsArr = Statistics_table.getElementsByClassName("Statistics-text");

function Statistics_X() {//关闭统计表
	document.getElementById("Statistics").style.display = "none";
	var StatisticsArr = Statistics_table.getElementsByClassName("Statistics-text");
	for (var i = 0 ; i < StatisticsArr.length; i++) {
		StatisticsArr[i].innerHTML = "";
	}
	document.getElementById("Statistics_table-1").style.display = "flex";
	document.getElementById("Statistics_table-2").style.display = "none";
	document.getElementById("Statistics-prev").style.display = "none";
	document.getElementById("Statistics-next").style.display = "none";
	document.getElementById("Statistics_table-1-img").style.display = "none";
}
for (var i = 0 ; i < 105; i++) {
	Statistics_add_1();
	Statistics_add_2();
}
function Statistics_add_1(){//统计页1
	var Statistics_table_1 = document.getElementById("Statistics_table-1");
	var div = document.createElement("div");
	Statistics_table_1.appendChild(div).className = "Statistics-text";
}
function Statistics_add_2(){//统计页2
	var Statistics_table_2 = document.getElementById("Statistics_table-2");
	var div = document.createElement("div");
	Statistics_table_2.appendChild(div).className = "Statistics-text";
}
function Statistics_prev() {
	document.getElementById("Statistics_table-1").style.display = "flex";
	document.getElementById("Statistics_table-2").style.display = "none";
}
function Statistics_next() {
	document.getElementById("Statistics_table-1").style.display = "none";
	document.getElementById("Statistics_table-2").style.display = "flex";
}

function Farm() {//跳转到装修模拟器
	window.open("http://bishengming.gitee.io/stardewvalleyfarm/")
}

function author() {//显示联系作者联系方式
	document.getElementById("author").style.display = "block";
}
function author_X() {//关闭作者联系方式
	document.getElementById("author").style.display = "none";
}
function Explain() {//开启教程页面
	var Explain_Btn = document.getElementById("Explain");
	document.getElementById("Course_content").style.display = "block";
}
var Course_Num = 0;//教程页码
function Course_prev() {//说明书上一页
	var Course_arr = document.getElementById("Course_content");
	var ARR = Course_arr.getElementsByClassName("Course_content");
	if (Course_Num > 0) {
		Course_Num = Course_Num - 1;	
	}else if (Course_Num == 0) {
		Course_Num = 0;
	}
	ARR[Course_Num].style.display = "block";
	ARR[Course_Num+1].style.display = "none";
}
function Course_next() {//说明书下一页
	var Course_arr = document.getElementById("Course_content");
	var ARR = Course_arr.getElementsByClassName("Course_content");
	if (Course_Num < 2) {
		Course_Num = Course_Num + 1;	
	}else if (Course_Num == 2) {
		Course_Num = 2;
	}
	ARR[Course_Num].style.display = "block";
	ARR[Course_Num-1].style.display = "none";
}
function Course_X() {//关闭说明
	document.getElementById("Course_content").style.display = "none";
}






var time = 0;//计时
var timeX = 0//时间状态
var cloudY = document.getElementById("cloud");
var cloudN = cloudY.querySelectorAll("div");
var cloudX1 = cloudN[0].offsetLeft;//云1
var cloudX2 = cloudN[1].offsetLeft;//云2
var cloudX3 = cloudN[2].offsetLeft;//云3
var cloudX4 = cloudN[3].offsetLeft;//云4
var animation = setInterval("cloud()",50)//每50毫秒运行一次动画
function cloud() {
	if (timeX == 0) {
		window.time = time + 1;
		if (time == 300) {
			window.timeX = 1
		}
	}else if (timeX == 1) {
		window.time = time - 1;
		if (time == 1) {
			window.timeX = 0
		}
	}
	cloudN[0].style.left = cloudX1 + time +"px";
	cloudN[1].style.left = cloudX2 - time +"px";
	cloudN[2].style.left = cloudX4 - time*2 +"px";
	cloudN[3].style.left = cloudX3 + time*2 +"px";
}
function Course_yes() {//开启说明
	document.getElementById("Course_content").style.display = "block";
	document.getElementById("Course").style.display = "none";
}
function Course_no() {//拒绝开启说明
	document.getElementById("Course").style.display = "none";
}
var preview = document.getElementById("preview");
var preview1 = document.getElementById("preview1");
function screenshot(){//开始生成图片
	var screenshot = document.getElementById("screenshot");
	preview.style.display = "flex";//显示下载弹窗
	huanchong();//生成图片
}
function huanchong(){//将Frame生成图片
	html2canvas(House).then(function(canvas) {
    preview1.appendChild(canvas);
    var oCavans = document.getElementsByTagName("canvas")[0];
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
    // link.innerHTML = "download_canvas_image";
    var name = document.getElementById("name-tenx").value;
    link.download = name + "农场";
    link.addEventListener("click", function(ev) {
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
function cancel() {//关闭下载弹窗并删除图片预览
	var oCavans = document.getElementsByTagName("canvas")[0];
	preview1.removeChild(oCavans);
	preview.style.display = "none";
	document.getElementById("load").style.display = "block";
    document.getElementById("save").style.display = "none";
    document.getElementById("cancel").style.display = "none";
}


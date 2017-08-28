//主页js

//点击显示目录
//需解决问题：点击空白区域不显示导航功能  *@600 设置了nav:display none;
function showList() {
	var nav=document.getElementById('nav');
	var show=nav.style.display;
	if(show=="block"){
		nav.style.display="none";
	}else{
		nav.style.display="block";
	}
}


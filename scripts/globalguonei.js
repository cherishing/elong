addLoadEvent(show);
addLoadEvent(move);
addLoadEvent(search);

function addLoadEvent(fuc) {
  var oldonload = window.onload;
  if (typeof oldonload != 'function') {
    window.onload = fuc;
  } else {
    window.onload = function() {
      oldonload();
      fuc();
    }
  }
}
/*图片轮播*/
function show() {
  var oPic = document.getElementById("pic");
  var oDot = document.getElementById("dots");
  var aDot = oDot.getElementsByTagName("li");
  var arr = ["images/ch01.jpg", "images/ch02.jpg", "images/ch03.jpg", "images/ch04.jpg", "images/ch05.jpg"];
  var timer = 0;
  var num = 0;
  oPic.setAttribute("src", arr[num]);
  aDot[num].className = "active";


  function tab() {

    num++;
    if (num == 5) {
      num = 0;
    }
    oPic.setAttribute("src", arr[num]);
    cir();

  }
  start();

  function start() {
    timer = setInterval(tab, 3000);
  }

  function stop() {
    clearInterval(timer);
  }

  function cir() {
    for (var i = 0; i < aDot.length; i++) {
      aDot[i].className = "";
    }
    aDot[num].className = "active";
  }
  for (var i = 0; i < aDot.length; i++) {
    aDot[i].index = i;
    aDot[i].onclick = function() {
      // alert(this.index);
      stop();
      oPic.setAttribute("src", arr[this.index]);
      num = this.index;
      cir();
      start();

    }
  }

}
/*banner中的地点选项卡*/
function search() {
  var oBj = document.getElementById("citybj");
  var ochinaaddress = document.getElementById("chinaaddress");
  var ochinacitys = document.getElementById("chinacitys");
  var aLi = ochinacitys.getElementsByTagName("li");
  var ochinacity = document.getElementById("chinacity");
  var oDiv = ochinacity.getElementsByTagName("div");
  var off = true;

  oBj.onclick = function() {
    if (off) {
      oBj.value = "";
      ochinaaddress.style.display = "block";
      off = false;
    } else {
      oBj.value = "北京";
      ochinaaddress.style.display = "none";
      off = true;
    }

  }




  aLi[1].onclick = function() {
    cleardivdisplay();
    oDiv[1].style.display = "block";
  }
  aLi[2].onclick = function() {
    cleardivdisplay();
    oDiv[2].style.display = "block";
  }
  aLi[3].onclick = function() {
    cleardivdisplay();
    oDiv[3].style.display = "block";
  }
  aLi[4].onclick = function() {
    cleardivdisplay();
    oDiv[4].style.display = "block";
  }
  aLi[5].onclick = function() {
    cleardivdisplay();
    oDiv[5].style.display = "block";
  }

  function cleardivdisplay() {
    for (var i = 0; i < oDiv.length; i++) {
      oDiv[i].style.display = "none";
    }
  }
}

/*推荐品牌点击后左右移动*/
function move() {
  var oCmp = document.getElementById("comp");
  var aLi = oCmp.getElementsByTagName("li");
  var oLeft = document.getElementById("tjlf");
  var oRight = document.getElementById("tjrg");
  var num = 0;
  var onofflf = 4;
  var onoffrg = 0;
  var off = false;
  oLeft.onclick = function() {

    if (onofflf != 0) {
      num -= 149;
      moveToLeft();
      onofflf--;
      off = true;
    } else {
      oLeft.style.display = "none";
      num = 0;
    }

  }
  oRight.onclick = function() {
    // if(off){

    //    num=0;
    //   off=false;

    // }
    if (onoffrg != 4) {
      num += 149;
      // alert(1);
      // alert(num);
      moveToRight();
      onoffrg++;
    } else {
      oRight.style.display = "none";
      num = 0;
    }
  }

  function moveToLeft() {
    oCmp.style.left = num + "px";
  }

  function moveToRight() {
    oCmp.style.right = num + "px";
  }

}

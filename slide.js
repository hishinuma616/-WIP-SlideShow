myImage = new Array(	// 画像ファイル名の設定
"./img/秋刀魚.jpg",
"./img/白川郷.jpg",
// "./img/1.jpg",
// "./img/2.jpg",
// "./img/3.jpg",
"./img/読書.jpg",
"./img/滝.jpg",
"./img/紅葉.jpg",
);
myNowCnt = 0;		// 現在表示している配列番号
myflg = 0;		// どっちを表示して、どっちを消すかのフラグ
var oya = document.getElementById('js-slide-index');


function out(){
  timerID=setInterval("slideAnimation()",2000);	// 2秒周期に画像を更新する
}

function outStop(){
  clearInterval(timerID);
}

function listChange(){
  var slideElement = document.createElement('li');  // li要素生成
  slideElement.setAttribute("id","hoge");
  slideElement.setAttribute("class","slide-index-icon");
  slideElement.innerHTML = "<img src='"+myImage[myNowCnt]+"' class='slide-thumbnail'>";
  oya.appendChild(slideElement);
  oya.removeChild(oya.firstChild);

  if(myNowCnt<myImage.length-1){ // 次の配列番号
    myNowCnt = myNowCnt+1;
  }else{
    myNowCnt = 0;
  }
  oya.style.transition="0s";
  oya.style.left = "0";
}

function slideAnimation(){
  oya.style.transition="0.5s";
  oya.style.left = "-368px";

  window.setTimeout("listChange()", "550");
}

// ----------サムネイルの処理 ここから▼----------
index = "";
thumbnail = "";
for(i=0; i<myImage.length; i++){
 // サムネイル表示
 index += "<li href='./index.html' id='"+i+"' class='slide-index-icon' onClick='indexChange("+i+")'><img src='"+myImage[i]+"' id='thumbnail"+i+"' class='slide-thumbnail'></li>";
}
document.getElementById("js-slide-index").innerHTML = index;
document.getElementById("thumbnail0").className = "slide-thumbnail slide-thumbnail-active"; //インデックスの色を変える
// ----------サムネイルの処理 ここまで▲----------

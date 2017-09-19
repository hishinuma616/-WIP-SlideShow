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

function myChange(check){	// スライドショーメイン関数
  if(check==1){ //加算式
    if(myNowCnt<myImage.length-1){ // 次の配列番号
      myNowCnt = myNowCnt+1;
    }else{
      myNowCnt = 0;
    }
  }else if(check==0){ //減少式
    if(myNowCnt==0){ // 次の配列番号
      myNowCnt = myImage.length-1;
    }else{
      myNowCnt = myNowCnt-1;
    }
  }

  myflg = (myflg==0) ? 1 : 0;						// 表示・非表示フラグ反転
  if (myflg == 0){
    document.getElementById("idshow1").src = myImage[myNowCnt];		// 次の画像をセットする
    document.getElementById("idshow1").className = "fadein";		// フェードイン
    document.getElementById("idshow2").className = "fadeout";	// フェードアウト
    indexCheck();

  }else{
    document.getElementById("idshow2").src = myImage[myNowCnt];		// 次の画像をセットする
    document.getElementById("idshow1").className = "fadeout";	// フェードアウト
    document.getElementById("idshow2").className = "fadein";		// フェードイン
    indexCheck();
  }
}

function indexCheck(){
  for(j=0; j<=myImage.length-1 ;j++){
    if(j!=myNowCnt){
      //  document.getElementById(j).className = "slide-index-icon"; //インデックスの色を変える
      document.getElementById("thumbnail"+j).className = "slide-thumbnail";
    }else{
      //document.getElementById(j).className = "slide-index-icon slide-index-active"; //インデックスの色を変える
      document.getElementById("thumbnail"+j).className = "slide-thumbnail slide-thumbnail-active";
    }
  }
}

function indexChange(point){
  if(point == 0){
    myNowCnt = myImage.length-1-point;
  }else{
    myNowCnt = point-1;
  }
  myChange(1);
}

function out(){
  timerID=setInterval("myChange(1)",2000);	// 2秒周期に画像を更新する
}

function outStop(){
  clearInterval(timerID);
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

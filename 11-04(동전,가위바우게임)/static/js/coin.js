// coin.js

//전역변수 - 어떤 함수에서나 어디서나 사용가능한변수
//    브라우저실행후 페이지오픈되면 생성
//    페이지 주소가 바뀌면 종료

// 지역변수 - 해당변수가 생성된 위치에서만 사용가능변수
//        함수나, 제어문 이 실행되면 생성
//        함수나 ,제어문이 종료되면 종료

var flag = false; // 전역변수
var coin = 0; //동전 앞면 뒷면을 표현할 변수

function start(){
  var msg = document.getElementById("message");
  msg.innerText = "동전 맞추기 게임을 시작합니다. 선택해주세요";

  coin = Math.floor(Math.random() * 2 );  // 동전던지기 0-앞,1-뒤
  flag=true;
}

function select(coin_select){
  if( !flag ){  // 시작 버튼을 클릭하지 않았을때
      alert("시작 버튼을 클릭해주세요");
  }else{
    var msg = document.getElementById("message");

    if(coin_select==="front" && coin == 0){
        msg.innerText = " 동전 앞면 맞추기 성공";
    }else if(coin_select==="back" && coin == 1){  
        msg.innerText = " 동전 뒷면 맞추기 성공";
    }else{
        msg.innerText = " 동전 맞추기 ... 실패....";
    }

    flag=false;
  }
}
// game1.js

// setTimeout( 실행 함수 , 밀리세컨드);
//   지정된 시간이후 한번 실행
// clearTimeout();  setTimeout 중지

var cnum=1;
var set=0;
var flag=false;

function start(){
  if( !flag ){ //시작 버튼 클릭하기 전
    set = setInterval( com_game , 100);
    flag=true;
  }else{  // 시작 버튼 클릭 이후
    alert("게임이 시작되었습니다.");
  }
}

function select(num){
    if( flag ){ // 시작버튼을 클릭했을때
      clearInterval(set);

      var game_result=1;

      var res = document.getElementById("result_point");
      switch(num - cnum){
        case 0:
          res.innerHTML="비김";
          game_result=0;
          break;
        case -1:
        case 2:
          res.innerHTML =" 패배";
          game_result = -1;
          break;
        case -2:
        case 1:
          res.innerHTML = " 이김 ";
      }
      var take = document.getElementById("take_part");
      var times = document.getElementById("times");
      var times_idx = times.options.selectedIndex;
      //  select 태그에서 몇번째 option을 선택한것인지
      //  인덱스라는 번호를 구하기
      times = times.options[times_idx].value;

      if(  game_result==0 ) //가위바위보 비김
        times=0;
      if ( game_result==-1) //가위바위보 패배
        times= -1;
      var point = take.value* times;
      res.innerHTML= " 획득 포인트 : " +point;



      var cimg = document.getElementById("com_img");
    switch(cnum){
      case 1:
        cimg.src="static/image/scissors.png";
        break;
      case 2:
        cimg.src = "static/image/rock.png";
        break;
      case 3:
        cimg.src="static/image/paper.png";
        break;
    }

      flag=false;
    }else{ // 시작버튼을 클릭하지않았거나 게임이 끝난경우
      alert("시작 버튼을 눌러 주세요");
    }
}

function com_game(){
  var cimg = document.getElementById("com_img");
    switch(cnum){
      case 1:
        cimg.src="static/image/scissors.png";
        break;
      case 2:
        cimg.src = "static/image/rock.png";
        break;
      case 3:
        cimg.src="static/image/paper.png";
        break;
    }
    cnum++;
    if(cnum==4) cnum=1;
}
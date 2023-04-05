


function info_view(){ // 주차요금안내 보이고 감추고 하는 함수
  var info = document.querySelector(".info_content")
  if ( info.classList.contains("active") ) { 
    info.classList.remove("active");  //classList.remove("클래스명") 입력된 클래스명 삭제
  }else{
    info.classList.add("active");
  }
  
  // classList.contains 는  클래스명의 포함여부를 알려주는 함수
  // active 클래스명을 삭제 해주면서  active 이름으로 설정해준 display:none 이 적용안됨
  //classlist -> 해당 태그의 class 값 전부가져오기
}


var n = 1;  // 주차구역  구별하기 위한 용도
const p =[0,0,0,0]; // 주차구역별 setInterval 값 넣어주기 위한 용도
const time=[0,0,0,0]; // 주차구역별 시간


function parking(){
if(n==5){
  //n값이 5라면 주차구역중에 비어있는곳 체크해서 빈곳의 주차구역번호를 넣어줘야한다.
  // 빈 곳이 없다면 n은 계속 5를 유지 하게 한다.
  return;
}
  // #car1>img -> id가 car1인 태그 하위에있는 img 태그선택
    var car = document.querySelector("#car"+n+">img");
    var bt = document.querySelector("#car"+n+">button");
    car.classList.remove("active");
    bt.classList.remove("active");

  // 시간 시작 하기
  var num = n-1;
  p[num] = setInterval( function(){ time[num]++;  }, 10 );
  n++;
}

function out(num){ // html에서 button에 onclick으로 out(1) 여기서 1이num에저장되는값
  var car = document.querySelector("#car"+num+">img");
  var bt = document.querySelector("#car"+num+">button");
  car.classList.add("active");
  bt.classList.add("active");

  clearInterval(p[num-1]); // 출차 클릭한 주차구역의 시간을 멈추기

  var total = parseInt(time[num-1]/60);  //   / 나누기 연산자는 실수값이 나오기도 하기때문에 정수로 변환 필요
  var hour = parseInt( total/60 );
  var minute = total % 60;
  // 총 주차 시간 (분) - total

  var cost = 1000;
  if(hour >= 4){  //  4시간 이상 주차시  기본요금 2800원 4시간 빼기
    cost=2800;
    total = total - 240;
  }else if( hour >= 2){ // 2시간 이상 주차시 기본요금 1800원 2시간 빼기
    cost = 1800;
    total = total - 120;
  }else if(total <= 30){ // 30분이내 주차시 기본요금 1000원
    total=0;
  }else{  //  30분이상  2시간 미만 주차시
   total = total -30;
  }

  var price = parseInt(total/10) * 100 + cost;
  alert("주차시간 : "+hour+"시간 "+minute+"분  주차금액 : " +price+"원");

}
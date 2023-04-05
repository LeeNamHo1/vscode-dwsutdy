
var cnt=0;
var img_list =["coin_front.png", "coin_back.png"];
var sec=[0,0];//시간 저장 배열
var tnum=[0,0]; // setInterval id값 저장배열

window.onload=function(){
  //버튼 태그 객체로 가져오기
  var bt = document.getElementById("addimg");
  //버튼에  click 이벤트 처리함수 연결하기
  bt.addEventListener("click", add );

  //시간 버튼 태그 객체 가져오기
  var time_bt = document.getElementById("start");
  time_bt.addEventListener("click",start);

  var del = document.getElementsByClassName("img_delete");
  // del 은 배열 구조, 0인덱스에는 첫번째 버튼
  for( var i in del){
      del[i].addEventListener("click",function(){
        var value = this.dataset.value;
        var img = document.getElementsByClassName("img_view");
        img[value].src="";
      });
  }
  
// this는 현재 태그 를 의미


}


function stop(obj,n){ //  버튼클릭시 ()괄호안에 this값이
                  // obj에 저장 , this는 해당 버튼을의미
  obj.classList.add("active");
  clearInterval(tnum[n]);

  var minute = parseInt(sec[n]/60);
  
  var price = parseInt(minute/10) *100;
  var hour = parseInt(minute/60);
  minute = minute%60;
  
  alert(hour+"시간 "+minute+"분   요금 : "+price+"원");
}


function start(){
  var stop = document.getElementsByClassName("stop");
  stop[cnt].classList.remove("active");

  //시간 시작하기
  var c= cnt; // 전역변수의 값을 그대로 활용하면 timer함수에
             // 변경된 값이 적용되기때문에  지역변수에 값따로 저장하여 사용
  tnum[c] = setInterval(function(){ timer(c);  } , 10); // 지정한 시간에 한번씩 실행
  cnt++;
}
function timer(c){

  var time = document.getElementsByClassName("time")[c];
  
  //time.innerHTML = sec[c] ;
  sec[c]++;
}






// #addimg 버튼 클릭하면 실행 되는 함수
function add(){
  if(cnt==2) cnt=0;

  // 이미지 출력 
  var img = document.getElementsByClassName("img_view");
  img[cnt].src="./static/image/"+img_list[cnt];

  cnt++;
}


/*
for(int i : arr)

*/
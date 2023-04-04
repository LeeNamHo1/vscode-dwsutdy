

let name=[];
let job=[];
let addr=[];

window.onload=function(){
  init();
  view(name , job , addr);
  var bt = document.getElementById("search_bt");
  bt.addEventListener("click", search);

};

function search(){
  var word = document.getElementById("search");

  let res_name =[];
  let res_job =[];
  let res_addr=[];

  for(var i=0; i<name.length; i++){
  //name[0] 김유신이라면 '김유신'.indexOf(word) -> 문자열도 배열이다.
      if( name[i].indexOf(word.value) != -1 || 
          job[i].indexOf(word.value) != -1  ||
          addr[i].indexOf(word.value) != -1 ){ 
          res_name.push(name[i]);
          res_job.push(job[i]);
          res_addr.push(addr[i]);
      }
  }
  view( res_name , res_job, res_addr);
}

function view( name_li, job_li , addr_li ){
  var out="";

  var len = name_li.length;
  if( job_li.length > len)  len = job_li.length;
  if( addr_li.length > len) len = addr_li.length;


  for(var i=0; i<len; i++){
    out += "<div class='record'>";
    out +="<div class='seq'>"+(i+1)+"</div>";
    out +="<div class='name'>"+name_li[i]+"</div>";
    out +="<div class='job'>"+job_li[i]+"</div>"
    out +="<div class='addr'>"+addr_li[i]+"</div>"
    out +="</div>";
  }
  var list = document.getElementById("list");
  list.innerHTML=out;
}

function init(){

  addr=["경주","안시성","경주","진도","서울",
"개경","신의주","서울","서울","평양"];

  job=["군인","시장","국회의원","해경","과학자",
  "경제박사", "군인","공무원","지도제작자","산업스파이"];

  name=["김유신","양만춘","김춘추","장보고","장영실",
  "정도전","이성계","한석봉","김정호","문익점"];
}



/*
1.  html 태그들이 화면 이 모두 출력된 뒤에 
2.  window.onload부분이 실행된다.
3.  init함수가 먼저 실행 되면서  name 배열에 값 저장
4.  그다음 줄에 있는 view 함수가 실행되면서 name배열을 view함수에 입력
5.  view 함수에서는 입력된 name을 name_li로 받는다.  name_li = name 동작
6.  view함수에서 name_li 배열에 저장된 값 화면에 출력하기위해  out 변수에
    출력될 내용을 저장한다.
    그다음  #list에  출력하기
7.  input태그에 입력하고  button을 클릭하면  search라는 함수가 실행될수있게
    window.onload에  addEventListener 함수로 버튼에 click 이벤트를 추가
     하였고 ,  버튼 클릭시  search함수가 실행된다.
8.  search함수에서  input태그를 가져와서 word에 저장, word는 input 태그이다.
9.  name 배열을 반복문으로 name배열의 크기(name.length)만큼 반복하도록 하였고,
    name배열에 i변수를 사용하여 인덱스 접근,  name 배열에 저장된 문자열하나하나를
    indexOf로 통해 input에 입력한 값과 비교하여 포함여부를 판단하도록
    만들었다.   포함 되값이 라면 0 이상의 값이 나오고 포함되지않았다면 -1이나온다.
    포함 된 겨우에 name[i]의 값을 res_name 배열에 push로 저장하게 해준다.
    반복문이 끝난다음  res_name에 저장된 값을 view 함수를 통해 출력하게 한다.
    view(res_name) 실행하면  view함수에서 name_li가  res_name값을 받는다.
    name_li의 값을 출력하면 res_name값출력하게 되는것이다.

*/
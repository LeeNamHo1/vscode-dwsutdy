
const num = []; //전역변수 - 현재 자바스크립트문서에서 위치 제약없이 사용 할 수 있게하기위해 전역으로 설정.
// 위치제약은 함수또는 제어문을 의미함.
// 함수 하나당 하나씩 만들어야한다. (복잡해지기 때문에)

//  브라우저에  html 이 모두 출력된 후에 실행되는 onload 
//  html 태그들이 화면에 존재하는 상태에서 실행되기 때문에 브라우저에페이지가 
//보여지면서 html태그들을  제어하려면  onload 가 필요하다.
window.onload = function(){

  for(var i=0; i<9; ){ // num.push(Math.floor(Math.random()*9)+1); //push 배열에 값 저장하는 함수. num에 9개의 값을 저장함.
    var tmp = Math.floor(Math.random()*9) + 1 ;  // push- 배열에 값 저장하는 함수
    if( num.indexOf(tmp) == -1 ){  // indexOf함수는 배열에 지정값이 존재한다면 해당값의 인덱스를 알려주고
      i++;                         // 배열에 값이 없다면 -1을 준다.
      num.push(tmp);
    }
  }
  var box = document.getElementsByClassName("box");// class가 box인 div태그들 가져오기(9개)

  for(var i in box){  // i 변수에는 box 배열의 인덱스가 0부터 차례대로 대입(저장)된다.
      box[i].innerHTML = num[i]; // .box div에 차례대로 num배열의 값 넣기
  }

  //3초후에 특정 코드를 실행하려면  setTimeout을 사용한다.  지정한 시간이후에 실행시키는 함수다.
  setTimeout( function(){  // 3초후에  function() { } 부분 실행
      for(var i in box){   //.box인 div9개  차례대로 사용
        box[i].innerHTML = "";  // .box div에  빈값넣기 
      }
  }  , 3000);



  //.box div 클릭 이벤트 적용하기

  for(var i in box){
    box[i].addEventListener("click", function(){
      check(this);  // this는 div태그이다.  this == box[i]
    } ); // addEventListener('이벤트명' , 이벤트발생시 동작함수);
  }

} //onload 끝나는 괄호


var count=1; //전역변수

function check(obj){ // obj는 this이다.  obj==this ==box[i] 
  var idx = obj.dataset.value; // 클릭한 div의 data-value값 가져오기

    if( count == num[idx] ){ //num(랜덤변수가) count 값과 같다면 1부터 순서대로 클릭하고있는중.
      count++;
      alert(num[idx]);
    } else {  //else 부분의 { (중괄호) 가 시작하게 된다면 순서대로 클릭하고 있지않다는 뜻.
      alert("잘못 클릭했습니다. 순서대로 클릭하세요");
    }
}


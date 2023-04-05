//   script.js

// window.onload=function(){  }; 
// -> html태그들이 브라우저 화면에 모두 출력된 
//    다음 실행 하는 자바스크립트 코드

// 엔터키 누르면  입력 버튼 실행
// 키보드관련 이벤트 - keydown, keyup, keypress
// 이벤트 - 브라우저에서 client(사용자)가 행하는 모든 행위
//          마우스왼쪽버튼 클릭, 오른쪽버튼클릭, 더블클릭, 마우스 움직이기
//           키보드 키 누르기,  브라우저 위치 옮기기, 브라우저 크기 조절 등등
window.addEventListener("keydown", function(){ 
      if(window.event.keyCode == 13){
        enroll();
      }
});


function enroll(){
    var name = document.getElementById("name");
    var age = document.getElementById("age");

    // if문 - 참과 거짓에 의해  분기되는 분기문
    // if(조건식) {   참일경우 실행 할 내용 }
    //  else  { 거짓일경우 실행 할 내용  }
    //  연산자 - 비교연산자( 대소, 등가 ),  논리연산자
    //  비교연산자(대소) -  >  , < , >= , <=
    //  비굥연산자(등가) -   ==, === , !=
    //  var a=10, b=20;
    //   a>b -> false(거짓) , a<=b -> true(참) 
    //   a==b (a는 b와 같다), a===b (a는 b와 같다)
    //   a!=b ( a는 b와 같지않다) -> true(참)

    //  논리연산자  &&(and) , ||(or) , !(not)
    //  논리연산자는  참과 거짓을 연산하는 연산자
    //  즉, 두개 이상의 조건식을 사용할경우 논리연산자를 사용한다.
    //  바이킹 탑승조건이 키 140이상 190이하만 가능하다면
    //    190 >= 키>=140  -> 불가, 식 오류 
    //  언어에서 기본적으로 연산자 하나에 피연산자 둘이 붙어야함
    //  190>=키  &&  키 >= 140

    //  not ->  부정 
    


//name.value는 빈값과 같지않고 그리고 age.value는 빈값과 같지않다.
    if( name.value != '' && age.value != ''){
      var res = document.querySelector("#result");

      var birth_year = 2022-age.value + 1;

      res.innerHTML = "이름 : " +name.value+  
          "  나이  : " +age.value+"살  출생년도 : "+ birth_year +"년";
    }else{
      alert("이름또는 나이를 입력하세요");
    }


    

};
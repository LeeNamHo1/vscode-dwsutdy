//  script1.js

function make(){
    var color = document.getElementById("color");
    var ea = document.getElementById("ea");
    // input 태그 객체 생성(가져오기)
    //자바스크립트에서는 html 태그를 객체 단위로 사용

    var end = parseInt(ea.value);
    var out="";
    for(var i=1; i<=end; i++ ) {  // 시작번호; 끝나는 번호; 증가폭
      out += "<div style='background:"+color.value+"; width:100px; height:50px;margin:5px;'></div> "; //  out = out + "  ";
      
    }

    var draw = document.getElementById("draw_box");
    draw.innerHTML = out;



//  자바스크립트에서  문자열 합치기 방법  + 
//  var num =10;
//  "가나다라" + num + "마바"  
//  ->  "가나다라10마바";

    /*
    // alert( ea.value +10 ) ;
    // 문자열을 숫자로 변환방법
    //  1. parseInt( ) - 정수변환
    //     parseFloat() - 실수 변환
    //  2. Number()
    var INT = parseInt(ea.value);
    alert( "parseInt 변환 : " + ( INT + 10)  );
    var num = Number(ea.value);
    alert("Number 변한 : " +( num+30) );

    //  문자열이  숫자로 변환이 가능 한가???
    //  isNaN()  -  숫자로 변환이 가능 하다면false, 불가능하면 true
    var num=0;
    if(  !isNaN(ea.value) ){
        num = Number(ea.value);
    }
    
    // parseInt - 문자열의 앞쪽에 변환이 가능한 숫자가있다면 변환
    // Number - 문자열 전체가 숫자로 변환이 가능 하다면 변환
    // ea input은 type이 text이므로 value값도 text이다.

    */
}
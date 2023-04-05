// script.js

//input 으로 입력받아서 #list에 출력하기
// 아이디, 연락처, 생년월일 모두 입력해야 출력가능

function reg(){
  var id = document.getElementById("user_id");
  var tel = document.getElementById("user_tel");
  var birth = document.querySelector("#user_birth");

  if(id.value==''){
    alert("아이디 입력하세요");
    id.focus();  //  focus - 커서위치 이동 
  }else if(tel.value==''){
    alert("연락처를 입력하세요");
    tel.focus();  
  }else if(birth.value==''){
    alert("생년월일을 입력하세요");
    birth.focus();
  }else{  // 아이디, 연락처, 생년월일 모두 작성한다면 실행
    var list = document.getElementById("list");
    var content = "아이디 : "+id.value +" 연락처 : "+tel.value+
                "  생년월일 : "+birth.value ;
    list.innerHTML = content;
  }

 /* if(id.value!='' && tel.value!='' && birth.value!=''){

  }else{
    
  }
*/
}
// getout 버튼 클릭하면 jyj가 안보여야 하고
// getout 글씨가 come on으로 바뀌어야한다.
// come on 버튼을 클릭하면 jyj가 보여야한다.
// hide, show, text
$("#jyjbt").click(function(){

    if ($(this).text()=="getout")//현재 버튼텍스트가 getout이라면
    {
      $("#jyj").hide();    // 감추기
      $(this).text("come on"); //버튼 텍스트 come on으로 변경
    }else{  // 현재 버튼 텍스트가 come on 이라면
      $("#jyj").show();  //보이기
      $(this).text("getout");  //버튼 텍스트 getout으로 변경
    }
      
});


// 메인메뉴를 클릭하면 서브메뉴가 스르륵 열려야 한다.
// 다시 메인메뉴 글씨를 클릭하면 서브메뉴가 스르륵 닫혀야 한다.

$(".main_menu>li").click(function(){
  $(".main_menu>li>.sub_menu").slideUp();// 모든 submenu 닫기
  $(this).children(".sub_menu").slideDown();// 클릭한 submenu만 열기
});

//계산기
//  각 번호 들 중에서  하나를 클릭하여  +, -, *, / 중하나의 연산
// 가능도록 만들기
//  계산은  단순하게  1+3 이런시으로만 계산 되게
//  10+3,  10+2 * 30 안해도됨
//   계산결과는 result에 출력

// 계산기 ->  숫자클릭 -> 연산자클릭 -> 숫자클릭-> = 클릭

let num=0;
let oldnum=0;
let op ="";
$(".num").click(function(){ 
     num = parseInt( $(this).text() ) ;
});

$(".opbt").click(function(){
      if( $(this).text() == "=" ){
        var res =0;
        switch(op){
          case '+':
            res = oldnum + num ; break;
          case '-':
            res = oldnum - num ; break;
          case '*':
            res = oldnum * num; break;
          case '/':
            res = oldnum / num; break;
        }
        $("#result").text( "계산 결과 : "+res  );
        return;
      }

      op = $(this).text() ;
      oldnum = num;
})
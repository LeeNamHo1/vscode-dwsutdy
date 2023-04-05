const img_list = ["sit1-1.jpg","sit1-2.jpg","sit1-3.jpg","sit1-4.jpg","sofa1.jpg"];

var idx=0; // 이미지 배열의 인덱스를 표현하기위한 전역변수

$(document).ready(function(){

  $("#myimg").attr("src","./static/image/"+img_list[0]);
// attr 은 태그의 속성을 의미
// 속성은 id,class, type, name, src, href 등등

  $(".sofa_img").click(function(){
    // 내가 선택한 작은 이미지의 src값 구하기
      var img = $(this).attr("src");
      var 이미지경로="./static/image/".length;
      var 추출 = img.substring( 이미지경로, img.length);
      //alert( 추출);
      idx = img_list.indexOf(추출);
     
      $(".sofa_box").each(function(){
          $(this).css("border","0");
          $(this).css("opacity","0.3");
      });
      // each() 는 제이쿼리에서 배열구조에사용되는 반복문이다.
      // 기존 반복문 처럼 인덱스 지정필요없고, 값대입없어도 된다.
      // each( ) 괄호안에 function 함수 넣어주고
      //  this를 이용해서 코드를 만들면  왠만한거는 다된다.
      //  모든 작업에 해당되지는 않음 예외는있음 

      $(this).parent().css("opacity","1");
      $(this).parent().css("border","2px solid olive");

// 문자열에서 부분 추출하는방법
//  slice(start, end) , substring(start,end), substr(start, length)
    //내가 선택한 이미지를 큰이미지 보이는곳에 src로 넣어주시
      $("#myimg").attr("src",img);
  });

  setInterval( next , 3000);

});

function next(){
  if(idx == img_list.length-1){ //배열의크기는 5이다. 마지막인덱스는 4이다.
    idx=-1;
  }
  // 선택된 이미지만 빨간테두리 투명도1설정============
  $(".sofa_box").each(function(){
    $(this).css("border","0");
    $(this).css("opacity","0.3");
  });
  $(".sofa_box").eq(idx+1).css("opacity","1");
  $(".sofa_box").eq(idx+1).css("border","2px solid olive");
  //=================================================
  $("#myimg").attr("src","./static/image/"+img_list[++idx]);
}

function sub(){
  alert("장바구니 추가");
}

var ing = $("$click").offset();
$("html,body").animate({scrollbutton:ing.top},1000);
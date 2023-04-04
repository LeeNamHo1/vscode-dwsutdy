
const img_list = ["train1.jpg","beepbeep.jpg",
"beepbeep2.jpg","beepbeep3.jpg","cat.jpg"];

var idx=0; // 이미지 배열의 인덱스를 표현하기위한 전역변수

$(document).ready(function(){

  $("#myimg").attr("src","./static/image/"+img_list[0]);
// attr 은 태그의 속성을 의미
// 속성은 id,class, type, name, src, href 등등

  $("#pre").click(function(){
    if(idx==0){ // 이전으로 이동하다가 첫번째이미지가오면 마지막이미지보여주기위한
        idx=img_list.length;
    }
 // 선택된 이미지만 빨간테두리 투명도1설정============
 $(".small_box").each(function(){
  $(this).css("border","0");
  $(this).css("opacity","0.4");
});
$(".small_box").eq(idx-1).css("opacity","1");
$(".small_box").eq(idx-1).css("border","2px solid red");
//=================================================
    $("#myimg").attr("src","./static/image/"+img_list[--idx]);
  });
  $("#next").click(function(){
    if(idx == img_list.length-1){ //배열의크기는 5이다. 마지막인덱스는 4이다.
        idx=-1;
    }
    // 선택된 이미지만 빨간테두리 투명도1설정============
    $(".small_box").each(function(){
      $(this).css("border","0");
      $(this).css("opacity","0.4");
    });
    $(".small_box").eq(idx+1).css("opacity","1");
    $(".small_box").eq(idx+1).css("border","2px solid red");
    //=================================================
    $("#myimg").attr("src","./static/image/"+img_list[++idx]);
  });

  $(".small_img").click(function(){
    // 내가 선택한 작은 이미지의 src값 구하기
      var img = $(this).attr("src");
      var 이미지경로="./static/image/".length;
      var 추출 = img.substring( 이미지경로, img.length);
      //alert( 추출);
      idx = img_list.indexOf(추출);
     
      $(".small_box").each(function(){
          $(this).css("border","0");
          $(this).css("opacity","0.4");
      });
      // each() 는 제이쿼리에서 배열구조에사용되는 반복문이다.
      // 기존 반복문 처럼 인덱스 지정필요없고, 값대입없어도 된다.
      // each( ) 괄호안에 function 함수 넣어주고
      //  this를 이용해서 코드를 만들면  왠만한거는 다된다.
      //  모든 작업에 해당되지는 않음 예외는있음 

      $(this).parent().css("opacity","1");
      $(this).parent().css("border","2px solid red");

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
  $(".small_box").each(function(){
    $(this).css("border","0");
    $(this).css("opacity","0.4");
  });
  $(".small_box").eq(idx+1).css("opacity","1");
  $(".small_box").eq(idx+1).css("border","2px solid red");
  //=================================================
  $("#myimg").attr("src","./static/image/"+img_list[++idx]);
}

// 투명도 opacity -  0~ 1  0.2  0.6
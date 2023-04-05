
var fix = $("#header").offset().top; // 아이디 header인 태그의 페이지내의 좌표
//
$(window).scroll(function(){
    var wtop = $(window).scrollTop(); //현재 페이지에서 스크롤의 위치좌표
   // alert(wtop);
   if( fix < wtop ){
      $("#header").css({ position:"fixed", zIndex:"50", top:"0"})
   }else{
      $("#header").css( { position:"relative"})
   }
});
   // #header의 위치보다  스크롤 내렸을때의 위치가 더 크다면 #header를 fixed로 변경하라

    // 
   $("#head_list").click(function(){
    $("#side").slideToggle();
    });
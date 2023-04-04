

$(window).ready(function(){

  var fix = $("#input_mask").offset().top; 
  //
  $(window).scroll(function(){
      var wtop = $(window).scrollTop(); 
     if( fix < wtop ){
        $("#input_mask").css({ position:"fixed", zIndex:"10", top:"0"})
     }else{
        $("#input_mask").css( { position:"relative"})
     }
  });

  $("#reg_bt").click(function(){
    var name= $("#name").val();
    var age = $("#age").val();
    var fav = $("#favorite").val();
    
    $("#content").before(
      '<ul><li>'+name+'</li><li>'+age+'</li><li>'+fav+'</li><li><button class="itemDelete">-</button></li></ul>'
    )

    $(".itemDelete").click(function(){
      //  $(this)-> 내가 클릭한 - 버튼
      $(this).parent().parent().remove();
    });

    //추가   append() 마지막에추가 , before() 이전, atfer() 이후
    // 태그 선택   부모 .parent() ,  앞태그  .pre()  , 뒤태그  .next()


  });


});
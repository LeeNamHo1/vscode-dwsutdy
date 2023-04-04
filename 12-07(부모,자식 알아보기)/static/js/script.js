$(function(){
    $(".set").click(function(){
        if( $(".set i:nth-child(1)").hasClass("view_b") ){
              $(".set i:nth-child(1)").removeClass("view_b");
              $(".set i:nth-child(2)").addClass("view_b");
              $("div").addClass("dark_bg");
              $("div").addClass("dark_txt");
              $(".image_box").addClass("dark_border");
        }else{
          $(".set i:nth-child(2)").removeClass("view_b");
          $(".set i:nth-child(1)").addClass("view_b");
          $("div").removeClass("dark_bg");
          $("div").removeClass("dark_txt");
          $(".image_box").removeClass("dark_border");
        }

        //.children() 특정 자식 태그 찾기
        // .removeClass() 태그에  클래스명 삭제하기
        // .hasClass()  태그에 클래스가 있는지 확인, 있다면 true
    });


    $(".menu_list li:nth-child(2)").click(function(){
          if( $(".about").hasClass("no_view") )
                $(".about").removeClass("no_view");
          else 
              $(".about").addClass("no_view");
    });

    $(".size_change").click(function(){
        var 높이 = $(".menu_box").height();
        var 높이2 = $(".menu_box").innerHeight();
        var 너비 = $(".menu_box").width();
        var 너비2 = $(".menu_box").innerWidth();
        alert(높이+"  "+높이2);
    });

    $(".orange-txt").click(function(){
          // $(this) - .orange-txt  태그다.
         var 내부모 =  $(this).parent(); // 부모태그는 p
         내부모.css("background","yellow");
         var 내부모들 = $(this).parents();// 내위의 모든태그
         내부모들.css("border","1px solid red");

         var 나와조상사이 = $(this).parentsUntil("div");
         나와조상사이.css("background","pink");
    });
});
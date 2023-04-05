// 여긴 결제창


// 입력시 결제 주문에 입력칸
$("#myname").keyup(function(){
    $("#name").text(  $("#myname").val()  );
});
$("#myaddress").keyup(function(){
    $("#address").text(  $("#myaddress").val()  );
});
$("#myaddress").keyup(function(){
    $("#into").text(  $("#myaddress").val()  );
});
$("#mynumber1").keyup(function(){
    $("#number1").text(  $("#mynumber1").val()+"-"  );
});
$("#mynumber2").keyup(function(){
    $("#number2").text(  $("#mynumber2").val()+"-"  );
});
$("#mynumber3").keyup(function(){
    $("#number3").text(  $("#mynumber3").val() );
});
$("#myelse").keyup(function(){
    $("#else").text(  $("#myelse").val()  );
});
// $(".img, card_p").click(function(){
//     var card = $(".card_p").text()
//     $("#cards").text(card);
//     console.log(card);
   
// });


window.onload =function(){

    var card = document.getElementsByClassName("modal_input_card");
    var card_check= document.getElementsByClassName("card_p");
    var cards = document.getElementById("cards");
 
    
    for(var i =0;i<card.length;i++){
        card[i].addEventListener("click",function(){
            //클릭한 div 안에 있는  라디오를 체크상태로 바꾸기
            // 라디오의 value값을 가져와서  cards.innnerHTML= 넣어주기
            var num = this.dataset.num;
            var value = card_check[num].innerHTML;
            // alert(value);
            cards.innerHTML = value;
           
        });
    }
    
   
};




// 결제 버튼 클릭시 확인 변수
$(".enroll").click(function(){
    if($("#myname").val()==''){
        alert("수령인을 입력해주세요.");
        $("#myname").focus();
        
    }else if($("#myaddress").val()==''){
        alert("상품명을 입력해주세요.");
        $("#myaddress").focus();
    }
    else if($("#mynumber1").val()==''){
        alert("번호를 입력해주세요.");
        $("#mynumber1").focus();
    }
    else if($("#mynumber2").val()==''){
        alert("번호를 입력해주세요");
        $("#mynumber2").focus();
    }
    else if($("#mynumber3").val()==''){
        alert("번호를 입력해주세요");
        $("#mynumber3").focus();
    }
    else if($("#myelse").val()==''){
        alert("배송지주소를 입력해주세요");
        $("#myelse").focus();
    }else $(".card").click(function(){
        $("#modal").css('display','block');
    });
    
});
// 결제 확인 .delivery2_box1,.delivery2_box2>div

$(".card2").click(function(){
    $(".card2_box").css("display","block");
});




// 체크 박스 선택
$("#Allcheck").click(function() {
    if($("#Allcheck").is(":checked")) $("input[name=chk]").prop("checked", true);
    else $("input[name=chk]").prop("checked", false);
});

$("input[name=chk]").click(function() {
    var total = $("input[name=chk]").length;
    var checked = $("input[name=chk]:checked").length;

    if(total != checked) $("#Allcheck").prop("checked", false);
    else $("#Allcheck").prop("checked", true); 
});
// 전체 갯수 $("input:checkbox[name=is_check]").length  
// 선택된 갯수 $("input:checkbox[name=is_check]:checked").length  
// 전체 체크 $("input[name=mycheck]:checkbox").prop("checked", true);  
// 전체 체크 순회 $("input:checkbox[name=is_check]").each(function() {  this.checked = true; });  
// 체크여부 확인 if($("input:checkbox[name=complete_yn]").is(":checked") == true) {   //작업 } 

$(".btn_poss").click(function(){
		
    if( $("#Allcheck").is(":checked") == false ){
        // 체크되었을때 실행
        alert("동의하세요")
        return;
    }else if($("#cards").text()==''){
        alert("카드를 선택하세요")
        return;
    }else{    alert("결제완료!")
    location.href='./index11.html';}

});
// 할인 정보 옆?
$(".what").click(function(){
    var con = document.getElementById("what_the");
    if(con.style.display=='none'){ 		
        con.style.display = 'block'; 	
    }else{ 		
        con.style.display = 'none'; 	
    }   
});

$("#teacher").click(function(){
    $("#teacher_img").slideToggle();
});



$(".modal_back").click(function(){
    $("#modal").hide();
});
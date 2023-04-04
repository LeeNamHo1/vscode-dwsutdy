// script2.js


function make_grp(){
   var name_temp = document.getElementById("name");
   var kor_temp = document.getElementById("kor");
   var mat_temp = document.getElementById("mat");
   var eng_temp = document.getElementById("eng");

   var name = name_temp.value;
   var kor = kor_temp.value;
   var mat = mat_temp.value;
   var eng = eng_temp.value;

   
   var out="<div class='board'> ";
   out+="<div class='bar_area'> ";
   out+="<div>"+kor +"</div>";
   // 국어점수 막대 만들기
   kor = parseInt(kor/10); //   / 연산자는 소수점자리 결과값이므로 정수부분만 가져오기위해 parseInt()
   
   for(var i = 10; i>=1 ; i--){
      if(kor>=i){ // 색상 있는 div
         out += "<div class='bar' style='background:green;'></div>";
      }else{ // 색 없는 div   
         out += "<div class='bar'></div>";
      }
   }
   out+="<div>국어</div>";
   out +="</div>";
   //수학 점수 막대 만들기
   
   out +="<div class='bar_area'>";
   out +="<div>"+mat+"</div>";
   mat = parseInt(mat/10);
   for(var i=10; i>=1; i--){
      if(mat>=i){
         out += "<div class='bar' style='background:blue;'></div>";
      }else{
         out+="<div class='bar'></div>";
      }
   }
   out +="<div>수학</div>";
   out +="</div>";  

   //영어 점수 막대 만들기
   
   out +="<div class='bar_area'> ";
   out +="<div>"+eng+"</div>";
   eng = parseInt(eng/10);
   for(var i=10; i>=1; i--){
      if(eng>=i){
         out+="<div class='bar' style='background:#778899;'></div>";
      }else{
         out+="<div class='bar'></div>";
      }
   }
   out +="<div>영어</div>";
   out +="</div>";



   out += "</div>"; // class=board div 종료 

   var box = document.getElementById("box");
   box.innerHTML = out;
}

window.onload=function(){
  // 이미지 넣어주기위해  class명이 img_bg인 div들을 가져온다.
  var imgbg = document.getElementsByClassName("img_bg");

  //class명으로 가져왔기때문에  여러개의 태그를 배열의 형태로 저장해서 imgbg에 넣어줬다.
  // 배열이니까 반복문사용
  for(var i in imgbg){
    imgbg[i].style.background="url(http://www.placeimg.com/300/700) no-repeat center";
    imgbg[i].style.backgroundSize="cover";
  }
}
//객체.style 은  해당 태그의 style 설정

function menu_view(){
  var menu = document.getElementById("menu_section");
  if(menu.style.display == "flex")
    menu.style.display="none";
  else
    menu.style.display="flex";
}

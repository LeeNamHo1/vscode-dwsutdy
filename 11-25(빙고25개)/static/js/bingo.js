
const num=[];//빙고 판에 출력될 숫자가 저장되어있는 배열
const num_copy=[];

function start(){
  if( num.length != 0 ){
    alert("게임시작 했어");
    return;
  }
    for(var i=1; i<=25; ){
      var tmp = Math.floor(Math.random()*50) + 1;
      if( num.indexOf(tmp) == -1 ){
        num.push(tmp); 
        num_copy.push(tmp);
        i++;
      }
    }
    //25개 숫자 랜덤으로 중복없이 만들기
    var num_td = document.getElementsByClassName("num");
    for(var i in num_td)
      num_td[i].innerText = num[i];
}


function check(n,obj){
  if(num.length==0){
    alert("start를 해주세요");
    return;
  }

 // var numtd = document.getElementsByClassName("num");
  
  if(num_copy[n] == 0){   // 빙고숫자를 잘못클릭 하면  수정 하기위해서 원래 숫자로 돌려주는곳
    num_copy[n] = num[n];
    obj.style.background="";
   // numtd[n].style.background="";
  }else{
    num_copy[n]=0;
    obj.style.background="pink";

    end_game();

   // numtd[n].style.background="pink";
  }
}

function end_game(){
  var 빙고=0,  가로=0, 세로=0, 대각선1=0, 대각선2=0;

  for(var i =0; i<5; i++){  // 줄
    for(var k=0; k<5; k++){   //  칸
        if( num_copy[i*5+k] == 0)
            가로++;
        if( num_copy[k*5+i] == 0)
            세로++;
    }
    if(num_copy[i*6] == 0)대각선1++;
    if(num_copy[i*4+4] ==0)대각선2++;

    if(대각선2==5)빙고++;
    if(대각선1==5)빙고++;
    if(가로==5) 빙고++;
    if(세로==5) 빙고++;
   
    가로=0;
    세로=0;
  }

  var game_state = document.getElementById("line");
  game_state.innerText=빙고+"줄 완성";
  if(빙고==5) alert(" 5  빙고 !!");

}
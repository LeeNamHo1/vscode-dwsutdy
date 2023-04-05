
var cnt=0;
var img_list =["car1.png", "car2.png", "car3.png", "car4.png"];
var sec=[0,0,0,0];//주차 시간 계산 배열
var tnum=[0,0,0,0];

window.onload=function(){
    //주차 버튼
    var time_bt = document.getElementById("start");
    time_bt.addEventListener("click", add, time);
    //출차 버튼
    var del = document.getElementsByClassName("img_delete");   
    for(var i in del){
        del[i].addEventListener("click", redel);
       
    }
}

function stop(obj,tn){//주차 요금 계산서
    obj.classList.add("active");
    clearInterval(tnum[tn]);

    var minute = parseInt(sec[tn]/60);
    var price = parseInt(minute/10) *100;
    var hour = parseInt(minute/60);
    minute = minute%60;

    alert("주차시간: "+hour+"분 / 주차 요금: "+price+"원")
}

function redel(){//출차 버튼구성
    var value = this.dataset.value;
    var img = document.getElementsByClassName("img_view");
    img[value].src="";
}

function time(){//주차 버튼 클릭과 동시에 시간 시작
    var stop = document.getElementsByClassName("img_delete");
    stop[cnt].classList.remove("active");

    var time_c = cnt;
    tnum[time_c] = setInterval(function(){timer(time_c); }, 1);
    cnt++;
}
    

function add(){//이미지 나오게하는 구성
    if(cnt==4) cnt=0;
    //이미지 출력
    var img = document.getElementsByClassName("img_view");
    img[cnt].src="./static/image/"+img_list[cnt];
    cnt++;
  }
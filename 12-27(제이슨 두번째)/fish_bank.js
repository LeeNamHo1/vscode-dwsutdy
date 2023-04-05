//fish_bank.js

function shelter(경도,경도분,경도초,설치년도,어초종류,어초확인수량,연번,위도,위도분,위도초,지역명){  // 객체 생성자 함수
  this.경도 = parseInt(경도)+좌표계산(경도분,경도초);
  this.위도=  parseInt(위도)+좌표계산(위도분,위도초);
  this.어초종류=어초종류;
  this.어초확인수량=어초확인수량;
  this.설치년도=설치년도;
  this.연번 = 연번;
  this.지역명=지역명;
}
function 좌표계산(분,초){
  min = parseInt(분);  //5분
  sec = parseFloat(초);//30.2초
  total_sec = min*60 + sec; //330.2초
  res = total_sec/3600;
  return res.toFixed(6);
}
function print_list(arr, id){
  $table = $("#"+id);
  console.log(arr);
  $.each(arr,function(v){  // arr 배열이기때문에  v는 인덱스
      t = "<tr class='fish' data-num='"+v+"'><td>"+arr[v].연번+"</td><td>"+arr[v].지역명+
      "</td><td>"+arr[v].설치년도+"</td><td>"+arr[v].어초종류+"</td></tr>"
      $table.append(t);
      $(".fish").click(function(){
        var options = { //지도를 생성할 때 필요한 기본 옵션
          center: new kakao.maps.LatLng(arr[$(this).data('num')].위도, arr[$(this).data('num')].경도), //지도의 중심좌표.
          level: 3 //지도의 레벨(확대, 축소 정도)
        };
        var container = $("#map");
        var map = new kakao.maps.Map(container, options); 
      });
  });

  /*
    for( i in arr){
        arr[i]
    }
    for(i=0; i<arr.length; i++){
        arr[i]
    }
  */
}

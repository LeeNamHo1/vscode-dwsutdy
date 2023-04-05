const num = [];

var row = 0; // 가로빙고
var col = 0; // 세로빙고
var cross = 0; // 대각선빙고


window.onload = function() {

    var box = document.getElementById("game_box")

    for (var i=0; i<25; i++) {
        box.appendChild(add_box());
    }

    for(var i=0; i<25;){
        var tmp = Math.floor(Math.random()*25)+1;
        if(num.indexOf(tmp)==-1){
          i++;
          num.push(tmp);
        }
    }

    var box = document.getElementsByClassName("box")
    for ( var i in box ) {
        box[i].innerHTML = num[i];
    }

    for(var i in box){
        box[i].addEventListener("click",function(){
            check(this);
        });
    }

    function check(color){
        color.style.background="red";
    }
}

function add_box() {
    var div = document.createElement ("div");
    div.setAttribute("class","box");
    return div;
}
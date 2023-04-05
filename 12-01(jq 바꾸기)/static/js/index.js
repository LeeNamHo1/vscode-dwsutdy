
$("#bg_color").change(function(){
  $("#preview_wrap").css("background",$(this).val());
});

$("#title").keyup(function(){
  $("#preview_title").text( $(this).val() );
});
$("#title_size").change(function(){
  $("#preview_title").css("font-size",$(this).val()+"px");
});
$("#title_color").change(function(){
  $("#preview_title").css("color",$(this).val());
})

$("#sub_title").keyup(function(){
  $("#preview_sub_title").text( $(this).val() );
});
$("#sub_title_size").change(function(){
  $("#preview_sub_title").css("font-size",$(this).val()+"px");
});
$("#sub_title_color").change(function(){
  $("#preview_sub_title").css("color",$(this).val());
})


$("#content").keyup(function(){
    var cont="";
    var temp = $(this).val();
    temp = temp.split("\n");
    cont = temp.join("<br>");

    $("#preview_content").html( cont );
});
$("#content_size").change(function(){
  $("#preview_content").css("font-size",$(this).val()+"px");
});
$("#content_color").change(function(){
  $("#preview_content").css("color",$(this).val());
})



var bt_title = document.getElementById("bt_title");
bt_title.addEventListener("keyup",function(){
  var val = this.value;
  var bt = document.querySelector("#preview_button>button");
  bt.innerTEXT(val);
});


$("#bt_title").keyup(function(){
  $("#preview_button>button").text( $(this).val() );
});
$("#bt_title_size").change(function(){
  $("#preview_button button").css("font-size",$(this).val()+"px");
});
$("#bt_title_color").change(function(){
  $("#preview_button>button").css("color",$(this).val());
})
$("#bt_bg_color").change(function(){
  $("#preview_button button").css("background",$(this).val());
});
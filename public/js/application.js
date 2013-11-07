$(document).ready(function(){
  $("#get_color").on('click', function(event){
    event.preventDefault();
    changeCellColor();
  })

  function changeCellColor(){
    var response = $.post("/color", function(response){
      modifyDom(JSON.parse(response));
    });
  }

  function modifyDom(response){


    $("li").eq(response.cell).css("background-color", response.color);


  }

});
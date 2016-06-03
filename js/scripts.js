$(document).ready (function(){

  $("select#animal").change(function(event) {
    var animal = parseInt($("#animal").val());
  //  event.preventDefault();
    $("#followUp2a").hide();
    $("#followUp2b").hide();
    $("#followUp2c").hide();

    if (animal === 1 ) {
      $("#followUp2a").show();
    }
    else if (animal === 2 ) {
      $("#followUp2b").show();
    }
    else  {
      $("#followUp2c").show();
    }
  });

  $("select#items").change(function(event) {
    var items = parseInt($("#items").val());
  //  event.preventDefault();
    // $("#followUp3").hide();

    if (items >= 0 ) {
      $("#followUp3").show();
    }
    else  {
      ("#followUp3").show();
    }
  });

  $("select#activity").change(function(event) {
    var activity = parseInt($("#activity").val());
  //  event.preventDefault();
    // $("#followUp3").hide();

    if (activity >= 0 ) {
      $("#followUp3").show();
    }
    else  {
      ("#followUp3").show();
    }
  });

  $("select#show").change(function(event) {
    var show = parseInt($("#show").val());
//    event.preventDefault();
    if (show >= 0 ) {
      $("#followUp3").show();
    }
    else  {
      ("#followUp3").show();
    }
  });

  $("#colorPick").submit(function(event) {
    var color = ($("#color").val());
    event.preventDefault();
      $("#result").show();
  });

  $("select#animal").change(function(event) {
    var results = parseInt($("#animal").val());
  //  event.preventDefault();
    if (results === 1 ) {
      $("#result1").show();
    }
      else if (results === 2 ) {
        $("#result2").show();
      }
      else {
        $("#result3").show();
      }
      
  });


});

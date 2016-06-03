$(document).ready (function(){

  $("select#favTopic").change(function(event) {
    var topic = parseInt($("#favTopic").val());
  //  event.preventDefault();
    $("#followUp2a").hide();
    $("#followUp2b").hide();
    $("#followUp2c").hide();

    if (topic === 1 ) {
      $("#followUp2a").show();
    }
    else if (topic === 2 ) {
      $("#followUp2b").show();
    }
    else  {
      $("#followUp2c").show();
    }
  });

  $("select#favArt").change(function(event) {
    var artist = parseInt($("#favArt").val());
  //  event.preventDefault();
    // $("#followUp3").hide();

    if (artist >= 0 ) {
      $("#followUp3").show();
    }
    else  {
      ("#followUp3").show();
    }
  });

  $("select#favTech").change(function(event) {
    var tech = parseInt($("#favTech").val());
  //  event.preventDefault();
    // $("#followUp3").hide();

    if (tech >= 0 ) {
      $("#followUp3").show();
    }
    else  {
      ("#followUp3").show();
    }
  });

  $("select#favFit").change(function(event) {
    var fit = parseInt($("#favFit").val());
//    event.preventDefault();
    if (fit >= 0 ) {
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

  $("select#favTopic").change(function(event) {
    var results = parseInt($("#favTopic").val());
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

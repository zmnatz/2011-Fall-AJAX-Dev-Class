$(function() {
    $("#time-button-1").click(showTime1);
    $("#data-button-1").click(showParams1);
    $("#data-button-2").click(showParams2);
    $("#data-button-3").click(showParams3);
    $("#load-button").click(insertParams);
    $("#nums-button").click(showNums);
});


function showTime1() {
  $.ajax({ url: "show-time.jsp",
           success: showAlert,
           cache: false });
}

function showAlert(text, status) {
  alert(text);
}

function showParams1() {
  $.ajax({ url: "show-params.jsp",
           data: "param1=foo&param2=bar",
           success: showAlert });
}

function showParams2() {
  var params =
    { param1: $("#field1").val(),
      param2: $("#field2").val() };
  $.ajax({ url: "show-params.jsp",
           data: params,
           success: showAlert });
}

function showParams3() {
  $.ajax({ url: "show-params.jsp",
           data: $("#data-form").serialize(),
           success: showAlert });
}

function insertParams() {
  $("#params-result").load("show-params.jsp", 
                           $("#load-form").serialize());
}

function showNums() {
  $.ajax({ url: "show-nums",
           dataType: "json",
           success: showNumberList });
}

function showNumberList(jsonData) {
  var list = makeList(jsonData.fg, jsonData.bg, 
                      jsonData.fontSize, 
                      jsonData.numbers);
  $("#nums-result").html(list);
}

function makeList(fg, bg, fontSize, nums) {
  return(
    listStartTags(fg, bg, fontSize) +
    listItems(nums) +
    listEndTags());
} 

function listStartTags(fg, bg, fontSize) {
  return(
    "<div style='color:" + fg + "; " +
                "background-color:" + bg + "; " +
                "font-size:" + fontSize + "px'>\n" +
    "<ul>\n");
}

function listItems(items) {
  var result = "";
  for(var i=0; i<items.length; i++) {
    result = result + "<li>" + items[i] + "</li>\n";
  }
  return(result);
}

function listEndTags() {
  return("</ul></div>");
}
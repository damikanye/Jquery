$(document).ready(function(){
    $("button").click(function(){
        var newList= $("#textfield").val();
        console.log(newList);
        $("#list").append("<li>" + newList + "</li>");
    });
});


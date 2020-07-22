$(document).ready(function(){
    setTimeout(function(){
        $.get("https://cat-fact.herokuapp.com/facts/random", function(data, textStatus, jqXHR){
        var _html = data.text+'<br>'+'<img src="https://cataas.com/cat/gif" alt="404 meow">';
        $("#place_data").html(_html);
    })
    },5000);
})

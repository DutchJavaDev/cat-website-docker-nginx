$(document).ready(function(){
    setTimeout(function(){
        $.get("https://cat-fact.herokuapp.com/facts/random", function(data, textStatus, jqXHR){
        var number = 1 + Math.floor(Math.random() * 2048);
        //var _html = data.text+'<br>'+'<img src="https://cataas.com/cat/gif?dummy=371662" alt="404 meow">';
        var url = data.text+'<br>'+'<img src="https://cataas.com/cat/gif?dummy="';

        $("#place_data").html(url.concat(number ,'" alt="404 meow">'));
    })
    },5000);
})

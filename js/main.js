$(document).ready(function(){

    setInterval(Meow,10000);

    function Meow()
    {
            $.get("https://cat-fact.herokuapp.com/facts/random", function(data, textStatus, jqXHR){
                var number = 1 + Math.floor(Math.random() * 2048);
                var url = data.text+'<br>'+'<img src="https://cataas.com/cat/gif?do_not_edit_this_query=';
                $("#place_data").html(url+number+'" alt="404 told you not to edit it it">');
            });
     }

})

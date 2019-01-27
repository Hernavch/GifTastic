var topics =["Alphabet", "Numbers", "Sesame Street"];
var topicCount = 0;


// $(document.body).on("click", ".checkbox", function() 
$(document.body).on("click", ".gif", function(){
    var gifname = $(this).text();
    // alert("here i am")
    console.log(gifname);
// var name= topics[i].name;
     queryURL = "https://api.giphy.com/v1/gifs/search?api_key=2C6OXg6eGjPol03IE8JAuBTJD5Yh9Oha&q=" + gifname + "&limit=10&offset=0lang=en";

        $.ajax({
            url: queryURL,
            method:"GET"
        }).then(function(response){
            // console.log(response.data[0].analytics.onclick.url);
            // var gify= response.data[g];
             for(var g = 0; g < response.data; g ++){
                 alert("come on!")
               var gif_url= response.data[g].analytics.onclick.url;
            //    console.log(response);
               console.log(gif_url); 
             }
           
        })

        });



function makeABtn(){
    $(".subwrapper").empty();

    for(var i = 0; i < topics.length; i++) {
        topicCount++;
        var btn= $("<button>");
        var name= topics[i]
        btn.attr("class", "gif "+ topics[i]);
        btn.attr("id", "topic-"+ topicCount);
        btn.text(name);
        $(".subwrapper").append(btn);
        btn.attr("giftogif", topics);
    };
    

    }

var topic = $("#topic-input").val();

$("#add-btn").on("click", function(event) {
    event.preventDefault();
    var topic = $("#topic-input").val();
    topics.push(topic);
    console.log(topics);
    makeABtn();
    
});

makeABtn();
console.log(topics);
var topics =["Doxie","Daschund", "Weeniedog", "Doggo", "Puppy", "Dogbaby", "Chihuahua"];
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
            var result= response.data;
                        
            for(var j=0; j < response.data.length; j++){
               gifdiv= $("<div>");
               gifdiv.attr("class","thisgif");
               var rating= result[j].rating;
               var rtag = $("<p>").text("Rating: " + rating); 
               $(".gifdiv").append(rtag);

               var gifimage = $("<img>");
               gifimage.attr("class", "img-fluid");
               gifimage.attr("id", "img-gif");

               var animated= result[j].images.original.url;
               var stillimage= result[j].images.original_still.url;


               gifimage.attr("src", result[j].images.original.url);
               gifdiv.append(gifimage);
               gifdiv.prepend(rtag);
               $(".giftastic").prepend(gifdiv);

                              
               
               $(document.body).on("click", ".thisgif", function(){
                   var state = $(this).attr("data-state");
                   animated.attr("data-state", 'animate');
                   stillimage.attr("data-state", 'still');
                //    console.log(animated);
                //    alert("moving!");
                   if( "data-state" === "animate"){
                       alert("this");
                    
                   }
                   
      
                 })

               

            
             }
           
        })
        
        });

  

function makeABtn(){
    $(".subwrapper").empty();

    for(var i = 0; i < topics.length; i++) {
        topicCount++;
        var btn= $("<button>");
        var name= topics[i]
        btn.attr("class", "gif btn btn-primary "+ topics[i]);
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
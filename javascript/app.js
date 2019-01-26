var topics =[
    {name:"LA Rams"},
    {name:"LA Rams"},
    {name:"LA Rams"},
    {name:"LA Rams"},
    {name:"LA Rams"},
    {name:"LA Rams"},
    {name:"LA Rams"}

];

function displaygifs(){
// var gifs = $(this)Attr("");
var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=2C6OXg6eGjPol03IE8JAuBTJD5Yh9Oha&q=rams&limit=10&offset=0&rating=PG&lang=en";

$.ajax({
    url:queryURL,
    method:"GET"
})

}

function makeABtn(){
    $(".subwrapper").empty();
    for(var i = 0; i < topics.length; i++) {
        var btn= $("<button>");
        btn.addClass("giftogif");
        btn.text(topics[i].name);
        $(".subwrapper").append(btn);
        // btn.attr("");
        
// 

    }

}
var topic = $("#topic-input").val();

$("#add-btn").on("click", function(event) {
    event.preventDefault();
    var topic = $("#topic-input").val();
    topics.push(topics.name);
    console.log(topic);
    makeABtn();
    
});

console.log(this);
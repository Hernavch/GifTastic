var topics =["Alphabet", "Numbers", "Sesame Street"];

$("button").on("click", function(){
var gifname = $(this).attr("name");
console.log(gifname);
// var name= topics[i].name;
var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=2C6OXg6eGjPol03IE8JAuBTJD5Yh9Oha&q=" + gifname + "&limit=10&offset=0&rating=PG&lang=en";

$.ajax({
    url: queryURL,
    method:"GET"
}).then(function(response){
    console.log(response);
})

});

for(var i = 0; i < topics.length; i++) {
    var btn= $("<button>");
    var name= topics[i]
    btn.addClass("giftogif ");
    btn.text(name);
    $(".subwrapper").append(btn);
    btn.attr("giftogif", topics);
};

function makeABtn(){
    // $(".subwrapper").empty();
    for(var i = 0; i < topics.length; i++) {
        var btn= $("<button>");
        btn.addClass("giftogif");
        btn.text(topics[i].name);
        $(".subwrapper").append(btn);
        btn.attr("data-name", topics);
        // Portion keeps repeating btns
// 

    }

}
var topic = $("#topic-input").val();

$("#add-btn").on("click", function(event) {
    // event.preventDefault();
    var topic = $("#topic-input").val();
    topics.push(topic);
    console.log(topics);
    makeABtn();
    
});

console.log(this);
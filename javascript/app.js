var topics =[
    {name:"LA Rams"},
    {name:"LA Rams"},
    {name:"LA Rams"},
    {name:"LA Rams"},
    {name:"LA Rams"},
    {name:"LA Rams"},
    {name:"LA Rams"}

];

// function displaygifs(){

// }



$("#add-btn").on("click", function(event) {
    event.preventDefault();
    var topic = $("topic-input").val();
    topics.push(topic);
    console.log(topic);
    
    function makeABtn(){
        for(var i = 0; i < topics.length; i++) {
            var btn= $("<button>");
            btn.addClass("giftogif");
            btn.text(topic);
            $(".subwrapper").append(btn);
            // btn.attr("");
    
    
        }
    
    }
})

console.log(this);
var apiKey = "&appid=9329c7236e5aabd423e23ac6e00d8109";
var city = $("#searchBar").val();


$("#searchBar").keypress(function(event) { 
	if (event.keyCode === 13) { 
		event.preventDefault();
		$("#searchBtn").on("click"); 
	} 
});

// Submit Button On Click Event
$("#submitBtn").on("click", function() {
    event.preventDefault();
    city = $("#searchBar").val();
    $("#searchBar").val("");
    var queryUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + city + apiKey;
    $.ajax({
        url: queryUrl,
        method: "GET"
    })
    .then(function (response){
        console.log(response);
        console.log(response.name)
    });
});
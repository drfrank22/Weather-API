var apiKey = "&appid=9329c7236e5aabd423e23ac6e00d8109";
var city = $("#searchBar").val();


// $("#searchBar").keypress(function(event) { 
// 	if (event.keyCode === 13) { 
// 		event.preventDefault();
// 		$("#searchBtn").on("click"); 
// 	} 
// });

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
        var tempF = (response.main.temp - 273.15) * 1.80 + 32;
            console.log(Math.floor(tempF))
            var tempF = (response.main.temp - 273.15) * 1.80 + 32;
            tempF = Math.floor(tempF);
            $(cardBody).empty();
            // var card = $("#card");
            var cardBody = $("#currentConditions");
            $("#weatherIcon").attr("src", "https://openweathermap.org/img/w/" + response.weather[0].icon + ".png");
            var currentCity = $("#currentCity").text(response.name);
            var date = $("#currentDate").text(moment().format("MMMM Do YYYY"));
            var currentTemp = $("#currentTemp").text("Temperature: " + tempF + " °F");
            var currentHumidity = $("#currentHumidity").text("Humidity: " + response.main.humidity + "%");
            var currentWindSpeed = $("#currentWindSpeed").text("Wind Speed: " + response.wind.speed + " MPH");
        
            cardBody.append(currentCity, date, currentTemp, currentHumidity, currentWindSpeed);
        
    });

    




    // Call Functions
    // showCurrentConditions();
    // showForecast();
    // showSearchList();
});

// Function displaying current weather conditions.
// function showCurrentConditions (response) {
//     var tempF = (response.main.temp - 273.15) * 1.80 + 32;
//     tempF = Math.floor(tempF);
//     $(cardBody).empty();
//     // var card = $("#card");
//     var cardBody = $("#currentConditions");
//     $("#weatherIcon").attr("src", "https://openweathermap.org/img/w/" + response.weather[0].icon + ".png");
//     var currentCity = $("#currentCity").text(response.name);
//     var date = $("#currentDate").text(moment().format("MMMM Do YYYY"));
//     var currentTemp = $("#currentTemp").text("Temperature: " + tempF + " °F");
//     var currentHumidity = $("#currentHumidity").text("Humidity: " + response.main.humidity + "%");
//     var currentWindSpeed = $("#currentWindSpeed").text("Wind Speed: " + response.wind.speed + " MPH");

//     cardBody.append(currentCity, date, currentTemp, currentHumidity, currentWindSpeed);


   

// }

// Function displaying 5 day forecast.
// function showForecast (response) {
    
// }

// // Function prepending search items in list.
// function showSearchList () {
    
// }
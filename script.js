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
    showForecast();
    // showSearchList();
});

// Function displaying 5 day forecast.
function showForecast (response) {
    
    var queryUrl = "https://api.openweathermap.org/data/2.5/forecast?q=" + city + apiKey;
    $.ajax({
    url: queryUrl,
    method: "GET"
}) .then(function(response) {
    var days = response.list
    console.log(days);

    for (i = 0; i < days.length; i++) {
        if (days[i].dt_txt.indexOf("12:00:00") !== -1){

            var tempF = (days[i].main.temp - 273.15) * 1.80 + 32;
            tempF = Math.floor(tempF);

            var card = $("#fiveDay").addClass("card col-md-2 ml-4 bg-primary text-white");
            var cardBody = $("<div>").addClass("card-body p-3 forecastBody")
            var cityDate = $("<h4>").addClass("card-title").text(days[i].dt_txt);
            var temperature = $("<p>").addClass("card-text forecastTemp").text("Temperature: " + tempF + " °F");
            var humidity = $("<p>").addClass("card-text forecastHumidity").text("Humidity: " + results[i].main.humidity + "%");

            var image = $("<img>").attr("src", "https://openweathermap.org/img/w/" + results[i].weather[0].icon + ".png")

            cardBody.append(cityDate, image, temperature, humidity);
            card.append(cardBody);
            $(card).append$("#forecast");

        }
    }
})
}

// // Function prepending search items in list.
// function showSearchList () {
    
// }
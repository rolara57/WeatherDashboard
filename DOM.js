//set variables/ using const in place of var, const cannot be reassigned/should use caps 
const SEARCH_FORM = $("#search")
const FORM_INPUT = $("#input")
const WIND_DIV = $("#wind")
const PRESS_DIV = $("#press")
const TERM_DIV = $("#term")
const TEMP_DIV = $("#tempF")
const HUMIDITY_DIV = $("#humidity")
//key
const OPEN_WEATHER_API_KEY = "&appid=0c9f4acc9a964c20f33315c812d272e4"
const OPEN_WEATHER_URL = "https://api.openweathermap.org/data/2.5/"

function OpenWeatherUrl(val){
    return OPEN_WEATHER_URL + val + OPEN_WEATHER_API_KEY
}
//app
console.log(OPEN_WEATHER_API_KEY);

SEARCH_FORM.submit(function (event) {
  event.preventDefault();
  var input = FORM_INPUT.val();
  FORM_INPUT.val("");
//separates zip from city(numbers from letters) 
  var url;
  if (isNaN(input)) {
    url = OpenWeatherUrl("/weather?q=" + input);
  } else {
    url = OpenWeatherUrl("/weather?zip=" + input);
  }
   // "git and input from OpenWeather
  console.log(url);
  $.get(url)
    .then(function (response) {
      console.log(response);
     
      var newinp = $("<div>").text(input);
      var newtemp = $("<div>").text(response.main.temp);
      var newhumidity = $("<div>").text(response.main.humidity);
      var newwind = $("<div>").text(response.wind.speed);
      var newpress = $("<div>").text(response.main.pressure);
      //convert temp from k-F
       //newtemp = (response.main.temp - 273) * 1.80 + 32 ;
       //newtemp = Math.trunc (newtemp);
     //inserts specified content
      TERM_DIV.append(newinp);
      TEMP_DIV.append(newtemp);
      HUMIDITY_DIV.append(newhumidity);
      WIND_DIV.append(newwind);
     PRESS_DIV.append(newpress);
    
      
    })
    .catch(function (error) {
      console.warn(error);
    });   
});


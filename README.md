Weather Dashboard
user story:
If you want to know the weather in multiple cities to see what the conditions are.

Working Criteria:
GIVEN a weather dashboard with form inputs 
WHEN I search for a city
THEN I am presented with current and future conditions for that city and that city is added to the search history
WHEN I view current weather conditions for that city
THEN I am presented with the city name, the date, an icon representation of weather conditions, the temperature, the humidity, the wind speed, and the UV index
WHEN I view the UV index
THEN I am presented with a color that indicates whether the conditions are favorable, moderate, or severe
WHEN I view future weather conditions for that city
THEN I am presented with a 5-day forecast that displays the date, an icon representation of weather conditions, the temperature, and the humidity
WHEN I click on a city in the search history
THEN I am again presented with current and future conditions for that city
WHEN I open the weather dashboard
THEN I am presented with the last searched city forecast.

How it works:
In javascript the first section is most of the variables to set the page up
Next section is the key section where the Openweather website and keys are linked together
The app section is the search form function and adds to the input field
the following section separates the zip from city use using the NaN(not a number) function
the folowing section  is the git and input from openweather
the temperature is converted from K-F then the decimals are taken out
next to last the content is appended following by a error function in the console log. 
The .html is a basic set up with the divs, and forms for buttons

Issues
The TempF is not appending for some reason and the project is not completed. I was unable to get to styling and forecast. It was started as soon as the last project was turned in.   


# WeatherDashboard

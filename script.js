
var searchForm = document.querySelector("#searchForm")
var searchResult = document.querySelector(".result")
var searchBtn = document.querySelector("#searchBtn")

var cities=JSON.parse(localStorage.getItem("cities"))||[];


searchBtn.addEventListener("click",function(e){
  e.preventDefault()
  var searchBar = document.querySelector("#searchBar").value
  if(searchBar){
    document.querySelector('#searchBar').value=""
    search(searchBar)

  }
})



function search(searchBar){
  
  Addnew(searchBar)
  var weatherApi = "https://api.openweathermap.org/data/2.5/weather?q=" + searchBar + "&units=metric&appid=e135f1f623e7725fe85cb97874db84e4"

fetch(weatherApi)
  .then(function (response) {
    return response.json();
})
  .then(function (data) {
    // console.log(data);


    var lat = data["coord"]["lat"]
    var lon = data["coord"]["lon"]
    // console.log("this ",lat , lon)

    var city2=searchBar.value
    

    var onecallApi = "https://api.openweathermap.org/data/2.5/onecall?lat=" + lat +"&lon=" + lon + "&units=metric&appid=e135f1f623e7725fe85cb97874db84e4"

    fetch(onecallApi)
    .then(response => response.json())
  
    .then(function (data) {
      console.log("onecall ", data)
      
  
      var cityName = searchBar;
      var uvi=data.current.uvi
      // var country = data.current.country;
      var weatherDesc = data.current.weather[0].description;
      var weatherIcon = data.current.weather[0].icon;
      var temp = data.current.temp;
      var pressure = data.current.pressure
      var windSpeed = data.current.wind_speed;
      var humidity = data.current.humidity;
      var dataDate = data.current.dt
      var datemom = moment.unix(dataDate).format("dddd, MMMM Do YYYY");
    
    

      var currentDate = document.querySelector("#date")
      var currentCity =document.querySelector("#currentCity")
      var currentTemp =document.querySelector("#currentTemp")
      var currentClouds =document.querySelector("#currentClouds")
      var currentWs =document.querySelector("#currentWs")
      var uvI =document.querySelector("#uvI")
      var currentHumid = document.querySelector("#humidity")
      var miniIcon = document.querySelector(".icon")


       miniIcon.setAttribute("src", "https://openweathermap.org/img/w/" + weatherIcon + ".png");
       currentDate.innerText = datemom;
       currentCity.innerText = cityName;
       currentTemp.innerText = temp;
       currentWs.innerText = windSpeed;
       currentClouds.innerText = weatherDesc;
       uvI.innerText=uvi;
       currentHumid.innerText=humidity;
    
  
       // take the data from daily make a for loop and create a card element in that for loop
       console.log("forecast",data.daily[0].temp.day)
       console.log("winds", data.daily[0].wind_speed)
       console.log("uvi", data.daily[0].uvi)
       console.log("weather", data.daily[0].weather[0].description)
       console.log("icon", data.daily[0].weather[0].icon)

      
     

      function makeForecast() {
        var foreCast = document.querySelector("#fiveDforecastResult");
        foreCast.innerHTML="";
        for(var i =1; i < 6; i++){
          
          var foreDiv = document.createElement("div")
          // var dateEl = document.createElement('h2');
          

          var cityName = searchBar;
          var dailyUvi=data.daily[i].uvi;      
          var weatherDesc = data["daily"][i].weather[0].description;
          var dailyWeatherIcon = data.daily[i].weather[0].icon;
          var dailyTemp = data.daily[i].temp.day;
          var dailyPressure = data.daily[i].pressure
          var dailyWindSpeed = data.daily[i].wind_speed;
          var dailyHumidity = data.daily[i].humidity;
          var dailyDataDate = data.daily[i].dt
          var dailyDatemom = moment.unix(dailyDataDate).format("dddd, MMMM Do YYYY");

          miniIcon.setAttribute("src", "https://openweathermap.org/img/w/" + dailyWeatherIcon + ".png");
          // currentDate.innerText = datemom;
          // currentCity.innerText = cityName;
          // currentTemp.innerText = temp;
          // currentWs.innerText = windSpeed;
          // currentClouds.innerText = weatherDesc;
          // uvI.innerText=uvi;
          // currentHumid.innerText=humidity;

          foreCast.appendChild(foreDiv)
          foreDiv.innerHTML = `
          <h2> Date: ${dailyDatemom} </h2>
          <img src="https://openweathermap.org/img/wn/${dailyWeatherIcon}.png" /> 
          <h3> Temp: ${dailyTemp} °C</h3>
          <h3> Humidity:${dailyHumidity} %</h3>
          <h3> Wind Speed:${dailyWindSpeed} Km/H</h3>
          <h3 id="uvi"> UV Index:${dailyUvi}</h3>`

          console.log("daily icon", dailyWeatherIcon)





          
          


          
        }
        

        if ( uvi <= 3){
          document.getElementById("uvi").classList.add("low")
        }else if ( uvi > 3 && uvi < 5){
          document.getElementById("uvi").classList.add("moderate")
 
          }else if ( uvi > 5 && uvi < 7){
            document.getElementById("uvi").classList.add("high")
  
          }else if ( uvi > 7 && uvi < 10){
            document.getElementById("uvi").classList.add("very-high")
  
          }else if ( uvi > 10){
            document.getElementById("uvi").classList.add("extreme")
  
            }
        
      }

     
makeForecast();

})




       
  });

  
 
   
  // .catch(() => {
  //   msg.textContent = "Please search for a valid city";
  // " + country + " 
  // });


}

function Addnew(city) {
  var cities=JSON.parse(localStorage.getItem("cities"))||[];
  if(cities.indexOf(city)===-1){
    cities.push(city)
    localStorage.setItem("cities",JSON.stringify(cities))
  
    var history=document.querySelector(".search-history");
    var newDiv =  document.createElement("button");
    console.log(newDiv)
    newDiv.innerHTML=city
    newDiv.addEventListener('click',function(e){
      var newSearch=e.target.textContent
      search(newSearch)
      console.log(newSearch)
  
    })
    history.append(newDiv)
  }
  else{
    return
  }
 

  console.log("THIS IS WORKING")
}


function loadCities(){
  var history=document.querySelector(".search-history");
  for(var i=0;i<cities.length;i++){
    var newDiv =  document.createElement("button");
    console.log(newDiv)
    newDiv.innerHTML=cities[i]
    newDiv.addEventListener('click',function(e){
      var newSearch=e.target.textContent
      console.log(newSearch)
      search(newSearch)
     
    })
    history.append(newDiv)


  }
}

loadCities();























// {lon: -79.4163, lat: 43.7001}




// e135f1f623e7725fe85cb97874db84e4







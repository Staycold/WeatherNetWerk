
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

    
    

      
      var currentCity =document.querySelector("#currentCity")
      var currentTemp =document.querySelector("#currentTemp")
      var currentClouds =document.querySelector("#currentClouds")
      var currentWs =document.querySelector("#currentWs")
      var uvI =document.querySelector("#uvI")


    
       
       currentCity.innerText = cityName;
       currentTemp.innerText = temp;
       currentWs.innerText = windSpeed;
       currentClouds.innerText = weatherDesc;
       uvI.innerText=uvi;
    
  
       // take the data from daily make a for loop and create a card element in that for loop
       console.log("forecast",data.daily[0].temp.day)
       console.log("winds", data.daily[0].wind_speed)
       console.log("uvi", data.daily[0].uvi)
       console.log("weather", data.daily[0].weather[0].description)
       console.log("icon", data.daily[0].weather[0].icon)

      function makeForecast() {
        var foreCast = document.querySelector("#fiveDforecastResult");
        for(var i =0; i < data.daily[4]; i++){
          var foreDiv = document.createElement("div")
          
        }
        
        
      }



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
















function printResults(resultObj) {
  console.log(resultObj);

  var resultCard = document.createElement('div');
  resultCard.classList.add('card', 'bg-light', 'text-dark', 'mb-3', 'p-3');

  var resultBody = document.createElement('div');
  resultBody.classList.add('card-body');
  resultCard.append(resultBody);

  var titleEl = document.createElement('h3');
  titleEl.textContent = resultObj.title;
}









// {lon: -79.4163, lat: 43.7001}




// e135f1f623e7725fe85cb97874db84e4







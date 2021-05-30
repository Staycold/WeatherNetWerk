var date = moment().format();
var searchForm = document.querySelector("#searchForm")
var searchBar = document.querySelector("#searchBar")
var searchResult = document.querySelector(".result")
var resultsContainer = document.querySelector()



fetch("https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}")
  .then(response => response.json())
  .then(data => {
   
  })
  .catch(() => {
    msg.textContent = "Please search for a valid city";
  });
// var date = moment().format("ll");
var searchForm = document.querySelector("#searchForm")
var searchBar = document.querySelector("#searchBar")
var searchResult = document.querySelector(".result")
var weatherApi = "https://api.openweathermap.org/data/2.5/weather?q=toronto&appid=e135f1f623e7725fe85cb97874db84e4"




addEventListener("submit", search)

function search(){
  prevent.default()


fetch(weatherApi)
  .then(function (response) {
    return response.json();
})
  .then(function (data) {
    console.log(data);
});
console.log(response)
}    





















// e135f1f623e7725fe85cb97874db84e4






// fetch("https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}")
//   .then(response => response.json())
//   .then(data => {
   
//   })
//   .catch(() => {
//     msg.textContent = "Please search for a valid city";
//   });
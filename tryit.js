// function getParams() {
//     // Get the search params out of the URL (i.e. `?q=london&format=photo`) and convert it to an array (i.e. ['?q=london', 'format=photo'])
//     var searchParamsArr = document.location.search.split('&');
  
//     // Get the query and format values
//     var query = searchParamsArr[0].split('=').pop();
//     var format = searchParamsArr[1].split('=').pop();
  
//     searchApi(query, format);
//   }


function searchApi(query, format) {
    var weatherApi = "https://api.openweathermap.org/data/2.5/weather?q=" + searchBar + "&units=metric&appid=e135f1f623e7725fe85cb97874db84e4";
  
    // if (format) {
    //   weatherApi = 'https://www.loc.gov/' + format + '/?fo=json';
    // }
  
    // weatherApi = weatherApi + '&q=' + query;
  
    fetch(weatherApi)
      .then(function (response) {
        if (!response.ok) {
          throw response.json();
        }
  
        return response.json();
      })
      .then(function (locRes) {
        // write query to page so user knows what they are viewing
        resultTextEl.textContent = locRes.search.query;
  
        console.log(locRes);
  
        if (!locRes.results.length) {
          console.log('No results found!');
          resultContentEl.innerHTML = '<h3>No results found, search again!</h3>';
        } else {
          resultContentEl.textContent = '';
          for (var i = 0; i < locRes.results.length; i++) {
            printResults(locRes.results[i]);
          }
        }
      })
      .catch(function (error) {
        console.error(error);
      });
  }


  searchBtn.addEventListener("click", search)

function search(event){
  event.preventDefault()
  var searchBar = document.querySelector("#searchBar").value
  var weatherApi = "https://api.openweathermap.org/data/2.5/weather?q=" + searchBar + "&units=metric&appid=e135f1f623e7725fe85cb97874db84e4"

fetch(weatherApi)
  .then(function (response) {
    return response.json();
})
  .then(function (data) {
    console.log(data);
});
}



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
  

// getParams();



// "https://api.openweathermap.org/data/2.5/weather?q=toronto&appid=e135f1f623e7725fe85cb97874db84e4"

// var getCity = function getGity(e){
//   e.preventDefault
//   var city = searchBar.value;
//   localStorage.setItem(city)
  
// }




// searchBtn.addEventListener("click", search)

// function search(event){
//   event.preventDefault()
//   var searchBar = document.querySelector("#searchBar").value
//   var weatherApi = "https://api.openweathermap.org/data/2.5/weather?q=id=718&units=metric&appid=e135f1f623e7725fe85cb97874db84e4"

// fetch(weatherApi)
//   .then(function (response) {
//     return response.json();
// })
//   .then(function (data) {
//     console.log(data);
// });

// var date = moment().format("ll");
// }
const dataContainer = document.getElementById('data');
const countryName = document.getElementById('countryName');
const activeCases = document.getElementById('activeCases');
const totalCases = document.getElementById('totalCases');
const critical = document.getElementById('critical');
const tested = document.getElementById('tested');
const totalDeaths = document.getElementById('deaths');
const totalRecovered = document.getElementById('recovered');
const deathRatio = document.getElementById('deathRatio');
const recoveryRatio = document.getElementById('recoveryRatio');
const searchBtn = document.querySelector("button[type='search']");
const searchBar = document.querySelector("input[type='search']");
const latestDataAPI = "https://api.quarantine.country/api/v1/summary/latest";


fetch(latestDataAPI)
  .then((response) => response.json())
  .then(function(jsonResponse){
    activeCases.innerHTML = jsonResponse['data']['summary']['active_cases'];
    totalCases.innerHTML = jsonResponse['data']['summary']['total_cases'];
    critical.innerHTML = jsonResponse['data']['summary']['critical'];
    totalDeaths.innerHTML = jsonResponse['data']['summary']['deaths'];
    deathRatio.innerHTML = jsonResponse['data']['summary']['death_ratio'];
    recoveryRatio.innerHTML = jsonResponse['data']['summary']['recovery_ratio'];
    totalRecovered.innerHTML = jsonResponse['data']['summary']['recovered'];
    tested.innerHTML = jsonResponse['data']['summary']['tested'];
    console.log(jsonResponse['data']);
  })
  .catch(function(error){
    console.log("Error: " + error)
  });

searchBar.addEventListener('input', function(){});
searchBtn.addEventListener('click', function(){});

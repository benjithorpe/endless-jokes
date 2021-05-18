const dataContainer = document.getElementById('data');
const countryName = document.getElementById('countryName');
const activeCases = document.getElementById('activeCases');
const totalDeaths = document.getElementById('deaths');
const totalCases = document.getElementById('totalCases');
const critical = document.getElementById('critical');
const tested = document.getElementById('tested');
const searchBtn = document.querySelector("button[type='search']");
const searchBar = document.querySelector("input[type='search']");
const deathRatio = document.getElementById('deathRatio');
const recoveryRatio = document.getElementById('recoveryRatio');
const totalRecovered = document.getElementById('recovered');
let errorParagraph = document.getElementById('error');
const latestDataAPI = "https://api.quarantine.country/api/v1/summary/latest";
// let countryAPI = "https://api.quarantine.country/api/v1/summary/region?region=florida&sub_areas=1"


fetch(latestDataAPI)
  .then((response) => response.json())
  .then((jsonResponse) => {
    const dataSummary = jsonResponse['data']['summary'];
    activeCases.innerHTML = formatNumber(dataSummary['active_cases']);
    totalCases.innerHTML = formatNumber(dataSummary['total_cases']);
    critical.innerHTML = formatNumber(dataSummary['critical']);
    totalDeaths.innerHTML = formatNumber(dataSummary['deaths']);
    deathRatio.innerHTML = formatNumber(dataSummary['death_ratio']);
    recoveryRatio.innerHTML = formatNumber(dataSummary['recovery_ratio']);
    totalRecovered.innerHTML = formatNumber(dataSummary['recovered']);
    tested.innerHTML = formatNumber(dataSummary['tested']);
  })
  .catch((error) => {
    errorParagraph.innerText = error;
  });

function formatNumber(number) {
  return new Intl.NumberFormat().format(number);
}

searchBar.addEventListener('input', function(){});
searchBtn.addEventListener('click', function(){
  const searchValue = searchBar.value.trim();
  console.log(searchValue);
  searchBar.value = "";

  // fetch(countryAPI, {
  //   headers: {},
  //   params: {}
  // })
});


// var requestOptions = {
//   method: 'GET',
//   redirect: 'follow'
// };

// fetch("https://api.quarantine.country/api/v1/spots/summary", requestOptions)
//   .then(response => response.text())
//   // .then(result => console.log(result))
//   .catch(error => console.log('error', error));

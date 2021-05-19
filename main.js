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
let errorMessage = document.getElementById('error');
const latestSummaryAPI = "https://api.quarantine.country/api/v1/summary/latest";
let countryAPI = "https://api.quarantine.country/api/v1/summary/region?";

fetch(latestSummaryAPI)
  .then((response) => response.json())
  .then((jsonResponse) => {
    const dataSummary = jsonResponse['data']['summary'];
    updateDataWith(dataSummary);
  })
  .catch((error) => errorMessage.innerText = error);

searchBar.addEventListener('keypress', (event) => {
  // code for the ENTER key is 13
  if(event.keyCode == 13){
    searchAndUpdateCountry();
  }
});

searchBtn.addEventListener('click', () => searchAndUpdateCountry());
const formatNumber = (number) => new Intl.NumberFormat().format(number);

function updateDataWith(data){
  activeCases.innerText = formatNumber(data['active_cases']);
  totalCases.innerText = formatNumber(data['total_cases']);
  critical.innerText = formatNumber(data['critical']);
  totalDeaths.innerText = formatNumber(data['deaths']);
  deathRatio.innerText = formatNumber(data['death_ratio']);
  recoveryRatio.innerText = formatNumber(data['recovery_ratio']);
  totalRecovered.innerText = formatNumber(data['recovered']);
  tested.innerText = formatNumber(data['tested']);
}

function searchAndUpdateCountry(){
  const searchValue = searchBar.value.trim();
  searchBar.value = "";

  if(!searchValue){
    return;
  }

  fetch(countryAPI + `region=${searchValue}`)
    .then((response) => {
      if(response.ok){
        errorMessage.innerText = "";
        return response.json();
      }
    })
    .then((data) => {
      const regionSummary = data['data']['summary'];
      countryName.innerText = searchValue;
      updateDataWith(regionSummary);
    })
    .catch((error) => errorMessage.innerText = `Region / Country (${searchValue}) Does not Exists!!`);
}

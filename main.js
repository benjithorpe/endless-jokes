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
const latestSummaryAPI = "https://api.quarantine.country/api/v1/summary/latest";
let countryAPI = "https://api.quarantine.country/api/v1/summary/region?";


fetch(latestSummaryAPI)
  .then((response) => response.json())
  .then((jsonResponse) => {
    const dataSummary = jsonResponse['data']['summary'];
    activeCases.innerText = formatNumber(dataSummary['active_cases']);
    totalCases.innerText = formatNumber(dataSummary['total_cases']);
    critical.innerText = formatNumber(dataSummary['critical']);
    totalDeaths.innerText = formatNumber(dataSummary['deaths']);
    deathRatio.innerText = formatNumber(dataSummary['death_ratio']);
    recoveryRatio.innerText = formatNumber(dataSummary['recovery_ratio']);
    totalRecovered.innerText = formatNumber(dataSummary['recovered']);
    tested.innerText = formatNumber(dataSummary['tested']);
  })
  .catch((error) => {
    errorParagraph.innerText = error;
  });

function formatNumber(number) {
  return new Intl.NumberFormat().format(number);
}

searchBar.addEventListener('input', function(){});

searchBtn.addEventListener('click', function(){
  if(!searchBar.value.trim()){
    return;
  }
  const searchValue = searchBar.value.trim();
  searchBar.value = "";

  fetch(countryAPI + `region=${searchValue}`)
  .then((res) => {
    if(res.ok){
      errorParagraph.innerText = "";
      return res.json();
    }else{
      errorParagraph.innerText = `Region or Country (${searchValue}) Does not Exists!!`;
      return;
    }
  })
  .then((data) => {
    const regionSummary = data['data']['summary'];
    countryName.innerText = searchValue;
    activeCases.innerText = formatNumber(regionSummary['active_cases']);
    totalCases.innerText = formatNumber(regionSummary['total_cases']);
    critical.innerText = formatNumber(regionSummary['critical']);
    totalDeaths.innerText = formatNumber(regionSummary['deaths']);
    deathRatio.innerText = formatNumber(regionSummary['death_ratio']);
    recoveryRatio.innerText = formatNumber(regionSummary['recovery_ratio']);
    totalRecovered.innerText = formatNumber(regionSummary['recovered']);
    tested.innerText = formatNumber(regionSummary['tested']);
  })
});

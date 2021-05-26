const countryName = document.getElementById('countryName');
const activeCases = document.getElementById('activeCases');
const totalDeaths = document.getElementById('deaths');
const totalCases = document.getElementById('totalCases');
const critical = document.getElementById('critical');
const tested = document.getElementById('tested');
const deathRatio = document.getElementById('deathRatio');
const recoveryRatio = document.getElementById('recoveryRatio');
const totalRecovered = document.getElementById('recovered');
const latestSummaryAPI = "https://api.quarantine.country/api/v1/summary/latest";
let countryAPI = "https://api.quarantine.country/api/v1/summary/region?";
const selectInput = document.getElementById('select');


selectInput.addEventListener('input', () => {
  const currentCountry = selectInput.value.trim();
  updateDetailsFor(currentCountry);
});

fetch(latestSummaryAPI)
  .then((response) => response.json())
  .then((data) => updateDataWith(data['data']['summary']));

const formatNumber = (number) => new Intl.NumberFormat().format(number);

const updateDataWith = (data) => {
  activeCases.innerText = formatNumber(data['active_cases']);
  totalCases.innerText = formatNumber(data['total_cases']);
  critical.innerText = formatNumber(data['critical']);
  totalDeaths.innerText = formatNumber(data['deaths']);
  deathRatio.innerText = formatNumber(data['death_ratio']);
  recoveryRatio.innerText = formatNumber(data['recovery_ratio']);
  totalRecovered.innerText = formatNumber(data['recovered']);
  tested.innerText = formatNumber(data['tested']);
}

const updateDetailsFor = (country) => {
  fetch(countryAPI + `region=${country}`)
    .then((response) => {
      if(response.ok){
        return response.json();
      }
    })
    .then((data) => {
      countryName.innerText = country;
      updateDataWith(data['data']['summary']);
    });
}

function loadJSON(){
  const values = JSON.parse(countries);

  values.forEach((country) => {
    const optionTag = document.createElement('option');
    optionTag.setAttribute("value", `${country['name'].toLowerCase()}`);
    optionTag.innerText = `${country['name']}`;
    selectInput.appendChild(optionTag);
  });
}

loadJSON();

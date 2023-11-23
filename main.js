// const promise = fetch(
// "https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=temperature_2m,relative_humidity_2m,precipitation_probability,wind_speed_10m&daily=temperature_2m_min",
// {
//   method: "GET",
// }
// );

// promise.then((response) => {
//   const promiseDeserializare = response.json();

//   promiseDeserializare.then((dateDeserializate) => {
//     console.log(dateDeserializate);
//   });
// });

const URL =
"https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=temperature_2m,relative_humidity_2m,precipitation_probability,wind_speed_10m&daily=temperature_2m_min";

const tableBody = document.getElementById("tableBody");
const options = {
  weekday: "long",
  hour: "numeric",
};
const dateFormatter = new Intl.DateTimeFormat("ro-RO", options);

fetch(URL, { method: "GET" })
.then((response) => response.json())
.then((data) => {
  console.log(data.hourly.temperature_2m);

  for(let i=0; i < data.hourly.temperature_2m.length; i++) {
    const row = document.createElement("tr");
    
    const temCell = document.createElement("td");
    temCell.innerText = data.hourly.temperature_2m[i] + "°C";

    const timeCell = document.createElement("td");
    timeCell.innerText = dateFormatter.format(new Date(data.hourly.time[i]));

    row.appendChild(timeCell);

    row.appendChild(temCell);
    
    tableBody.appendChild(row);
  };
});
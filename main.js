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
console.log(data.hourly);

for (let i = 0; i < data.hourly.temperature_2m.length; i++) {
    const row = document.createElement("tr");

    row.appendChild(createColumn(dateFormatter.format(new Date(data.hourly.time[i]))));
    row.appendChild(createColumn(data.hourly.temperature_2m[i] + "°C"));
    tableBody.appendChild(row);
  };
});

function createColumn(value) {
  const cell = document.createElement("td");

  cell.innerText = value;

  return cell;
};

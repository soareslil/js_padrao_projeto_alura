let campos = [
  document.querySelector("#name"),
  document.querySelector("#data"),
  document.querySelector("#quantidade"),
  document.querySelector("#valor"),
];
console.log(campos);

let tbody = document.querySelector("table tbody");

document.querySelector(".form").addEventListener("submit", function (event) {
  event.preventDefault();
  let tr = document.createElement("tr");
  campos.forEach(function (campo) {
    let td = document.createElement("td");
    td.textContent = campo.value;
    tr.appendChild(td);
  });
  let tdVolume = document.createElement("td");
  tdVolume.textContent = campos[2].value * campos[3].value;
  tr.appendChild(tdVolume);

  tbody.appendChild(tr);

  campos[0].value = '';
  campos[1].value = '';
  campos[2].value = '1';
  campos[3].value = '0,0';

});

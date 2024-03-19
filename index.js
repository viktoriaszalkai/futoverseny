import { FUTOK } from "./adatok.js";

const befutottVersenyzok = [];

const TABLAZAT = document.getElementById("feladat_1");
TABLAZAT.innerHTML = letrehozTablazat(FUTOK);
// 1. feladat
function letrehozTablazat(FUTOK) {
  let txt = `<table class = "table">`;
  for (let index = 0; index < FUTOK.length; index++) {
    txt += `
        <tr id= "befutottTR">
            <td >${FUTOK[index].nev}</td>
            <td>${FUTOK[index].nemzetiseg}</td>
            <td>${FUTOK[index].versenySzam}</td>
        </tr>
        `;
  }
  txt += `</table>`;
  return txt;
}

const OSSZESITO = document.getElementById("feladat_2");
OSSZESITO.innerHTML += `félmaraton: ${osszesit(FUTOK).dbFel} db<br> maraton: ${
  osszesit(FUTOK).dbMa
} db<br> 10km: ${osszesit(FUTOK).db10} db`;
// 2. feladat
function osszesit(FUTOK) {
  var dbFel = 0;
  var dbMa = 0;
  var db10 = 0;
  for (let index = 0; index < FUTOK.length; index++) {
    if (FUTOK[index].versenySzam == "félmaraton") {
      dbFel += 1;
    } else if (FUTOK[index].versenySzam == "maraton") {
      dbMa += 1;
    } else if (FUTOK[index].versenySzam == "10 km") {
      db10 += 1;
    }
  }
  return { dbFel: dbFel, dbMa: dbMa, db10: db10 };
} /* 3 VALTOZO RETURNÖLÉSE OBJEKTUMKÉNT */

// 3. feladat
const BEFUTOTT = document.getElementById("feladat_3_tarolo");
const befutoSOR = document.querySelectorAll("#befutottTR");
const befutottTABLAZAT = document.querySelector("#feladat_3");

function befutott(befutoSOR) {
  for (let index = 0; index < befutoSOR.length; index++) {
    befutoSOR[index].addEventListener("click", kattintas);

    function kattintas(event) {
      befutoSOR[index].classList.add("befutott");
      /* console.log(txt) */
      let txt = `<table class = "table">
        <tr id="befutottTR">
            <td >${FUTOK[index].nev}</td>
            <td>${FUTOK[index].nemzetiseg}</td>
            <td>${FUTOK[index].versenyIdo}</td>
        </tr>
        </table>`;

      befutottTABLAZAT.innerHTML += txt;
    }
  }
  /* console.log(befutoSOR); */
  return befutottTABLAZAT;
}
befutott(befutoSOR);

// 4. feladat

const torlesGOMBELEM = document.getElementById("gomb");
torlesGOMBELEM.addEventListener("click", torolEsemeny);
function torolEsemeny(event) {
  befutottTABLAZAT.innerHTML = " ";
  for (let index = 0; index < befutoSOR.length; index++) {
    befutoSOR[index].classList.remove("befutott");
  }
}
// 5. feladat
function ellenoriz(befutottTABLAZAT) {
  for (let index = 0; index < 8; index++) {
    if ((index = 7)) {
      alert("Verseny véget ért!");
      console.log(index);
    }
  }
}
ellenoriz();
console.log(befutoSOR);

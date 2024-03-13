import { FUTOK } from "./adatok.js";

const befutottVersenyzok = [];

const TABLAZAT = document.getElementById("feladat_1");
TABLAZAT.innerHTML = letrehozTablazat(FUTOK);
// 1. feladat
function letrehozTablazat(FUTOK) {
  let txt = `<table>`;
  for (let index = 0; index < FUTOK.length; index++) {
    txt += `
        <tr id="befutott">
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
OSSZESITO.innerHTML += `félmaraton: ${osszesit(FUTOK).dbFel} db<br> maraton: ${osszesit(FUTOK).dbMa} db<br> 10km: ${osszesit(FUTOK).db10} db`
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
  }return{dbFel:dbFel,dbMa:dbMa,db10:db10};
}/* 3 VALTOZO RETURNÖLÉSE OBJEKTUMKÉNT */

// 3. feladat
const BEFUTOTT = document.getElementById("feladat_3");
const befutottEMBER = document.querySelectorAll("#befutott");
function befutott(befutottEMBER) {
    for (let index = 0; index < befutottEMBER.length; index++) {
        befutottEMBER[index].addEventListener("click", kattintas);
      }

    function kattintas(event){
        console.log(event.target.innerHTML)
}
}
befutott(befutottEMBER)

// 4. feladat
function torolEsemeny() {
    
}

// 5. feladat
function ellenoriz() {}

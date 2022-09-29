var france = document.getElementById("france");
var france_path = document.getElementById("france-path");
var espagne = document.getElementById("espagne");
var espagne_path = document.getElementById("espagne-path");
var portugal = document.getElementById("portugal");
var portugal_path = document.getElementById("portugal-path");
var italie = document.getElementById("italie");
var italie_path = document.getElementById("italie-path");
var etatUnis = document.getElementById("etat-unis");
var etatUnis_path = document.getElementById("etat-unis-path");
var allemagne = document.getElementById("allemagne");
var allemagne_path = document.getElementById("allemagne-path");
var groenland = document.getElementById("groenland");
var groenland_path = document.getElementById("groenland-path");
var alaska = document.getElementById("alaska");
var alaska_path = document.getElementById("alaska-path");
var canada = document.getElementById("canada");
var canada_path = document.getElementById("canada-path");
var mexique = document.getElementById("mexique");
var mexique_path = document.getElementById("mexique-path");
var royaumeUni = document.getElementById("royaume-uni");
var royaumeUni_path = document.getElementById("royaume-uni-path");
var pays_path = document.getElementsByClassName("pays-path");

var form = document.querySelector(".form");
var close = document.querySelector("#close");
var nom_pays = document.getElementById("Nom-du-Pays");
//le button envoyé du formulaire
var submit = document.getElementById("btnForm");
//var slogan
var slogan = document.getElementById("slogan");
var population = document.getElementById("Population");

//si on click sur france-path alors on afficher le formulaire
france_path.addEventListener("click", function () {
  //display form
  form.style.opacity = "1";
  form.style.zIndex = "10";
  form.style.userSelect = "all";
  close.style.opacity = "1";
  close.style.zIndex = "10";
  close.style.userSelect = "contain";
  nom_pays.value = "France";
  population.focus();
});

close.addEventListener("click", function () {
  form.style.opacity = "0";
  form.style.zIndex = "-1";
  form.style.userSelect = "none";
});

//si on click sur espagne-path alors on afficher le formulaire
espagne_path.addEventListener("click", function () {
  //display form
  form.style.opacity = "1";
  form.style.zIndex = "10";
  form.style.userSelect = "all";
  close.style.opacity = "1";
  close.style.zIndex = "10";
  close.style.userSelect = "contain";
  nom_pays.value = "Espagne";
  population.focus();
});

//si on click sur portugal-path alors on afficher le formulaire
portugal_path.addEventListener("click", function () {
  //display form
  form.style.opacity = "1";
  form.style.zIndex = "10";
  form.style.userSelect = "all";
  close.style.opacity = "1";
  close.style.zIndex = "10";
  close.style.userSelect = "contain";
  nom_pays.value = "Portugal";
  population.focus();
});

//si on click sur italie-path alors on afficher le formulaire
italie_path.addEventListener("click", function () {
  //display form
  form.style.opacity = "1";
  form.style.zIndex = "10";
  form.style.userSelect = "all";
  close.style.opacity = "1";
  close.style.zIndex = "10";
  close.style.userSelect = "contain";
  nom_pays.value = "Italie";
  population.focus();
});

//si on click sur etat-unis-path alors on afficher le formulaire
etatUnis_path.addEventListener("click", function () {
  //display form
  form.style.opacity = "1";
  form.style.zIndex = "10";
  form.style.userSelect = "all";
  close.style.opacity = "1";
  close.style.zIndex = "10";
  close.style.userSelect = "contain";
  nom_pays.value = "Etat-Unis";
  population.focus();
});

//si on click sur allemagne-path alors on afficher le formulaire
allemagne_path.addEventListener("click", function () {
  //display form
  form.style.opacity = "1";
  form.style.zIndex = "10";
  form.style.userSelect = "all";
  close.style.opacity = "1";
  close.style.zIndex = "10";
  close.style.userSelect = "contain";
  nom_pays.value = "Allemagne";
  population.focus();
});

//si on click sur groenland-path alors on afficher le formulaire
groenland_path.addEventListener("click", function () {
  //display form
  form.style.opacity = "1";
  form.style.zIndex = "10";
  form.style.userSelect = "all";
  close.style.opacity = "1";
  close.style.zIndex = "10";
  close.style.userSelect = "contain";
  nom_pays.value = "Groenland";
  population.focus();
});

//si on click sur alaska-path alors on afficher le formulaire
alaska_path.addEventListener("click", function () {
  //display form
  form.style.opacity = "1";
  form.style.zIndex = "10";
  form.style.userSelect = "all";
  close.style.opacity = "1";
  close.style.zIndex = "10";
  close.style.userSelect = "contain";
  nom_pays.value = "Alaska";
  population.focus();
});

//si on click sur canada-path alors on afficher le formulaire
canada_path.addEventListener("click", function () {
  //display form
  form.style.opacity = "1";
  form.style.zIndex = "10";
  form.style.userSelect = "all";
  close.style.opacity = "1";
  close.style.zIndex = "10";
  close.style.userSelect = "contain";
  nom_pays.value = "Canada";
  population.focus();
});

//si on click sur mexique-path alors on afficher le formulaire
mexique_path.addEventListener("click", function () {
  //display form
  form.style.opacity = "1";
  form.style.zIndex = "10";
  form.style.userSelect = "all";
  close.style.opacity = "1";
  close.style.zIndex = "10";
  close.style.userSelect = "contain";
  nom_pays.value = "Mexique";
  population.focus();
});

royaumeUni_path.addEventListener("click", function () {
  //display form
  form.style.opacity = "1";
  form.style.zIndex = "10";
  form.style.userSelect = "all";
  close.style.opacity = "1";
  close.style.zIndex = "10";
  close.style.userSelect = "contain";
  nom_pays.value = "Royaume-Uni";
  population.focus();
});

france_path.addEventListener("mouseover", function (e) {
  france.style.zIndex = 5;
});

france_path.addEventListener("mouseleave", function (e) {
  france.style.zIndex = 1;
});

espagne_path.addEventListener("mouseover", function (e) {
  espagne.style.zIndex = 5;
});

espagne_path.addEventListener("mouseleave", function (e) {
  espagne.style.zIndex = 1;
});

portugal_path.addEventListener("mouseover", function (e) {
  portugal.style.zIndex = 5;
});

portugal_path.addEventListener("mouseleave", function (e) {
  portugal.style.zIndex = 1;
});

france_path.addEventListener("mouseover", function (e) {
  france.style.zIndex = 5;
});

france_path.addEventListener("mouseleave", function (e) {
  france.style.zIndex = 1;
});

espagne_path.addEventListener("mouseover", function (e) {
  espagne.style.zIndex = 5;
});

espagne_path.addEventListener("mouseleave", function (e) {
  espagne.style.zIndex = 1;
});

portugal_path.addEventListener("mouseover", function (e) {
  portugal.style.zIndex = 5;
});

portugal_path.addEventListener("mouseleave", function (e) {
  portugal.style.zIndex = 1;
});

allemagne_path.addEventListener("mouseover", function (e) {
  allemagne.style.zIndex = 5;
});

allemagne_path.addEventListener("mouseleave", function (e) {
  allemagne.style.zIndex = 1;
});

italie_path.addEventListener("mouseover", function (e) {
  italie.style.zIndex = 5;
});

italie_path.addEventListener("mouseleave", function (e) {
  italie.style.zIndex = 1;
});

etatUnis_path.addEventListener("mouseover", function (e) {
  etatUnis.style.zIndex = 5;
});

etatUnis_path.addEventListener("mouseleave", function (e) {
  etatUnis.style.zIndex = 1;
});

groenland_path.addEventListener("mouseover", function (e) {
  groenland.style.zIndex = 5;
});

groenland_path.addEventListener("mouseleave", function (e) {
  groenland.style.zIndex = 1;
});

alaska_path.addEventListener("mouseover", function (e) {
  alaska.style.zIndex = 5;
});

alaska_path.addEventListener("mouseleave", function (e) {
  alaska.style.zIndex = 1;
});

canada_path.addEventListener("mouseover", function (e) {
  canada.style.zIndex = 5;
});

canada_path.addEventListener("mouseleave", function (e) {
  canada.style.zIndex = 1;
});

mexique_path.addEventListener("mouseover", function (e) {
  mexique.style.zIndex = 5;
});

mexique_path.addEventListener("mouseleave", function (e) {
  mexique.style.zIndex = 1;
});

royaumeUni_path.addEventListener("mouseover", function (e) {
  royaumeUni.style.zIndex = 5;
});

royaumeUni_path.addEventListener("mouseleave", function (e) {
  royaumeUni.style.zIndex = 1;
});


async function get_populations() {
  data = await (await fetch("http://127.0.0.1:8000/populations")).json();

  //console.log("recois les données de populations");

          //recuperation de population et affichage dans le tableau
    data.forEach(function (country, index) {
        // console.log(data[0]["amount"])
        document.getElementById("FrancePopulation").innerHTML = data[0]["amount"];
        document.getElementById("EspagnePopulation").innerHTML = data[1]["amount"];
        document.getElementById("PortugalPopulation").innerHTML = data[2]["amount"];
        document.getElementById("AllemagnePopulation").innerHTML = data[3]["amount"];
        document.getElementById("ItaliePopulation").innerHTML = data[4]["amount"];
        document.getElementById("EtatUnisPopulation").innerHTML = data[5]["amount"];
        document.getElementById("GroenlandPopulation").innerHTML = data[6]["amount"];
        document.getElementById("AlaskaPopulation").innerHTML = data[7]["amount"];
        document.getElementById("CanadaPopulation").innerHTML = data[8]["amount"];
        document.getElementById("MexiquePopulation").innerHTML = data[9]["amount"];
        document.getElementById("RoyaumeUniPopulation").innerHTML = data[10]["amount"];
    })
}
get_populations();


async function get_countrys() {
  data = await (await fetch("http://127.0.0.1:8000/countrys")).json();

  //console.log("recois les données de capital");

  //recuperation des données et affichage dans le tableau
    data.forEach(function (country, index) {
       // console.log(data[0]["capital"])
        document.getElementById("FranceCapital").innerHTML = data[0]["capital"];
        document.getElementById("FranceName").innerHTML = data[0]["name"];
        document.getElementById("FrancePresident").innerHTML = data[0]["president"];
        document.getElementById("FranceDay").innerHTML = data[0]["national_day"];
        document.getElementById("FranceArea").innerHTML = data[0]["area"] + " km²";
        document.getElementById("FranceCurrency").innerHTML = data[0]["currency"];

        document.getElementById("AllemagneCapital").innerHTML = data[1]["capital"];
        document.getElementById("AllemagneName").innerHTML = data[1]["name"];
        document.getElementById("AllemagnePresident").innerHTML = data[1]["president"];
        document.getElementById("AllemagneDay").innerHTML = data[1]["national_day"];
        document.getElementById("AllemagneArea").innerHTML = data[1]["area"] + " km²";
        document.getElementById("AllemagneCurrency").innerHTML = data[1]["currency"];

        document.getElementById("EspagneCapital").innerHTML = data[2]["capital"];
        document.getElementById("EspagneName").innerHTML = data[2]["name"];
        document.getElementById("EspagnePresident").innerHTML = data[2]["president"];
        document.getElementById("EspagneDay").innerHTML = data[2]["national_day"];
        document.getElementById("EspagneArea").innerHTML = data[2]["area"] + " km²";
        document.getElementById("EspagneCurrency").innerHTML = data[2]["currency"];

        document.getElementById("ItalieCapital").innerHTML = data[3]["capital"];
        document.getElementById("ItalieName").innerHTML = data[3]["name"];
        document.getElementById("ItaliePresident").innerHTML = data[3]["president"];
        document.getElementById("ItalieDay").innerHTML = data[3]["national_day"];
        document.getElementById("ItalieArea").innerHTML = data[3]["area"] + " km²";
        document.getElementById("ItalieCurrency").innerHTML = data[3]["currency"];

        document.getElementById("PortugalCapital").innerHTML = data[4]["capital"];
        document.getElementById("PortugalName").innerHTML = data[4]["name"];
        document.getElementById("PortugalPresident").innerHTML = data[4]["president"];
        document.getElementById("PortugalDay").innerHTML = data[4]["national_day"];
        document.getElementById("PortugalArea").innerHTML = data[4]["area"] + " km²";
        document.getElementById("PortugalCurrency").innerHTML = data[4]["currency"];

        document.getElementById("EtatUnisCapital").innerHTML = data[5]["capital"];
        document.getElementById("EtatUnisName").innerHTML = data[5]["name"];
        document.getElementById("EtatUnisPresident").innerHTML = data[5]["president"];
        document.getElementById("EtatUnisDay").innerHTML = data[5]["national_day"];
        document.getElementById("EtatUnisArea").innerHTML = data[5]["area"] + " km²";
        document.getElementById("EtatUnisCurrency").innerHTML = data[5]["currency"];

        document.getElementById("GroenlandCapital").innerHTML = data[6]["capital"];
        document.getElementById("GroenlandName").innerHTML = data[6]["name"];
        document.getElementById("GroenlandPresident").innerHTML = data[6]["president"];
        document.getElementById("GroenlandDay").innerHTML = data[6]["national_day"];
        document.getElementById("GroenlandArea").innerHTML = data[6]["area"] + " km²";
        document.getElementById("GroenlandCurrency").innerHTML = data[6]["currency"];

        document.getElementById("AlaskaCapital").innerHTML = data[7]["capital"];
        document.getElementById("AlaskaName").innerHTML = data[7]["name"];
        document.getElementById("AlaskaPresident").innerHTML = data[7]["president"];
        document.getElementById("AlaskaDay").innerHTML = data[7]["national_day"];
        document.getElementById("AlaskaArea").innerHTML = data[7]["area"] + " km²";
        document.getElementById("AlaskaCurrency").innerHTML = data[7]["currency"];

        document.getElementById("CanadaCapital").innerHTML = data[8]["capital"];
        document.getElementById("CanadaName").innerHTML = data[8]["name"];
        document.getElementById("CanadaPresident").innerHTML = data[8]["president"];
        document.getElementById("CanadaDay").innerHTML = data[8]["national_day"];
        document.getElementById("CanadaArea").innerHTML = data[8]["area"] + " km²";
        document.getElementById("CanadaCurrency").innerHTML = data[8]["currency"];

        document.getElementById("MexiqueCapital").innerHTML = data[9]["capital"];
        document.getElementById("MexiqueName").innerHTML = data[9]["name"];
        document.getElementById("MexiquePresident").innerHTML = data[9]["president"];
        document.getElementById("MexiqueDay").innerHTML = data[9]["national_day"];
        document.getElementById("MexiqueArea").innerHTML = data[9]["area"] + " km²";
        document.getElementById("MexiqueCurrency").innerHTML = data[9]["currency"];


        document.getElementById("RoyaumeUniCapital").innerHTML = data[10]["capital"];
        document.getElementById("RoyaumeUniName").innerHTML = data[10]["name"];
        document.getElementById("RoyaumeUniPresident").innerHTML = data[10]["president"];
        document.getElementById("RoyaumeUniDay").innerHTML = data[10]["national_day"];
        document.getElementById("RoyaumeUniArea").innerHTML = data[10]["area"] + " km²";
        document.getElementById("RoyaumeUniCurrency").innerHTML = data[10]["currency"];
    })
}
get_countrys();

async function post_api() {
  response = await fetch("http://127.0.0.1:8000/countrys", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      id: 555,
      name: "string",
      capital: "string",
      president: "string",
      national_day: "string",
      currency: "string",
      flag: "string",
      area: 0,
    }),
  });
  console.log("envoie les données de l'api");
  console.log(response);
}

post_api();

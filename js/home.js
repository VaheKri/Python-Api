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

france_path.addEventListener('mouseover', function(e) {
    france.style.zIndex = 5;
});

france_path.addEventListener('mouseleave', function(e) {
    france.style.zIndex = 1;
});

espagne_path.addEventListener('mouseover', function(e) {
    espagne.style.zIndex = 5;
});

espagne_path.addEventListener('mouseleave', function(e) {
    espagne.style.zIndex = 1;
});

portugal_path.addEventListener('mouseover', function(e) {
    portugal.style.zIndex = 5;
});

portugal_path.addEventListener('mouseleave', function(e) {
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

etat -
  unis_path.addEventListener("mouseover", function (e) {
    etatUnis.style.zIndex = 5;
  });

etat -
  unis_path.addEventListener("mouseleave", function (e) {
    etatUnis.style.zIndex = 1;
  });

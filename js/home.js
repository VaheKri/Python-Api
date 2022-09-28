var france = document.getElementById("france");
var france_path = document.getElementById("france-path");
var espagne = document.getElementById("espagne");
var espagne_path = document.getElementById("espagne-path");
var portugal = document.getElementById("portugal");
var portugal_path = document.getElementById("portugal-path");
var pays_path = document.getElementsByClassName("pays-path");
var form = document.getElementsByClassName("form");
//le button envoyé du formulaire
var submit = document.getElementById("btnForm");
//var slogan
var slogan = document.getElementById("slogan");

//cacher le formulaire si on click sur le bouton envoyer
if (submit.clicked == true) {
  form[0].style.display = "none";
}

//si on click sur france-path alors on afficher le formulaire
france_path.addEventListener("click", function () {
  //display form
  form[0].style.display = "block";
});

//si on click sur espagne-path alors on afficher le formulaire
espagne_path.addEventListener("click", function () {
  //display form
  form[0].style.display = "block";
});

//si on click sur portugal-path alors on afficher le formulaire
portugal_path.addEventListener("click", function () {
  //display form
  form[0].style.display = "block";
});

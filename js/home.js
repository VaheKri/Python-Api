var france = document.getElementById('france');
var france_path = document.getElementById('france-path');
var espagne = document.getElementById('espagne');
var espagne_path = document.getElementById('espagne-path');
var portugal = document.getElementById('portugal');
var portugal_path = document.getElementById('portugal-path');
var pays_path = document.getElementsByClassName('pays-path');


pays_path.addEventListener('mouseover', function(e) {
    pays_path.style.fill = '#ffa41c'
});

pays_path.addEventListener('mouseleave', function(e) {
    pays_path.style.fill = '#fff';
});

// france_path.addEventListener('mouseover', function(e) {
//     france.style.zIndex = 5;
// });

// france_path.addEventListener('mouseleave', function(e) {
//     france.style.zIndex = 1;
// });

// espagne_path.addEventListener('mouseover', function(e) {
//     espagne.style.zIndex = 5;
// });

// espagne_path.addEventListener('mouseleave', function(e) {
//     espagne.style.zIndex = 1;
// });

// portugal_path.addEventListener('mouseover', function(e) {
//     portugal.style.zIndex = 5;
// });

// portugal_path.addEventListener('mouseleave', function(e) {
//     portugal.style.zIndex = 1;
// });


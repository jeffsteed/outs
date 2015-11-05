window.onload = function() {

var nav = document.querySelector('#navpop');
var navicon = document.querySelector('#navicon');
var toggled = false;
navicon.addEventListener('click', function(event) {
  console.log(event);

  if (!toggled) {
    nav.style.display = 'block';
    navicon.style.backgroundColor = 'rgb(255, 201, 40)';
    toggled = true;
  } else {
    nav.style.display = 'none';
    navicon.style.backgroundColor = 'white';
    toggled = false;
  }
});


}; // End of window.onload


function NavPop(domElement) {

  this.domElement = domElement;

  this.initialize = function() {

  },

  this.render = function() {

  }
};

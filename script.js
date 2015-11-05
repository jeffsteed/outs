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

function gameSlide(platform) {
  this.platform = platform;

  this.initialize = function() {
    // create a div with the class='game'
    var slide = document.createElement('div');
    slide.class = 'game';
  };

  this.render = function() {
    slide.appendChild('container');
  };

  // Function to assign the platform emblem
  this.assignImg = function() {
    var platformImg = document.createElement('img');

    switch (this.platform) {
      case ps4:
        platformImg.url = ps4;
        break;
      case xb1:
        platformImg.url = xbox1;
        break;
      case pc:
        platformImg.url = pc;
        break;
      default:
        platformImg.url = '';
    }
  }
}

var ps4 = 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/PlayStation_4_logo_and_wordmark.svg/2000px-PlayStation_4_logo_and_wordmark.svg.png';
var xbox1 = 'https://upload.wikimedia.org/wikipedia/en/thumb/1/11/Xbox_One_logo.svg/1280px-Xbox_One_logo.svg.png';
var pc = 'http://simpleicon.com/wp-content/uploads/pc.png';



$(document).ready(function() {
  var wrapper = $('.wrapper');
  $('#navicon').bind('click', function() {
    wrapper.toggleClass('menu-open');
  });
});

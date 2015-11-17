window.onload = function() {

if (window.innerWidth <= 400) {
  document.getElementById('container').style.height = (games.length * 260) + "px";
}

var wrapper = document.getElementsByClassName('wrapper')[0];
var icon = document.getElementById('navicon');
icon.addEventListener('click', function() {
  if (wrapper.classList.contains('menu-open')) {
    wrapper.classList.remove('menu-open');
  } else {
    wrapper.classList.add('menu-open');
  }
  if (icon.classList.contains('clicked')) {
    icon.classList.remove('clicked');
  } else {
    icon.classList.add('clicked');
  }
})

for (var game in games) {
  makeGame(games[game]);
}
// makeGame(halo5);
// makeGame(acsyn);
// makeGame(fallout);
// makeGame(starcraftLOV);

}; // End of window.onload ------------------------------------------------------------|
//-------------------------------------------------------------------------------------|


// function NavPop(domElement) {
//
//   this.domElement = domElement;
//
//   this.initialize = function() {
//
//   },
//
//   this.render = function() {
//
//   }
// };
var halo5 = new gameSlide('xbox1', 'http://www.gamestop.com/common/images/lbox/108668b.jpg');
var acsyn = new gameSlide('ps4', 'http://ecx.images-amazon.com/images/I/91ITO6Dp-5L._SL1500_.jpg');
var fallout = new gameSlide('ps4', 'http://www.gamestop.com/common/images/lbox/113223b1.jpg');
var starcraftLOV = new gameSlide('pc', 'http://www.gamestop.com/common/images/lbox/115302b.jpg');

var games = [];
games.push(halo5);
games.push(acsyn);
games.push(fallout);
games.push(starcraftLOV);

function makeGame(newGame) {
  newGame.initialize();
  newGame.assignImg();
  newGame.render();
};

function gameSlide(platform, url) {
  this.platform = platform;
  this.gameImgUrl = url;
  this.slide = null;
  this.gameImg = null;
  this.platformImg = null;


  this.initialize = function() {
    // create a div with the class='game'
    this.slide = document.createElement('div');
    this.slide.className = 'game';
  };

  this.render = function() {
    this.assignImg();
    this.slide.appendChild(this.gameImg);
    this.slide.appendChild(this.platformImg);
    document.getElementById('container').appendChild(this.slide);
  };

  // Function to assign the platform emblem
  this.assignImg = function() {
    this.gameImg = document.createElement('img');
    this.gameImg.src = this.gameImgUrl;
    this.gameImg.className = 'gameimg';

    this.platformImg = document.createElement('img');

    switch (this.platform) {
      case 'ps4':
        this.platformImg.src = ps4;
        this.platformImg.classList.add('platformimg');
        break;
      case 'xbox1':
        this.platformImg.src = xbox1;
        this.platformImg.classList.add('platformimg');
        break;
      case 'pc':
        this.platformImg.src = pc;
        this.platformImg.classList.add('pcImg');
        break;
      default:
        this.platformImg.src = '';
    }
  }
}

var ps4 = 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/PlayStation_4_logo_and_wordmark.svg/2000px-PlayStation_4_logo_and_wordmark.svg.png';
var xbox1 = 'https://upload.wikimedia.org/wikipedia/en/thumb/1/11/Xbox_One_logo.svg/1280px-Xbox_One_logo.svg.png';
var pc = 'http://simpleicon.com/wp-content/uploads/pc.png';

// Slide-out menu code below ------------------------- //

// $(document).ready(function() {
//   var wrapper = $('.wrapper');
//   $('#navicon').bind('click', function() {
//     wrapper.toggleClass('menu-open');
//   });
// });

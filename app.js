console.log("Component has loaded");

window.onload = function() { // *************************************************************************************************
  console.log("All files that this page needs have been loaded.");
//
// // Basic selectors
// // declare a selector named siteName
// // access that container via document.getElementById(nameSite);
//
//   var siteName = document.getElementById('sitename');
//   console.log(siteName);
//   var monsters = ['Wreck-it Ralph', 'The giraffe from Lion King SNES', 'Ganon'];
//   for (var villian in monsters) {
//     // create a new dom element using document.createElement('li');
//     var li = document.createElement('li');
//     console.log(li);
//     // access and assign a prperty to my dom element
//     li.innerHTML = monsters[villian];
//     // append it to a container using selector.appendChild(li);
//     siteName.appendChild(li);
//   }
//
//   // now, we need to create an image!
//   var kittenImage = document.createElement('img');
//   // alt test (alt) - ADA compliancy text for the blind
//   kittenImage.alt = "A cute random kitten.";
//   kittenImage.id = 'kitten';
//   kittenImage.src = 'https://i.ytimg.com/vi/NtgtMQwr3Ko/maxresdefault.jpg';
//   // append my element as a child to a selector
//   siteName.appendChild(kittenImage);
//
//   // modify the cuteness level of my kitten
//   // create a new selector by querying the dom
//   // notice the use of CSS style selectors!
//   // makes things easy to remember
//   var kitten = document.querySelector('#kitten');
//   kitten.src = 'http://slummysinglemummy.com/wp-content/uploads/2015/01/awesomely-cute-kitten-1500.jpg';
//
//   var listItemsArray = document.getElementsByTagName('li');
//   console.log(listItemsArray);
//
//   for (var li in listItemsArray) {
//     listItemsArray[li].innerHTML = "We are the Champions, my friend!";
//   }

  var status = document.getElementById('status-message');
  var btn = document.getElementById('addPoint'); // var btn = document.querySelector('#addPoint');

  // Initialize our UI component
  user.initialize(status);
  // selector.addEventListener(eventType, function());
  btn.addEventListener('click', function() {
    user.updateScoreByOnePoint();
  });

//   // bind events to a DOM element
//   var body = document.getElementsByTagName('body')[0];
//
//   // Mouse Events
//   body.addEventListener('click', function(event) {
//     console.log(event);
//     console.log("Ow, y u click me bro?");
//   });
//
// // TOUCH SCREENS ------------------------------------------------------------ //
//   // Touch Events
//   body.addEventListener('touchstart', function(event) {
//     // console.log(event)
//     // touchstart
//     // touchmove
//     // touchend
//     console.log('yo yo dude y u pokin me? wtf man');
//   });
// // -------------------------------------------------------------------------- //
//
//   // Keyboard Events
//   body.addEventListener('keyup', function(event) {
//     // look for specific keys to be pressed
//     if (event.keyCode == 13) {
//       console.log('y u press enter so much yo?');
//     }
//     console.log(event.keyCode);
//   });

}; // End window.onload ***********************************************************************************************************

// Create a user-interface component!
// The goal here is to create an Object
// that can update itself
// and visually show that if needed

// Example #1: User Component
var user = {
  name: null,
  score: 0,
  domElement: null,
  // elementToAppendTo: document.selector for an individual element
  initialize: function(elementToAppendTo) {
    if (this.name == null) {
      this.name = prompt('What is your name?');
    }
    this.domElement = document.createElement('div');
    elementToAppendTo.appendChild(this.domElement);
    console.log("Initialize complete.");
  },
  // innerHTML: valid html to place in our domElement
  render: function(innerHTML) {
    if (typeof(innerHTML) == 'string') {
      this.domElement.innerHTML = innerHTML;
    }
  },
  buildPlayerStatusString: function() {
    return this.name + ": " + this.score;
  },
  getName: function() {
    return this.name;
  },
  saveName: function(newName) {
    if (typeof(newName) == 'string' && newName.length > 0) {
      this.name = newName;
    } else {
      alert("You entered an incorrect or empty name.");
    }
  },
  getScore: function() {
    return this.score;
  },
  updateScoreByOnePoint: function() {
    this.score += 1;
    var status = this.buildPlayerStatusString();
    this.render(status);
    return this.score;
  }
};

// -------- Component Boilerplate ------------------------------------------- //
var component = {
  domElement: null,
  initialize: function(selector) {
    // create a dom element
    this.domElement = document.createElement('div');
    // attach it
    selector.appendChild(this.domElement);
  },
  render: function(statusText) {
    // update the dom element
    this.domElement.innerHTML = statusText;
  }
};
// -------------------------------------------------------------------------- //

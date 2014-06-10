// // Creates and returns a new dancer object that can step
// var makeDancer = function(top, left, timeBetweenSteps){

//   var dancer = {};

//   // use jQuery to create an HTML <span> tag
//   dancer.$node = $('<span class="dancer"></span>');


//   dancer.step = function(){
//     // the basic dancer doesn't do anything interesting at all on each step,
//     // it just schedules the next step
//     setTimeout(dancer.step, timeBetweenSteps);
//   };
//   dancer.step();

//   dancer.setPosition = function(top, left){
//     // Use css top and left properties to position our <span> tag
//     // where it belongs on the page. See http://api.jquery.com/css/
//     //
//     var styleSettings = {
//       top: top,
//       left: left
//     };
//     dancer.$node.css(styleSettings);
//   };

//   // now that we have defined the dancer object, we can start setting up important parts of it by calling the methods we wrote
//   // this one sets the position to some random default point within the body
//   dancer.setPosition(top, left);

//   return dancer;
// };

var Dancer = function(top,left,timeBetweenSteps){
  this.$node = $('<span class="dancer"></span>');
  this.$node.mouseover(function(){
    //this.setPosition(500, 500);
    $(this).css({top:500, left: 500});
  });
  this._timeBetweenSteps = timeBetweenSteps;
  this.setPosition(top,left);
  this.step();
};

Dancer.prototype.step = function(){
  setTimeout(this.step.bind(this), this._timeBetweenSteps);
};

Dancer.prototype.lineUp = function(){
  this.setPosition(this.$node.css('top'),0);
};

Dancer.prototype.distance = function(dancer){
  return Math.sqrt(Math.pow(this._left - dancer._left, 2) + Math.pow(this._top - dancer._top, 2));
};

Dancer.prototype.setPosition = function(top,left){
  this._top = top;
  this._left = left;
  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
};












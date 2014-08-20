var AlwaysSunnyDancer = function(top, left, timeBetweenSteps){
  Dancer.apply(this, arguments);
  this.$node.html('<img class="greenman" src="greenman.gif">');
};

AlwaysSunnyDancer.prototype = Object.create(Dancer.prototype);
AlwaysSunnyDancer.prototype.constructor = AlwaysSunnyDancer;

AlwaysSunnyDancer.prototype.step = function(){
  Dancer.prototype.step.call(this);
  this.$node.fadeToggle('slow');
  this.setPosition($("body").height() * Math.random(),$("body").width() * Math.random());
};


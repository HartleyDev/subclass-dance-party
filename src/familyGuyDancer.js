var FamilyGuyDancer = function(top, left, timeBetweenSteps){
  Dancer.apply(this, arguments);
  this.$node.html('<img class="stewie rotate" src="stewie.gif">');
};

FamilyGuyDancer.prototype = Object.create(Dancer.prototype);
FamilyGuyDancer.prototype.constructor = FamilyGuyDancer;

FamilyGuyDancer.prototype.step = function(){
  Dancer.prototype.step.call(this);
  for (var i = 0; i < window.dancers.length; i++){
    var otherDancer = window.dancers[i];
    var distance = this.distance(otherDancer);
    if (distance !== 0 && distance < 100){
      this.$node.fadeToggle();
    }
  }
};

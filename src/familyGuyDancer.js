var FamilyGuyDancer = function(top, left, timeBetweenSteps){
  Dancer.apply(this, arguments);
  this.$node.html('<img class="stewie" src="stewie.gif">');
};

FamilyGuyDancer.prototype = Object.create(Dancer.prototype);
FamilyGuyDancer.prototype.constructor = FamilyGuyDancer;



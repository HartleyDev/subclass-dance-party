describe("familyGuyDancer", function() {

  var familyGuyDancer;
  var timeBetweenSteps = 100;
  var clock;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    familyGuyDancer = new FamilyGuyDancer(10, 20, timeBetweenSteps);
  });

  it("should have a jQuery $node object", function(){
    expect(familyGuyDancer.$node).to.be.an.instanceof(jQuery);
  });

  it("is blue in color", function(){
    expect(familyGuyDancer.$node.css('border')).to.contain('blue');
  });

});

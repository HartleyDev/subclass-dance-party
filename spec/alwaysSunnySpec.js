describe("alwaysSunnyDancer", function() {

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

  it("contains an image", function(){
    expect(familyGuyDancer.$node.html()).to.contain(".gif");
  });

  it("rotates", function(){
    debugger;
    expect(familyGuyDancer.$node.children().first().hasClass("rotate")).to.equal(true);
  });

});

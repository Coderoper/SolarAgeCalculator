import { find } from './../src/triangle-tracker.js';
describe('find', function() {

  it('should test whether a find has three sides', function() {
    var triangle = new find(3,4,5);
    expect(triangle.side1).toEqual(3);
    expect(triangle.side2).toEqual(4);
    expect(triangle.side3).not.toEqual(6);
  });
    it('should correctly determine whether three lengths can be made into a triangle', function() {
     var notTriangle = new find(3,9,22);
     expect(notTriangle.checkType()).toEqual("not a triangle");
  });
  find.prototype.checkType = function()
  {
    if ((this.side1 > (this.side2 + this.side3)) || (this.side2 > (this.side1 + this.side3)) || (this.side3 > (this.side1 + this.side2)))
    {
      return "not a triangle";
    }
  };
  describe('find', function()
  {
    var reusableTriangle;

    beforeEach(function()
    {
      reusableTriangle = new find(5, 5, 5);
    });

    it('should show how beforeEach() works', function()
    {
      console.log(reusableTriangle);
    });
  });
});

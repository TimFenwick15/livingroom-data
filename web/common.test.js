const rewire = require('rewire')
const assert = require('chai').assert
const common = rewire('./common.js')
const livingroomData = common.__get__('livingroomData')

describe('lightToColour', function() {
  it('it should return black', function() {
    assert.equal(livingroomData.lightToColour(), 'black');
  });
});

describe('dayLightToColour', function() {
  it('It should return #000000 at midnight', function() {
    assert.equal(livingroomData.dayLightToColour(0), '#000000');
  });
});

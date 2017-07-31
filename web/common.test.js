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
  it('It should return #0000ff at midday', function() {
    assert.equal(livingroomData.dayLightToColour(12), '#0000ff');
  });
  it('It should return #0000d9 at 3pm', function() {
    assert.equal(livingroomData.dayLightToColour(15), '#0000d9');
  });
});

describe('temperatureToColour', function() {
  it('It should return #ff0000 at 35 degrees', function() {
    assert.equal(livingroomData.temperatureToColour(35), '#ff0000');
  });
  it('It should return #0000ff at 15 degrees', function() {
    assert.equal(livingroomData.temperatureToColour(15), '#0000ff');
  });
  it('It should return #7f007f at 25 degrees', function() {
    assert.equal(livingroomData.temperatureToColour(25), '#7f007f');
  });
});

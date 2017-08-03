describe('colour', function() {

  const colour = livingroomData.colour();
  it('It should return a rgb string', function() {
    assert.equal(colour.toString(), 'rgb(0,0,0)');
  });

});

describe('blend', function() {

  const colour = livingroomData.blend(
    livingroomData.colour(),
    livingroomData.colour(255, 255, 255),
    0.5
  );
  it('It should return a could half way between black and white', function() {
    assert.equal(colour.toString(), 'rgb(127,127,127)');
  });

});

describe('timeToColour', function() {

  it('It should return black at midnight', function() {
    assert.equal(livingroomData.timeToColour(0).toString(), 'rgb(0,0,0)');
  });
  it('It should return blue at midday', function() {
    assert.equal(livingroomData.timeToColour(12).toString(), 'rgb(0,204,255)');
  });

});

describe('tempToColour', function() {

  it('It should return blue at 15deg', function() {
    assert.equal(livingroomData.tempToColour(15).toString(), 'rgb(0,204,255)');
  });
  it('It should return red at 35deg', function() {
    assert.equal(livingroomData.tempToColour(35).toString(), 'rgb(255,0,0)');
  });

});


describe('colour', function() {
  const black = livingroomData.colour();
  const grey = livingroomData.colour(127, 127, 127);
  it('It should return a rgb string', function() {
    assert.equal(black.toString(), 'rgb(0,0,0)');
  });
  it('It should return a rgb string with data', function() {
    assert.equal(grey.toString(), 'rgb(127,127,127)');
  });
});

describe('blend', function() {
  const grey = livingroomData.blend(
    livingroomData.colour(),
    livingroomData.colour(255, 255, 255),
    0.5
  );
  const white = livingroomData.blend(
    livingroomData.colour(255, 255, 255),
    livingroomData.colour(255, 255, 255),
    0.5
  );
  it('It should return grey', function() {
    assert.equal(grey.toString(), 'rgb(127,127,127)');
  });
  it('It should return white', function() {
    assert.equal(white.toString(), 'rgb(255,255,255)');
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
  it('It should return blue at 0deg', function() {
    assert.equal(livingroomData.tempToColour(0).toString(), 'rgb(0,204,255)');
  });
  it('It should return blue at 15deg', function() {
    assert.equal(livingroomData.tempToColour(15).toString(), 'rgb(0,204,255)');
  });
  it('It should return red at 35deg', function() {
    assert.equal(livingroomData.tempToColour(35).toString(), 'rgb(255,0,0)');
  });
  it('It should return red at 100deg', function() {
    assert.equal(livingroomData.tempToColour(100).toString(), 'rgb(255,0,0)');
  });
});


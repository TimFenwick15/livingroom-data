// namespace and utils
const livingroomData = {};

livingroomData.endpoints = {
  data: 'data',
  //record: 'record'
};

livingroomData.colour = (r = 0, g = 0, b = 0) => {
  // Method of setting an upper and lower limit for a number. Thanks to:
  // https://stackoverflow.com/questions/5842747/how-can-i-use-javascript-to-limit-a-number-between-a-min-max-value
  const validateColour = x => Math.floor( Math.min( Math.max(x, 0), 255 ) );
  r = validateColour(r);
  g = validateColour(g);
  b = validateColour(b);
  return {
    r,
    g,
    b,
    toString: () => `rgb(${r},${g},${b})`
  };
};

livingroomData.black = livingroomData.colour();
livingroomData.red = livingroomData.colour(255);
livingroomData.blue = livingroomData.colour(0 ,204, 255);

livingroomData.blend = (colour1, colour2, fraction) => livingroomData.colour(
  ( colour2.r - colour1.r ) * fraction + colour1.r,
  ( colour2.g - colour1.g ) * fraction + colour1.g,
  ( colour2.b - colour1.b ) * fraction + colour1.b
);

livingroomData.timeToColour = (hour = new Date().getHours()) => livingroomData.blend(
  livingroomData.black,
  livingroomData.blue,
  Math.sin(Math.PI * hour / 24) ** 2
);

livingroomData.tempToColour = temp => livingroomData.blend(
  livingroomData.blue,
  livingroomData.red,
  Math.min( Math.max( (temp - 15) / 20, 0 ), 1 )
);


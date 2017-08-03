// namespace and utils
const livingroomData = {};

livingroomData.colour = (r = 0, g = 0, b = 0) => ({
  r: Math.floor(r),
  g: Math.floor(g),
  b: Math.floor(b),
  toString: () => `rgb(${Math.floor(r)},${Math.floor(g)},${Math.floor(b)})`
});

livingroomData.blend = (colour1, colour2, fraction) => livingroomData.colour(
  ( colour2.r - colour1.r ) * fraction + colour1.r,
  ( colour2.g - colour1.g ) * fraction + colour1.g,
  ( colour2.b - colour1.b ) * fraction + colour1.b
);

livingroomData.timeToColour = (hour = new Date().getHours()) => livingroomData.blend(
  livingroomData.colour(),
  livingroomData.colour(0, 204, 255),
  Math.sin(Math.PI * hour / 24) ** 2
);

livingroomData.tempToColour = temp => livingroomData.blend(
  livingroomData.colour(0, 204, 255),
  livingroomData.colour(255),
  (temp - 15) / 20
);


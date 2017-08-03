// namespace and utils

// replace these
const intensity = 255; // how not-black should the colours be
const greenness = '00'; // How much green to mix in, would need to scale with the other component

const colour = (r = 0, g = 0, b = 0) => ({
  r: Math.floor(r),
  g: Math.floor(g),
  b: Math.floor(b),
  toString: () => `rgb(${r},${g},${b})`
});
const blend = (colour1, colour2, fraction) => colour(
  Math.abs( colour1.r - colour2.r ) * fraction + colour1.r,
  Math.abs( colour1.g - colour2.g ) * fraction + colour1.g,
  Math.abs( colour1.b - colour2.b ) * fraction + colour1.b
);

const livingroomData = {
  lightToColour: (light) => 'black',

  // Allow date to be passed as an arg to make this function easier to test
  //blue to black -> #0000FF -> #000000
  dayLightToColour: (hour = new Date().getHours()) =>
    `#00${greenness}${Math.floor((Math.sin( Math.PI * hour / 24 ) ** 2) * intensity).toString(16).padStart(2, '0')}`,

  temperatureToColour: (temperature) => {
    // red -> blue: #FF0000 -> #0000FF
    // assume temp varies between 15 and 35 deg. Hopefully it's never outside this range!
    const temperatureFraction = (temperature - 15) / 20;
    const red = Math.floor(temperatureFraction * intensity).toString(16).padStart(2, '0');
    const blue = Math.floor(( 1 - temperatureFraction ) * intensity).toString(16).padStart(2, '0');
    return `#${red}${greenness}${blue}`;
  },





  timeToColour: (hour = new Date().getHours()) => blend(
    colour(),
    colour(0, 204, 255),
    hour / 24
  ),

  tempToColour: temp => blend(
    colour(0, 204, 255),
    colour(255),
    (temp - 15) / 20
  )

};


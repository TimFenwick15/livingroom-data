// namespace and utils

// replace these
const intensity = 255; // how not-black should the colours be
const greenness = '00'; // How much green to mix in, would need to scale with the other component

const livingroomData = {
  lightToColour: (light) => 'black',

  // Allow date to be passed as an arg to make this function easier to test
  //blue to black -> #0000FF -> #000000
  dayLightToColour: (hour = new Date().getHours()) => `#00${greenness}${Math.floor((Math.sin( Math.PI * hour / 24 ) ** 2) * intensity).toString(16).padStart(2, '0')}`,

  temperatureToColour: (temperature) => {
    // red -> blue: #FF0000 -> #0000FF
    // assume temp varies between 15 and 35 deg. Hopefully it's never outside this range!
    const temperatureFraction = (temperature - 15) / 20;
    const red = Math.floor(temperatureFraction * intensity).toString(16).padStart(2, '0');
    const blue = Math.floor(( 1 - temperatureFraction ) * intensity).toString(16).padStart(2, '0');
    return `#${red}${greenness}${blue}`;
  }
};

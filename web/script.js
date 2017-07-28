fetch('../data')
  .then(response => response.json())
  .then(jsonData => {
    if (jsonData.temperature && jsonData.light)
      updateDataView(jsonData.temperature, jsonData.light);
  })
  .catch(() => console.log('/data Fetch error'));


fetch('../record')
  .then(response => response.json())
  .then(jsonData => {
    if (jsonData.temperature && jsonData.light)
      updateRecordView(jsonData.temperature, jsonData.light);
  })
  .catch(() => console.log('/record Fetch error'));


const intensity = 255; // how not-black should the colours be
const greenness = '00'; // How much green to mix in, would need to scale with the other component

// might not use this...
function lightToColour(light) {
  return 'black';
}

function dayLightToColour() {
  //blue to black -> #0000FF -> #000000
  const d = new Date();
  return `#00${greenness}${Math.floor((Math.sin( Math.PI * d.getHours() / 24 ) ** 2) * intensity).toString(16).padStart(2, '0')}`;
}

function temperatureToColour(temperature) {
  // red -> blue: #FF0000 -> #0000FF
  // assume temp varies between 15 and 35 deg. Hopefully it's never outside this range!
  const temperatureFraction = (temperature - 15) / 20;
  const red = Math.floor(temperatureFraction * intensity).toString(16).padStart(2, '0');
  const blue = Math.floor(( 1 - temperatureFraction ) * intensity).toString(16).padStart(2, '0');
  return `#${red}${greenness}${blue}`;
}


function updateDataView(temperature, light) {
  document.getElementById('temperature').innerHTML = temperature;
  document.getElementById('light').innerHTML = light;

  //'linear-gradient(red, #f06d06)';
  document.getElementsByTagName('body')[0].style.backgroundImage =
    `linear-gradient(${dayLightToColour(light)}, ${temperatureToColour(temperature)})`;
}

function updateRecordView(temperature, light) {
  document.getElementById('record').innerHTML = `Record: ${temperature}&deg;C | ${light}au`;
}

// Todo: will need a function that properly calculates gradient in colour.
// Just using one rgb component between 0 -> intensity isn't the same as fading between chosen colours
// Also, 0 will break everything

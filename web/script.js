fetch('../data')
  .then(response => response.json())
  .then(jsonData => {
    updateView(jsonData.temperature, jsonData.light);
  })
  .catch(() => console.log('Fetch error'));


// might not use this...
function lightToColour(light) {

  return 'black';
}

function dayLightToColour() {
  //blue to black -> #0000FF -> #000000
  const d = new Date();
  return '#0000' + Math.floor((Math.sin( Math.PI * d.getHours() / 24 ) ** 2) * 255).toString(16).padStart(2, '0');
}

function temperatureToColour(temperature) {
  // red -> blue: #FF0000 -> #0000FF
  // assume temp varies between 15 and 35 deg. Hopefully it's never outside this range!
  const temperatureFraction = (temperature - 15) / 20;
  const red = Math.floor(temperatureFraction * 255).toString(16).padStart(2, '0');
  const blue = Math.floor(( 1 - temperatureFraction ) * 255).toString(16).padStart(2, '0');
  return `#${red}00${blue}`;
}


function updateView(temperature, light) {
  document.getElementById('temperature').innerHTML = temperature;
  document.getElementById('light').innerHTML = light;

  //'linear-gradient(red, #f06d06)';
  document.getElementsByTagName('body')[0].style.backgroundImage =
    `linear-gradient(${dayLightToColour(light)}, ${temperatureToColour(temperature)})`;
}


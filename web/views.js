// work with dom here
livingroomData.views = {
  updateDataView: (temperature, light) => {
    document.getElementById('temperature').innerHTML = temperature;
    document.getElementById('light').innerHTML = light;
    document.getElementsByTagName('body')[0].style.backgroundImage =
      `linear-gradient(${livingroomData.dayLightToColour(light)}, ${livingroomData.temperatureToColour(temperature)})`;
  },
  updateRecordView: (temperature, light) =>
    document.getElementById('record').innerHTML = `Record: ${temperature}&deg;C | ${light}au`
};

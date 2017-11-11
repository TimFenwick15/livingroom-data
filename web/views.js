// work with dom here
livingroomData.views = {
  updateDataView: (temperature, light, time) => {
    document.getElementById('temperature').innerHTML = temperature;
    document.getElementById('light').innerHTML = light;
    document.getElementsByTagName('body')[0].style.backgroundImage =
      `linear-gradient(${livingroomData.timeToColour().toString()}, ${livingroomData.tempToColour(temperature).toString()})`;

    //document.getElementById('record').innerHTML += `Last updated: ${time}`;
    console.log(`Update time: ${time}`);
  },
  updateRecordView: (temperature, light) =>
    //document.getElementById('record').innerHTML += `Record: ${temperature}&deg;C | ${light}au`
    console.log(`Record: ${temperature}&deg;C | ${light}au`)
};

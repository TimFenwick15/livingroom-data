// work with dom here
livingroomData.views = {
  updateDataView: (data) => {
    console.dir(data)
    document.getElementById('temperature').innerHTML = data[0].value;
    document.getElementById('light').innerHTML = data[1].value;
    document.getElementsByTagName('body')[0].style.backgroundImage =
      `linear-gradient(${livingroomData.timeToColour().toString()}, ${livingroomData.tempToColour(data[1].value).toString()})`;

    //document.getElementById('record').innerHTML += `Last updated: ${time}`;
    //console.log(`Update time: ${time}`);
  },
  /*updateDataView: (temperature, light, time) => {
    document.getElementById('temperature').innerHTML = temperature;
    document.getElementById('light').innerHTML = light;
    document.getElementsByTagName('body')[0].style.backgroundImage =
      `linear-gradient(${livingroomData.timeToColour().toString()}, ${livingroomData.tempToColour(temperature).toString()})`;

    //document.getElementById('record').innerHTML += `Last updated: ${time}`;
    console.log(`Update time: ${time}`);
  },
  updateRecordView: (temperature, light) =>
    document.getElementById('record').innerHTML += `Record: ${temperature}&deg;C | ${light}au`
    console.log(`Record: ${temperature}&deg;C | ${light}au`)*/
};

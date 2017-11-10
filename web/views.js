// work with dom here
livingroomData.views = {
  updateDataView: (data) => {
    data.forEach((x, index) => {
      const rootDiv = document.getElementById('data')
      const dataDiv = document.getElementById(x.name)
      // if this group already exists, update. Else, create
      if (!dataDiv) {
        /*if (index) {
          const seperator = document.createElement('hr', {width: 1, size: 250})
          rootDiv.appendChild(seperator)
        }*/
        const groupDiv = document.createElement('div', {id: x.name})
        const value = document.createElement('div', {className: 'big-text inline'})
        value.innerHTML = x.value
        const units = document.createElement('div', {className: 'small-text inline'})
        value.innerHTML = x.units
        groupDiv.innerHTML += value.outerHTML + units.outerHTML
        rootDiv.appendChild(groupDiv)
      }
      else
        dataDiv.childNodes[0].innerHTML = x.value
    })


    /*document.getElementById('temperature').innerHTML = temperature;
    document.getElementById('light').innerHTML = light;
    document.getElementsByTagName('body')[0].style.backgroundImage =
      `linear-gradient(${livingroomData.timeToColour().toString()}, ${livingroomData.tempToColour(temperature).toString()})`;

    //document.getElementById('record').innerHTML += `Last updated: ${time}`;
    console.log(`Update time: ${time}`);*/
  },
  updateDataView_dep: (temperature, light, time) => {
    document.getElementById('temperature').innerHTML = temperature;
    document.getElementById('light').innerHTML = light;
    document.getElementsByTagName('body')[0].style.backgroundImage =
      `linear-gradient(${livingroomData.timeToColour().toString()}, ${livingroomData.tempToColour(temperature).toString()})`;

    //document.getElementById('record').innerHTML += `Last updated: ${time}`;
    console.log(`Update time: ${time}`);
  },
  updateRecordView_dep: (temperature, light) =>
    document.getElementById('record').innerHTML += `Record: ${temperature}&deg;C | ${light}au`
    console.log(`Record: ${temperature}&deg;C | ${light}au`)
};

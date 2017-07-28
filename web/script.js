const data = {
  temperature: 0,
  light: 0
};

fetch('../data')
  .then(response => response.json())
  .then(jsonData => {
    data.temperature = jsonData.temperature;
    data.light = jsonData.light;
    document.getElementById('temperature').innerHTML = data.temperature;
    document.getElementById('light').innerHTML = data.light;
  })
  .catch(() => console.log('Fetch error'));


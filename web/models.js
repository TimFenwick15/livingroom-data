// ajax goes here
livingroomData.models = {
  getData: () => fetch('http://localhost:8080/data')
    .then(response => response.json())
    .catch(() => console.log('/data Fetch error')),
  getRecordData: () => fetch('record')
    .then(response => response.json())
    .catch(() => console.log('/record Fetch error')),
  test: () => 'black'
}

// ajax goes here
livingroomData.models = {
  getData: callback => {
    fetch('../data')
      .then(response => response.json())
      .then(jsonData => {
		callback(jsonData.temperature, jsonData.light);
        livingroomData.views.updateDataView(jsonData.temperature, jsonData.light);
      })
      .catch(() => console.log('/data Fetch error'));
  },
  getRecordData: callback => {
	const data = fetch('../record')
      .then(response => response.json())
      .then(jsonData => {
		callback(jsonData.temperature, jsonData.light);
        //livingroomData.views.updateRecordView(jsonData.temperature, jsonData.light);
      })
      .catch(() => console.log('/record Fetch error'));
  }
}

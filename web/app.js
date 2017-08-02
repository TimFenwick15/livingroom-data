// start the app here
setInterval(() => {
  livingroomData.models.getData()
    .then(data => livingroomData.views.updateDataView(data.temperature, data.light, data.time));

  livingroomData.models.getRecordData()
    .then(data => livingroomData.views.updateRecordView(data.temperature, data.light));
}, 60000);

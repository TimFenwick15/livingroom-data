// start the app here
livingroomData.app = {
  makeNetworkRequests: () => Promise.all([
    livingroomData.models.getData(),
    livingroomData.models.getRecordData()
  ])
    .then(([data, record]) => {
      livingroomData.views.updateDataView(data.temperature, data.light, data.time);
      livingroomData.views.updateRecordView(data.temperature, data.light);
    })
    .catch(console.error)
};

livingroomData.app.makeNetworkRequests();
setInterval(livingroomData.app.makeNetworkRequests, 60000);

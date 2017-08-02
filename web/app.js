// start the app here
livingroomData.app = {
  makeNetworkRequests: () => {
    livingroomData.models.getData()
      .then(data => livingroomData.views.updateDataView(data.temperature, data.light, data.time))
      .catch(console.log);

    livingroomData.models.getRecordData()
      .then(data => livingroomData.views.updateRecordView(data.temperature, data.light))
      .catch(console.log);
  }
};

livingroomData.app.makeNetworkRequests();
setInterval(livingroomData.app.makeNetworkRequests, 60000);

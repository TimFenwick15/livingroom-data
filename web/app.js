// start the app here
(function() {
  livingroomData.models.getData(
    livingroomData.views.updateDataView
  );
  livingroomData.models.getRecordData(
    livingroomData.views.updateRecordView
  );
}());
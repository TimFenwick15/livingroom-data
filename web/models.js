// ajax goes here

livingroomData.models = {};
livingroomData.models.get = (resourse, getMethod = fetch) => getMethod(resourse)
  .then(response => {
    if (response.status !== 200)
      throw `${resourse} returned no data`;
    return response.json();
  })
  .catch(err => {
    console.error(`${resourse} error: ${err}`);
    throw err;
  });

livingroomData.models.getData = () => livingroomData.models.get(livingroomData.endpoints.data);
//livingroomData.models.getRecordData = () => livingroomData.models.get(livingroomData.endpoints.record);


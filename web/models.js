// ajax goes here
livingroomData.models = {
  getData: () => fetch('data')
    .then(response => {
      if (response.status !== 200)
        throw 'No data';
      return response.json();
    })
    .catch(err => {
      console.log(`/data error: ${err}`);
      throw err;
    }),
  getRecordData: () => fetch('record')
    .then(response => {
      if (response.status !== 200)
        throw 'No record data';
      return response.json();
    })
    .catch(err => {
      console.log(`/record Fetch: ${err}`);
      throw err;
    })
}

describe('livingroomData.models.get', function() {

  // This mock fetch should return promise which resolves to { status: 200, json: Promise }
  const mockSuccessfulFetch = () => new Promise((resolve, reject) => {
    resolve({status: 200, json: () => new Promise((res, rej) => {
      res({test:true});
    })});
  });

  // This mock fetch always throws an error
  const mockUnsuccessfulFetch = () => new Promise((resolve, reject) => {
    reject('mock fetch error');
  });


  it('Should return JSON when fetch resolves', function() {
    return livingroomData.models.get('test', mockSuccessfulFetch)
      .then(function(data) {
        return assert.deepEqual(data, {test:true});
      });
  });

  it('Should return an error string when fetch rejects', function() {
    return livingroomData.models.get('test', mockUnsuccessfulFetch)
      .then()
      .catch(function(err) {
        return assert.equal(err, 'mock fetch error');
      });
  });

});

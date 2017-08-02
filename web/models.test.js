//window.fetch = () => ({then: () => ({temperature:20,light:15})});
/*window.fetch = () => new Promise((resolve, reject) => {
  resolve({temperature:20,light:15})
  reject('err');
});*/

describe('getData', function() {
  it('should not be broken', function() {
    return livingroomData.models.getData().then(
      function(result) {
        return assert.deepEqual(result, {temperature:'19',light:'14'})
      },
      function(err) {
        console.log('no');
      }
    );
  });
});



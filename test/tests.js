var expect = require('chai').expect;


// 1.
// describe('Testing suite capabilities', function () {
//   it('confirms basic arithmetic', function () {
//     expect(2+2).to.equal(4);
//   });
// });


let timer = setTimeout(function(){
            console.log('hi, its been 1000 milliseconds')},1000);

describe('Testing setTimeout at 1000 milliseconds', function(){
    it('should take 1000 milliseconds', function(timer){
       setTimeout(timer, 1000);
    });
})


// describe('User', function() {
//     describe('#save()', function() {
//       it('should save without error', function(done) {
//         var user = new User('Luna');
//         user.save(function(err) {
//           if (err) done(err);
//           else done();
//         });
//       });
//     });
//   });
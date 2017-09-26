var chai = require('chai');
var expect = chai.expect;
var spies = require('chai-spies');
chai.use(spies)
var models = require('../models');
var Page = models.Page;
var User = models.User;
var marked = require('marked');
chai.use(require('chai-things'));

// 1.
// describe('Testing suite capabilities', function () {
//   it('confirms basic arithmetic', function () {
//     expect(2+2).to.equal(4);
//   });
// });


// let timer = setTimeout(function(){
//             console.log('hi, its been 1000 milliseconds')},1000);

// describe('Testing setTimeout at 1000 milliseconds', function(){
//     it('should take 1000 milliseconds', function(timer){
//        setTimeout(timer, 1000);
//     });
// })


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


// describe('spy function count', function() {
//     it('should double els and be called 4 times', function() {
//         let arr = [1, 1, 1, 1];
//         function doubler(e) {
//             e * 2
//         }
//         doubler = chai.spy(doubler);
//         arr.forEach(doubler);

//         expect(doubler).to.have.been.called.exactly(4);
//     })
// });


describe('Page model', function () {

      describe('Virtuals', function () {
          var page;
        beforeEach(function() {
            page = Page.build();
        })

        describe('route', function () {
          it('returns the url_name prepended by "/wiki/"', function() {
              page.urlTitle = 'some_Title';
              expect(page.route).to.equal('/wiki/some_Title');
          });
        });
        describe('renderedContent', function () {
          it('converts the markdown-formatted content into HTML', function() {
            page.content = 'some_Content';
            let mrkup = marked(page.content);
            expect(page.renderedContent).to.equal(mrkup);
          });
        });
      });

      xdescribe('Class methods', function () {
        before(function (done) {
            Page.create({
              title: 'foo',
              content: 'bar',
              tags: ['foo', 'bar']
            })
            .then(function () {
              done();
            })
            .catch(done);
          });
        describe('findByTag', function () {
          it('gets pages with the search tag', function(done) {
              Page.findByTag('foo')
              .then(function(p) {
                expect(p).to.have.lengthOf(1);
                done();
              }).catch(done)
          });

          it('does not get pages without the search tag', function(done) {
            Page.findByTag('sdalkvaskva')
            .then(function(p) {
              expect(p).to.have.lengthOf(0);
              done();
            }).catch(done)

            });
        });
      });

      describe('Instance methods', function () {
        before(function (done) {
            let page1 = Page.create({
              title: 'baseTitle',
              content: 'base',
              tags: ['shared', 'base']
            })
            .then(function () {
              done();
            })
            .catch(done);

          let page2 = Page.create({
            title: 'sharedTitle',
            content: 'sharing',
            tags: ['shared', 'second']
          })
          .then(function () {
            done();
          })
          .catch(done);

        let page3 = Page.create({
            title: 'lastTitle',
            content: 'last',
            tags: ['last']
          })
          .then(function () {
            done();
          })
          .catch(done);

        });
        describe('findSimilar', function () {
            page2.findSimilar()
          it('never gets itself');
          it('gets other pages with any common tags');
          it('does not get other pages without any common tags');
        });
      });

      xdescribe('Validations', function () {
        xit('errors without title');
        xit('errors without content');
        xit('errors given an invalid status');
      });

      xdescribe('Hooks', function () {
        xit('it sets urlTitle based on title before validating');
      });

    });

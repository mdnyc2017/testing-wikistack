const expect = require('chai').expect;
const Doubler = require('../')


describe('doubler', () =>{
    it('adds two plus two and returns 4', () =>{
        expect(doubler(2,2)).to.be(4)
    })


})
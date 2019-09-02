const expect = require('chai').expect;
import {hello} from '../logic/greet';
import {reduceFunc} from '../logic/reduce';

describe('return Hello', function() {
    it('hello', function() {
        const result = hello();
        expect(result).to.be.a('string');
        expect(result).equal('hello');
    })
})

describe('reduce group', function(){
    it('empty arr', function(){
        const result = reduceFunc([]);
        expect(result).to.be.a('number');
        expect(result).equal(0);
    })

    it('positive numbers', function() {
        const result = reduceFunc([1,5,10]);
        expect(result).to.be.a('number');
        expect(result).equal(16);
    })

    // it('negative numbers', function() {
    //     const result = reduceFunc([-5,-10,-15]);
    //     expect(result).to.be.a('number');
    //     expect(result).equal(-30);
    // })

    it('not array', function() {
        const result = reduceFunc('test string');
        expect(result).to.be.a('boolean');
        expect(result).equal(false);
    })

    it('float numbers', function(){
        const result = reduceFunc([10.1, 20.2]);
        expect(result).to.be.a('number');
        expect(result).equal(30.3);
    })
})
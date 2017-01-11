'use strict';

var chai = require('chai');
var sinon = require('sinon');
var calc = require('../../src/self-instruction/calc');
var CalcUsage = require('../../src/self-instruction/calcusage');
var calc = require('../../src/self-instruction/calc');

var expect = chai.expect;

var calcUsage = new CalcUsage(10, 6);
var sub;

describe('test calcUsage API', function(){
    beforeEach(function(){
        sub = sinon.stub(calc, 'subtraction', function(a, b){
            return a - b;
        });
    });

    afterEach(function(){
        sub.restore();
    })

    it('sum calculation', function(done){
        expect(calcUsage.fetchSum()).to.equal(16);
        done();
    });

    it('subtraction calculation', function(done){
        expect(calcUsage.fetchSubtraction()).to.eq(4);
        done();
    });
});
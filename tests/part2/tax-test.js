var nock = require('nock');
var tax = require('./../../src/part2/tax');
var chai = require('chai');
var expect = chai.expect;

it('calculate() should resolve with an object containing tax details', function (done) {
    nock('https://some-tax-service.com')
    .post('/request')
    .reply(200, function(uri, requestBody) {
        return {
    amount: JSON.parse(requestBody).subtotal * 0.10
        };
    });

    tax.calculate(100, 'CA', function (taxDetails) {
        expect(taxDetails).to.eq({ amount: 10 });
        done();
    });
});
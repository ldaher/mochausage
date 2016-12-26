var chai = require('chai');
var nock = require('nock');
var tax = require('./../../src/part2/tax');
var expect = chai.expect;

describe('tax', function () {
    it('calculate() should resolve with an object containing the tax details', function (done) {
        nock('https://some-tax-service.com')
            .post('/request')
            .reply(200, {
                amount: 7
            });

        tax.calculate(500, 'CA', function (taxDetails) {
            expect(taxDetails).to.eql({ amount: 7 });
            done();
        });
    });

    it('calculate() should send the subtotal in the request', function (done) {
        nock('https://some-tax-service.com')
            .post('/request')
            .reply(200, function (uri, requestBody) {
                return {
                    // amount: JSON.parse(requestBody).subtotal * 0.10
                    //the above JSON var signing isn't working on VS Code
                    amount: requestBody.subtotal * 0.10
                };
            });

        tax.calculate(100, 'CA', function (taxDetails) {
            expect(taxDetails).to.eql({ amount: 10 });
            done();
        });
    });

});
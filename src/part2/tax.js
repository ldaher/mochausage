var request = require('request');

module.exports = {
    calculate: function (subtotal, state, done) {
        request.post({
            url: 'https://some-tax-service/request',
            method: 'POST',
            json: {}
        }, function (error, response, body) {
            done(body);
        });
    }
}
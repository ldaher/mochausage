var request = require('request');

module.exports = {
    //TODO understand what this fucking code does!!!
    calculate: function (subtotal, state, done) {
        if (state !== 'CA') {
            return done({ amount: 0 });
        }

        request.post({
            url: 'https://some-tax-service.com/request',
            method: 'POST',
            json: {
                subtotal: subtotal
            }
        }, function (error, response, body) {
            done(body);
        });
    }
};

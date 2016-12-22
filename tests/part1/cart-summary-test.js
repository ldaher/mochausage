var chai = require('chai');
var expext = chai.expect;
var CartSummary = require('./../../src/part1/cart-summary');

describe('CartSummary', function(){
    it('getSubtotal() should return 0 if no items are passed in', function(){
        var cartSummary = new CartSummary([{
            id: 1,
            quantity: 4,
            price: 50
        }, {
            id: 2,
            quantity: 2,
            price: 30
        }, {
            id: 3,
            quantity: 1,
            price: 40
        }
        ]);

        expext(cartSummary.getSubtotal()).to.equal(300);
    });
});
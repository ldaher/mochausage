var calc = require('./calc');

function CalcUsage(a, b){
    this.a = a;
    this.b = b;
}

CalcUsage.prototype.fetchSum = function(){
    return calc.sum(this.a, this.b);
}

CalcUsage.prototype.fetchSubtraction = function(){
    return calc.subtraction(this.a, this.b);
}

module.exports = CalcUsage;
var add = function () {
    var _args = [];
    return function () {
        if (arguments.length === 0) {
            return _args.reduce(function (a, b) {
                return a + b;
            });
        }
        Array.prototype.push.apply(_args,Array.prototype.slice.call(arguments));
        return arguments.callee;
    }
};    
var sum = add();
sum(1,2)
console.log(sum());
sum(3);
console.log(sum());
sum(4);
console.log(sum());

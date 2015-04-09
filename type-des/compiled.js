var Greeter = (function () {
    function Greeter(message, name) {
        this.greeting = message;
        this.name = name;
    }
    Greeter.prototype.greet = function () {
        return "Hello, " + this.greeting;
    };
    return Greeter;
})();

/// <reference path="../typings/bundle.d.ts" />
var assert = require('power-assert');
var Person = (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    Person.prototype.getAge = function () {
        return this.age;
    };
    return Person;
})();
describe('Person', function () {
    var alice = new Person('alice', 3);
    var bob = new Person('bob', 5);
    it('#getAge', function () {
        assert(alice.getAge() === 3);
    });
});
//# sourceMappingURL=sample.js.map
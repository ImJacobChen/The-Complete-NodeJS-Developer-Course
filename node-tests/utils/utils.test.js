const expect = require("expect");
const utils = require("./utils");

it("should add two numbers", () => {
    var res = utils.add(33, 11);
    expect(res).toBe(44).toBeA("number");
});

it("should async add two numbers", (done) => {
    utils.asyncAdd(4, 3, (sum) => {
        expect(sum).toBe(7).toBeA('number');
        done();
    });
});

it("should square a number", () => {
    var res = utils.square(9);
    expect(res).toBe(81).toBeA("number");
});

it("should async square a number", (done) => {
    var res = utils.asyncSquare(7, (res) => {
        expect(res).toBe(49);
        done();
    });
});

it("should verify first and last names are set", () => {
    var user = {
        age: 21,
        location: "London"
    };
    utils.setName(user, "Jacob Chen");
    expect(user).toInclude({
        firstName: "Jacob",
        lastName: "Chen"
    });
});
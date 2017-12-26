const expect = require('expect');
const rewire = require('rewire');

var app = rewire('./app');

describe('App', () => {
    var db = {
        saveUser: expect.createSpy()
    };
    app.__set__('db', db);

    it('should call the spy correctly', () => {
        var spy = expect.createSpy();
        spy('Jacob', 24);
        expect(spy).toHaveBeenCalledWith('Jacob', 24);
    });

    it('should call saveUser with user object', () => {
        var email = 'jacob@example.com';
        var password = 'supersecret';

        app.handleSignup(email, password);
        expect(db.saveUser).toHaveBeenCalledWith({email, password});
    });
});

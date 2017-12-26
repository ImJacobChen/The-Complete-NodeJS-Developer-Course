const test = require("supertest");
const expect = require('expect');
var app = require("./server").app;

describe('Server', () => {

	describe('GET /', () => {
		it("should return hello world response", (done) => {
			test(app)
				.get("/")
				.expect("Hello world!")
				.end(done);
		});
	});
	
	describe('GET /users', () => {
		it("should return users with a user 'Jacob'", (done) => {
			test(app)
				.get("/users")
				.expect(200)
				.expect((res) => {
					expect(res.body).toInclude({name: "Jacob", age: 23});
				})
				.end(done);
		})
	});
	
});

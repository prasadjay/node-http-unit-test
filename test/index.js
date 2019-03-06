let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../app');
let should = chai.should();
chai.use(chaiHttp);

//System
describe('System', () => {
    before((done) => {
        //Before test suite run this code
        console.log("Connecting to Database...");
        //wait till connects to database
        setTimeout(function () {
            console.log("\n------ DB connected ------\n\n");
            done();
        }, 5000);
    });

    beforeEach((done) => {
        //Before each test run this code
        done();
    });

    describe('/GET /', () => {
        it('it should GET system status', (done) => {
            chai.request(server)
                .get('/')
                .end((err, res) => {
                    res.should.have.status(200);
                    done();
                });
        });
    });

});

describe('User', () => {
    beforeEach((done) => {
        done();
    });

    describe('/GET /user', () => {
        it('it should login a user', (done) => {
            let requestBody = {
                "username": "prasadjayashanka@gmail.com",
                "password": "asdf"
            };

            chai.request(server)
                .post('/v1/user/login')
                .send(requestBody)
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('object');
                    res.body.should.have.property('status').eql(true);
                    res.body.data.should.have.property('access_token');
                    res.body.data.should.have.property('id_token');
                    res.body.data.should.have.property('refresh_token');
                    done();
                });
        });
    });

    describe('/POST /user', () => {
        it('it should create a user', (done) => {
            let requestBody = {
                username: "prasadjayashanka@gmail.com",
                first_name: "Jay",
                last_name: "Verna"
            };

            chai.request(server)
                .post('/v1/user')
                .send(requestBody)
                .end((err, res) => {
                    res.should.have.status(201);
                    res.body.should.be.a('object');
                    res.body.should.have.property('status').eql(true);
                    done();
                });
        });
    });

    describe('/PUT /user', () => {
        it('it should update a user', (done) => {
            let requestBody = {
                username: "prasadjayashanka@gmail.com",
                first_name: "Jay",
                last_name: "Verna"
            };

            chai.request(server)
                .put('/v1/user')
                .set('Authorization', 'Bearer some-sort-of-token-you-might-use')
                .send(requestBody)
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('object');
                    res.body.should.have.property('status').eql(true);
                    done();
                });
        });
    });

    describe('/DELETE /user/prasadjayashanka@gmail.com', () => {
        it('it should delete a user', (done) => {
            chai.request(server)
                .delete('/user/prasadjayashanka@gmail.com')
                .set('Authorization', 'Bearer some-sort-of-token-you-might-use')
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('object');
                    res.body.should.have.property('status').eql(true);
                    done();
                });
        });
    });
});
process.env.NODE_ENV = 'development';

const expect = require('chai').expect;
const request = require('supertest');

const app = require('../../../app.js');
const conn = require('../../../db/index.js');

const credentials = require('../../Seed/login.js');

describe('TEST: POST /api/v1/users/login', () => {
  var token = '';

  before(done => {
    conn
      .connect()
      .then(done())
      .catch(err => done(err));
  });

  it('OK, POST Login sends token', done => {
    request(app)
      .post('/api/v1/users/login')
      .send(credentials.correctCredentials)
      .then(res => {
        const body = res.body;
        expect(body).to.contain.property('status');
        expect(body).to.contain.property('data');
        expect(body).to.contain.property('token');
        done();
      })
      .catch(err => done(err));
  });

  it('ERROR, Invalid credentials gets error in response', done => {
    request(app)
      .post('/api/v1/users/login')
      .send(credentials.incorrectCredentials)
      .then(res => {
        const body = res.body;
        expect(401);
        expect(body).to.contain.property('status');
        expect(body).to.contain.property('error');
        expect(body.message).to.contain(
          'The mobile number/password entered is incorrect !'
        );

        done();
      })
      .catch(err => done(err));
  });

  it('ERROR, Missing fields get error in response', done => {
    request(app)
      .post('/api/v1/users/login')
      .send(credentials.missingFieldCredentials)
      .then(res => {
        const body = res.body;
        expect(401);
        expect(body).to.contain.property('status');
        expect(body).to.contain.property('error');
        expect(body.message).to.contain('Please provide email and password!');

        done();
      })
      .catch(err => done(err));
  });

  it('ERROR, Incorrect email format in request', done => {
    request(app)
      .post('/api/v1/users/login')
      .send(credentials.inCorrectEMailFormat)
      .then(res => {
        const body = res.body;
        expect(401);
        expect(body).to.contain.property('status');
        expect(body).to.contain.property('error');
        expect(body.message).to.contain(
          'The mobile number/password entered is incorrect !'
        );

        done();
      })
      .catch(err => done(err));
  });
});

process.env.NODE_ENV = 'development';

const expect = require('chai').expect;
const request = require('supertest');

const app = require('../../../app.js');
const conn = require('../../../db/index.js');

describe('POST /api/v1/users/login', () => {
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
      .send({ email: 'sgrmhdk00@gmail.com', password: '12345678' })
      .then(res => {
        const body = res.body;
        expect(body).to.contain.property('status');
        expect(body).to.contain.property('data');
        expect(body).to.contain.property('token');
        done();
      })
      .catch(err => done(err));
  });
});

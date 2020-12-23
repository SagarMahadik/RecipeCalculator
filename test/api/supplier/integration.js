process.env.NODE_ENV = 'development';

const expect = require('chai').expect;
const request = require('supertest');

const app = require('../../../app.js');
const conn = require('../../../db/index.js');

describe('POST /api/v1/supplier ', () => {
  let token = '';

  before(done => {
    conn
      .connect()
      .then(done())
      .catch(err => done(err));
  });

  it('Suucess, on non-API field in POST Supplier request', done => {
    request(app)
      .post('/api/v1/users/login')
      .send({ email: 'sgrmhdk00@gmail.com', password: '12345678' })
      .end(function(err, res) {
        if (err) {
          done(err);
          return;
        }
        token = res.body.token;
        request(app)
          .post('/api/v1/supplier')
          .set({ Authorization: `Bearer ${token}` })
          .send({ supplierName: '1234567' })
          .then(res => {
            const body = res.body;
            expect(201);
            expect(body).to.contain.property('status');
            expect(body).to.contain.property('data');
            done();
          })
          .catch(err => done(err));
      });
  });
});

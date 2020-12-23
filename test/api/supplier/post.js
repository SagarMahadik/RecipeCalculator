process.env.NODE_ENV = 'development';

const expect = require('chai').expect;
const request = require('supertest');

const app = require('../../../app.js');
const conn = require('../../../db/index.js');

describe('POST /api/v1/supplier ', () => {
  var token = '';
  before(done => {
    conn
      .connect()
      .then(done())
      .catch(err => done(err));
  });

  it('Error, on unauthorized POST Supplier request', done => {
    request(app)
      .post('/api/v1/supplier')
      .set('Authorization', 'Bearer' + token)
      .send({ supplierName: 'Sagar' })
      .then(res => {
        const body = res.body;
        expect(body).to.contain.property('status');
        expect(body).to.contain.property('error');
        done();
      })
      .catch(err => done(err));
  });
});

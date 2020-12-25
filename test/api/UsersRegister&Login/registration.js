process.env.NODE_ENV = 'development';

const expect = require('chai').expect;
const request = require('supertest');

const app = require('../../../app.js');
const conn = require('../../../db/index.js');

const credentials = require('../../Seed/registration.js');

describe('TEST: POST /api/v1/users/register', () => {
  var token = '';

  before(done => {
    conn
      .connect()
      .then(done())
      .catch(err => done(err));
  });

  it('ERROR, POST duplicate MobileNumber sends error', done => {
    request(app)
      .post('/api/v1/users/signup')
      .send(credentials.duplicateMobileNumber)
      .then(res => {
        const body = res.body;
        expect(400);
        expect(body.status).to.contain('fail');
        expect(body).to.contain.property('status');
        expect(body).to.contain.property('message');
        expect(body.message).to.contain(
          'Entered Mobile Number already exsists, Please login or try other Mobile Number!'
        );

        done();
      })
      .catch(err => done(err));
  });

  it('ERROR, POST duplicate Email sends error', done => {
    request(app)
      .post('/api/v1/users/signup')
      .send(credentials.duplicateEmail)
      .then(res => {
        const body = res.body;
        expect(400);
        expect(body.status).to.contain('fail');
        expect(body).to.contain.property('status');
        expect(body).to.contain.property('message');
        expect(body.message).to.contain(
          'Entered Email already exsists, Please login or try other Email!'
        );

        done();
      })
      .catch(err => done(err));
  });

  it('ERROR, POST duplicate Email & MobileNumber sends error', done => {
    request(app)
      .post('/api/v1/users/signup')
      .send(credentials.duplicateEmailAndMobile)
      .then(res => {
        const body = res.body;
        expect(400);
        expect(body.status).to.contain('fail');
        expect(body).to.contain.property('status');
        expect(body).to.contain.property('message');
        expect(body.message).to.contain(
          'Entered Email already exsists, Please login or try other Email!'
        );

        done();
      })
      .catch(err => done(err));
  });

  it('ERROR, POST Invalid email sends error', done => {
    request(app)
      .post('/api/v1/users/signup')
      .send(credentials.inValidEmail)
      .then(res => {
        const body = res.body;
        expect(400);
        expect(body.status).to.contain('fail');
        expect(body).to.contain.property('status');
        expect(body).to.contain.property('message');
        expect(body.message).to.contain(
          'Invalid input data. Please provide a valid email'
        );

        done();
      })
      .catch(err => done(err));
  });

  it('ERROR, POST Missing mobile number and UserID sends error', done => {
    request(app)
      .post('/api/v1/users/signup')
      .send(credentials.missingMobileNumberUserID)
      .then(res => {
        const body = res.body;
        expect(400);
        expect(body.status).to.contain('fail');
        expect(body).to.contain.property('status');
        expect(body).to.contain.property('message');
        expect(body.message).to.contain(
          'Invalid input data. Please enter mobile number. User needs a userID'
        );

        done();
      })
      .catch(err => done(err));
  });

  it('ERROR, POST Missing Password and PasswordConfirm sends error', done => {
    request(app)
      .post('/api/v1/users/signup')
      .send(credentials.missingPasswordPasswordConfirm)
      .then(res => {
        const body = res.body;
        expect(400);
        expect(body.status).to.contain('fail');
        expect(body).to.contain.property('status');
        expect(body).to.contain.property('message');
        expect(body.message).to.contain(
          'Invalid input data. Please provide a password. Please confirm your password'
        );

        done();
      })
      .catch(err => done(err));
  });

  it('ERROR, POST mismatch in Password and PasswordConfirm sends error', done => {
    request(app)
      .post('/api/v1/users/signup')
      .send(credentials.mismatchPasswordPasswordConfirm)
      .then(res => {
        const body = res.body;
        expect(400);
        expect(body.status).to.contain('fail');
        expect(body).to.contain.property('status');
        expect(body).to.contain.property('message');
        expect(body.message).to.contain(
          'Invalid input data. Passwords are not the same!'
        );

        done();
      })
      .catch(err => done(err));
  });

  it('ERROR, POST mismatch in userID and MobileNumber sends error', done => {
    request(app)
      .post('/api/v1/users/signup')
      .send(credentials.mismatchUserIdMobNumber)
      .then(res => {
        const body = res.body;
        expect(400);
        expect(body.status).to.contain('fail');
        expect(body).to.contain.property('status');
        expect(body).to.contain.property('message');
        expect(body.message).to.contain(
          'Invalid input data. Mobile number and UserId do not match!'
        );

        done();
      })
      .catch(err => done(err));
  });

  it('ERROR, POST missing BrandName sends error', done => {
    request(app)
      .post('/api/v1/users/signup')
      .send(credentials.missingBrandName)
      .then(res => {
        const body = res.body;
        expect(400);
        expect(body.status).to.contain('fail');
        expect(body).to.contain.property('status');
        expect(body).to.contain.property('message');
        expect(body.message).to.contain('Please enter brand name!');

        done();
      })
      .catch(err => done(err));
  });

  it('ERROR, POST missing Email sends error', done => {
    request(app)
      .post('/api/v1/users/signup')
      .send(credentials.missingEmail)
      .then(res => {
        const body = res.body;
        expect(400);
        expect(body.status).to.contain('fail');
        expect(body).to.contain.property('status');
        expect(body).to.contain.property('message');
        expect(body.message).to.contain(
          'Invalid input data. Please provide your email'
        );

        done();
      })
      .catch(err => done(err));
  });
  /**
 *  it('OK, POST valid request sent', done => {
    request(app)
      .post('/api/v1/users/signup')
      .send(credentials.validRequest)
      .then(res => {
        const body = res.body;
        expect(201);
        expect(body.status).to.contain('success');
        expect(body).to.contain.property('status');
        expect(body).to.contain.property('token');

        done();
      })
      .catch(err => done(err));
  }); 
 */
});

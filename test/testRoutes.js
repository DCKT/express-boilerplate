'use strict';
let assert     = require('assert');
let superagent = require('superagent');
const URI      = 'http://localhost:8080';

describe('Routes :', () => {

  describe('Valid URL :', () => {
    it('should return 200 status code', done => {
      superagent.get(`${URI}`).end((err, res) => {
        assert.equal(res.status, 200, 'Status code should be equal to 200');
        done();
      });
    });
  });

  describe('Assets URL :', () => {
    it('should return an image', done => {
      superagent.get(`${URI}/images/test.png`).end((err, res) => {
        assert.equal(res.header['content-type'], 'image/png');
        assert.equal(res.status, 200, 'Status code should be equal to 200');
        done();
      });
    });
  });

  describe('Unknown URL :', () => {
    it('should return 404 status code', done => {
      superagent.get(`${URI}/ojfoejf`).end((err, res) => {
        assert.equal(res.status, 404, 'Status code should be equal to 404');
        done();
      });
    });
  });

});

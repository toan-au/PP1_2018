const assert = require('assert');
const chai = require('chai');
chai.use(require('chai-fs'));
const path = require('path');
const axios = require('axios');

const expect = chai.expect;
const config_path = path.join(__dirname, '..', 'config');
process.env.NODE_ENV = 'test';

describe('Array', function() {
  describe('#indexOf()', function() {
    it('should return -1 when the value is not present', function() {
      assert.equal([1, 2, 3].indexOf(4), -1);
    });
  });
});

describe('Key files', () => {
  it('dev.js Should exist', () => {
    expect(config_path)
      .to.be.a.directory()
      .and.include.contents(['dev.js']);
  });
  it('gcs_keys.json Should exist', () => {
    const gcs_path = path.join(config_path, 'gcs_keys.json');
    expect(config_path)
      .to.be.a.directory()
      .and.include.contents(['gcs_keys.json']);
  });
});

describe('Users', () => {
  it('should be created', () => {
    console.log(process.env.NODE_ENV);
  });
});

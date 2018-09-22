const assert = require('assert');
const chai = require('chai');
chai.use(require('chai-fs'));
const path = require('path');
const axios = require('axios');

const expect = chai.expect;
const config_path = path.join(__dirname, '..', 'config');
process.env.NODE_ENV = 'test';

describe('Key files', () => {
  it('test.js Should exist', () => {
    expect(config_path)
      .to.be.a.directory()
      .and.include.contents(['test.js']);
  });
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

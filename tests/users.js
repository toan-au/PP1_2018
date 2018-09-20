const axios = require('axios');
const chai = require('chai');

const assert = chai.assert;
const expect = chai.expect;
const Users = require('../models').users;

const dummyUser = {
  displayName: 'dummy',
  bio: 'test bio',
  region: 1,
  locale: 1,
  age: 25,
  playstyle: 'casual'
};

describe('Users', () => {
  it('can be created', () => {
    const user = Users.build({});
    assert.isNotNull(user);
  });
  it('can be persisted', () => {
    assert.isTrue(true);
  });
  it('can finish registration (updated)', () => {
    assert.isTrue(true);
  });
  it('can be retrieved', () => {
    assert.isTrue(true);
  });

  // auth stuff

  it('can login/register', () => {
    assert.isTrue(true);
  });
});

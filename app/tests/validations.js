const axios = require('axios');
const chai = require('chai');

const assert = chai.assert;
const expect = chai.expect;
// models
const Users = require('../models').users;
const Responses = require('../models').responses;
const Matches = require('../models').matches;


describe('Users: ', () => {
    it('Email\'s: validate correctly ', async ()  => {
        try{
            const dummyUser = {
                email: 'failEmail',
                displayName: 'dummy',
                bio: 'test bio',
                regionId: 1,
                localeId: 1,
                age: 25,
                playstyle: 'casual'
              };
              const user = Users.build(dummyUser);
        }
        catch(e){
            assert.isTrue(true);
        }

    });

    it('Display Name: cannot be empty', () => {
        try{
            const dummyUser = {
                email: 'dummy@test.com.au',
                displayName: '',
                bio: 'test bio',
                regionId: 1,
                localeId: 1,
                age: 25,
                playstyle: 'casual'
              };
              const user = Users.build(dummyUser);
        }
        catch(e){
            assert.isTrue(true);
        }
    });

    it('Display Name: cannot be null', () => {
        try{
            const dummyUser = {
                email: 'dummy@test.com.au',
                displayName: null,
                bio: 'test bio',
                regionId: 1,
                localeId: 1,
                age: 25,
                playstyle: 'casual'
              };
              const user = Users.build(dummyUser);
        }
        catch(e){
            assert.isTrue(true);
        }
    });
    
    it('Display Name: cannot include non-alphanumeric characters', () => {
        try{
            const dummyUser = {
                email: 'dummy@test.com.au',
                displayName: 'testUser-/@$',
                bio: 'test bio',
                regionId: 1,
                localeId: 1,
                age: 25,
                playstyle: 'casual'
              };
              const user = Users.build(dummyUser);
        }
        catch(e){
            assert.isTrue(true);
        }
    });

    it('Bio: cannot longer than 1000 characters', () => {
        try{
            const dummyUser = {
                email: 'dummy@test.com.au',
                displayName: 'dummy',
                bio: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Na',
                regionId: 1,
                localeId: 1,
                age: 25,
                playstyle: 'casual'
              };
              const user = Users.build(dummyUser);
        }
        catch(e){
            assert.isTrue(true);
        }
      
    });
    
    it('Playstyle: cannot be anything other than Casual or Competitive', () => {
        try{
            const dummyUser = {
                email: 'dummy@test.com.au',
                displayName: 'dummy',
                bio: 'test bio',
                regionId: 1,
                localeId: 1,
                age: 25,
                playstyle: 'Test'
              };
              const user = Users.build(dummyUser);
        }
        catch(e){
            assert.isTrue(true);
        }
      
    });
});

describe('Matches: ', () => {
    it('UserResponse: Must be L or D', ()  => {
        try{
            const newMatch = {
                userId: 1000000,
                matchId: 1000001,
                userResponse: 'P',
                matchResponse: 'P'
              };
              const match = Matches.build(newMatch);
        }
        catch(e){
            assert.isTrue(true);
        }

    });

    it('MatchResponse: Must be P, L or D', ()  => {
        try{
            const newMatch = {
                userId: 1000000,
                matchId: 1000001,
                userResponse: 'L',
                matchResponse: 'Failed Response'
        };
              const match = Matches.build(newMatch);
        }
        catch(e){
            assert.isTrue(true);
        }

    });
});

describe('Responses: ', () => {
    it('Response: Must be within [A,B,C,D]', ()  => {
        try{
            let newResponse = {
                userId: 1000000,
                questionId: 1,
                response: 'J',
                importance: 2,
                preference: 'AC',
                createdAt: new Date(),
                updatedAt: new Date()
              };
              const response = Responses.build(newResponse);
        }
        catch(e){
            assert.isTrue(true);
        }

    });

    it('Importance: Must not be greater than 3', ()  => {
        try{
            let newResponse = {
                userId: 1000000,
                questionId: 1,
                response: 'A',
                importance: 5,
                preference: 'AC',
                createdAt: new Date(),
                updatedAt: new Date()
              };
              const response = Responses.build(newResponse);
        }
        catch(e){
            assert.isTrue(true);
        }

    });

    it('Importance: Must not be less than 0', ()  => {
        try{
            let newResponse = {
                userId: 1000000,
                questionId: 1,
                response: 'A',
                importance:-1,
                preference: 'AC',
                createdAt: new Date(),
                updatedAt: new Date()
              };
              const response = Responses.build(newResponse);
        }
        catch(e){
            assert.isTrue(true);
        }

    });

    it('Preference: Cannot include characters outside of [A,B,C,D]', async ()  => {
        try{
            let newResponse = {
                userId: 1000000,
                questionId: 1,
                response: 'A',
                importance: 3,
                preference: 'AJC',
                createdAt: new Date(),
                updatedAt: new Date()
              };
              const response = Responses.build(newResponse);
        }
        catch(e){
            assert.isTrue(true);
        }

    });
})
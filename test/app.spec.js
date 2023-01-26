//belong to part 1
const assert = require('assert');
const { expect } = require('chai');

const { add } = require('../src/index');

//belong to part 2
const chai = require('chai');
const axios = require('axios');

const { User } = require('../src/index2');


//part1------------------------------------------------------------------------------------------------

describe( 'the add function', () => {

  it( 'should add 2 numbers together 1', () => {
    const result = add(2,2);
    //assert.equal(result, 4);
    expect(result).to.equal(4);
  });

  it( 'should add 2 numbers together 2', () => {
    const result = add(2,2);
    assert.equal(result, 4);
  });

  it('should be able to handle one number', () => {
    const result = add(5);
    expect(result).to.be.eq(5);
  });

  it('should return 0 if either argument is not a number', () => {
    const result = add (3, 'string');
    expect(result).to.equal(0);
  })
}) 


//part2------------------------------------------------------------------------------------------------
const expect2 = chai.expect;

describe('the User class', () => {
  it('should get the user id', (done) => {
    const user = new User('IvanGerman');
    user.getUserId()
      .then( (result) => {
        console.log('result---',result);
        expect2(result).to.be.a('number');
        expect2(result).to.be.eq(68238341);
        done();
      })
      .catch(done);
  })
})
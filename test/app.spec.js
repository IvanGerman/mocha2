const assert = require('assert');
const { expect } = require('chai');

const { add } = require('../src/index');


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
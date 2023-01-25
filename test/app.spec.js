const assert = require('assert');

const { add } = require('../src/index');


describe( 'the add function', () => {

  it( 'should add 2 numbers together', () => {
    const result = add(2,2);
    assert.equal(result, 4);
  });

  it( 'should add 2 numbers together', () => {
    const result = add(2,2);
    assert.equal(result, 5);
  })
})
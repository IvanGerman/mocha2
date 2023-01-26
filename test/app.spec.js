//belong to part 1
const assert = require('assert');
const { expect } = require('chai');

const { add } = require('../src/index');

//belong to part 2
const chai = require('chai');
const axios = require('axios');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');


const { User } = require('../src/index2');
const { afterEach, beforeEach } = require('mocha');


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
chai.use(sinonChai);

describe('the User class', () => {

  const sandbox = sinon.createSandbox();
  let user;

  beforeEach( () => {
    user = new User('IvanGerman');
  });
  afterEach( () => {
    sandbox.restore();
  });

  it('should get the user id', (done) => {

    const user = new User('IvanGerman');
    //using sinon
    const getStub = sandbox.stub(axios, 'get').resolves({ data: { id: 68238341 }});

    user.getUserId()
      .then( (result) => {
        console.log('result---',result);
        expect2(result).to.be.a('number');
        //expect2(result).to.be.eq(68238341);
        //using sinon
        expect2(result).to.be.eq(68238341);
        expect2(getStub).to.have.been.calledOnce;
        expect2(getStub).to.have.been.calledWith('https://api.github.com/users/IvanGerman');

        done();
      })
      .catch(done);
  });

  it('should return a repository if the user can view repos', (done) => {
    const user = new User('IvanGerman', true);
    const getStub = sandbox.stub(axios, 'get').resolves({ data: ['repo1', 'repo2', 'repo3']});
    sandbox.stub(user, 'canViewRepos').value(true);

    user.getUserRepo(2)
      .then( (response) => {
        expect2(response).to.be.eq('repo3');
        expect2(getStub).to.have.been.calledOnceWith('https://api.github.com/users/IvanGerman/repos');
        done();
      })
      .catch(done);
  })
})
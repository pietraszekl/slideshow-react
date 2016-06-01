var mocha = require('mocha');
var chai = require('chai');
import {assert} from 'chai';

// test.js - for testing purpose only to make sure chai and mocha are runing ok
describe('Array Test', function(){
  describe('#indexOf()', function(){
    it('should return -1 when the value is not present', function(){
      assert.equal(-1, [1,2,3].indexOf(5));
      assert.equal(-1, [1,2,3].indexOf(0));
    });
  });
});

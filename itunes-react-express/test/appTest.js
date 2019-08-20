const assert = require('chai').assert;
const app = require('../app');
const express = require('express');

  describe('app', function(){
    it('should be callable', function(){
    const app = express();
    assert.equal(typeof app, 'function');
  });
  });  
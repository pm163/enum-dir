var assert = require('assert');

describe('Constructor', function() {

  describe('require', function() {
    it('should load library', function() {
      const EnumDir = require("../index.js");
      assert.notEqual(EnumDir, undefined);
    });
  });

  const EnumDir = require("../index.js");
  describe('constructor', function() {
    it('should return object', function() {
      let obj = new EnumDir();
      assert.notEqual(obj, undefined);
      assert.notEqual(obj, null);
    });
  });

  describe('missing new', function() {
    it('should throw without new', function() {      
      assert.throws(()=>{
        let obj = EnumDir();
      });
    });
  });  

});
'use strict'
const fs = require('fs');

module.exports = function EnumDir() {
  if (!this) throw "Error: new before EnumDir() missing.";
  this.__proto__ = fs;

}

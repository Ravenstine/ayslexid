'use strict';

const { assert }  = require('chai'),
        ayslexid  = require('../index.js'),
        plaintext = 'There were a king with a large jaw and a queen with a plain face, on the throne of England; there were a king with a large jaw and a queen with a fair face, on the throne of France. In both countries it was clearer than crystal to the lords of the State preserves of loaves and fishes, that things in general were settled for ever.',
        cryptext  = ayslexid(plaintext);

describe('ayslexid', function(){
  it('alters text while preserving length', function(){
    assert.notEqual(plaintext, cryptext);
    assert.equal(plaintext.length, cryptext.length);
  });
  it('recovers the original text from the scrambled text', function(){
    assert.equal(ayslexid(cryptext), plaintext);
  });
});
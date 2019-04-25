// const { assert } = require('chai');  // Using Assert style
// const { should } = require('chai');  // Using Should style
// should();  // Modifies `Object.prototype`

// const { expect, use } = require('chai');  // Creates local variables `expect` and `use`; useful for plugin use


const assert = require('assert');



describe('hooks', function () {
  before(function () {
    // runs before all tests in this block
  });

  after(function () {
    // runs after all tests in this block
  });

  beforeEach(function () {
    // runs before each test in this block
  });

  afterEach(function () {
    // runs after each test in this block
  });

  // test cases
  describe('Array', function () {
    describe('#indexOf()', function () {
      it('should return -1 when the value is not present', function () {
        assert.equal([1, 2, 3].indexOf(4), -1);
      });
    });
  });


  describe('Array', function () {
    describe('#indexOf()', function () {
      it('should return -1 when the value is not present', function () {
        assert.equal([1, 2, 3].indexOf(5), -1);
        assert.equal([1, 2, 3].indexOf(0), -1);
      });
    });
  });
});
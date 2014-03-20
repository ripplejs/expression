var assert = require('assert');
var Expression = require('expression');

describe('expression', function(){

  it('should execute a simple expression', function(){
    var exp = new Expression('3 + 4');
    var result = exp.exec();
    assert(result === 7);
  })

  it('should execute an expression with a context', function(){
    var exp = new Expression("one");
    var result = exp.exec({
      one: 'world'
    });
    assert(result === "world");
  })

  it('should execute an expression with a context with multiple variables', function(){
    var exp = new Expression("one + two");
    var result = exp.exec({
      one: 1,
      two: 2
    });
    assert(result === 3);
  })

  it('should execute functions within an expression', function(){
    var exp = new Expression("utils.square(number)");
    var result = exp.exec({
      utils: {
        square: function(val) {
          return val * val;
        }
      },
      number: 2
    });
    assert(result === 4);
  })

  it('should work with properties in any order', function(){
    var exp = new Expression("one + two");
    var result = exp.exec({
      two: 1,
      one: 2
    });
    assert(result === 3);
  })

  it('should work with multiple calls to properties', function(){
    var exp = new Expression("one + (two * one)");
    var result = exp.exec({
      two: 10,
      one: 2
    });
    assert(result === 22);
  })

  it('should perform basic math', function(){
    var exp = new Expression("360 * i / minor.length");
    var result = exp.exec({
      minor: Array(10),
      i: 1
    });
    assert(result === 36);
  })

  it('should accept a context', function () {
    var context = {
      one: 1,
      two: 2
    };
    var exp = new Expression("this.one + this.two");
    var result = exp.exec(null, context);
    assert(result === 3);
  });

  it('should convert to a string', function () {
    var exp = new Expression("this.one + this.two");
    assert(exp.toString() === "this.one + this.two");
  });

})
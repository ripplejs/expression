var props = require('props');
var unique = require('uniq');
var cache = {};

function Expression(str) {
  this.props = unique(props(str));
  this.fn = compile(str, this.props);
}

Expression.prototype.exec = function(obj){
  var args = obj ? values(obj, this.props) : [];
  return this.fn.apply(null, args);
};

function values(obj, keys) {
  return keys.map(function(key){
    return obj[key];
  });
}

function compile(str, props){
  if(cache[str]) return cache[str];
  var args = props.slice();
  args.push('return ' + str);
  var fn = Function.apply(null, args);
  cache[str] = fn;
  return fn;
}

module.exports = Expression;
var Stack = function() {
  this.storage = {};
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
};

Stack.prototype.push = function(value) {
  var nextKey = Object.keys(this.storage).length;
  this.storage[nextKey] = value;
};

Stack.prototype.pop = function() {
  var last = Object.keys(this.storage).length - 1;
  var retVal = this.storage[last];
  delete this.storage[last];
  return retVal;
};

Stack.prototype.size = function() {
  return Object.keys(this.storage).length;
};
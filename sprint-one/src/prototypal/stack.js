var Stack = function() {

  var newStack = Object.create(stackMethods);
  newStack.storage = {};

  return newStack;
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
};

var stackMethods = {};

stackMethods.push = function(value) {
  var storage = this.storage;
  var nextKey = Object.keys(storage).length;
  storage[nextKey] = value;
};

stackMethods.pop = function() {
  var storage = this.storage;
  var last = Object.values(storage).length - 1;
  var retVal = storage[last];
  delete storage[last];
  return retVal;
};

stackMethods.size = function() {
  return Object.values(this.storage).length;
};




var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var newStack = {};
  newStack.storage = {};
  //by extending the methods to newStack, newStack is now accessed by th1s when it invokes the methods
  _.extend(newStack, stackMethods);

  return newStack;
};

var stackMethods = {};

stackMethods.push = function(value) {
  var key = Object.keys(this.storage).length; //finds the length of the storage object to identify next key (0)
  this.storage[key] = value; //Store value at last key (0)
};

stackMethods.pop = function() {
  var keys = Object.keys(this.storage);
  //identifys the last key, and then uses that key to access the property in storage
  var lastKey = keys[keys.length - 1];
  //stores the value, deletes it from the object, and then returns it
  var retVal = this.storage[lastKey];
  delete this.storage[lastKey];
  return retVal;
};

stackMethods.size = function() {
  //returns size based on the number of keys
  return Object.keys(this.storage).length;
};

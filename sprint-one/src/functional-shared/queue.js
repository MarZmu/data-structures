var Queue = function() {
  //creates an object which will be given all the shared methods.
  var newQueue = {storage: {}};
  _.extend(newQueue, queueMethods);

  return newQueue;
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
};

queueMethods = {
};

queueMethods.enqueue = function(value) {
  //newQueue will be calling these methods and is specified by 'this' keyword
  var keys = Object.keys(this.storage);
  var nextKey = keys[keys.length - 1] + 1 || 0;
  this.storage[nextKey] = value;
};

queueMethods.dequeue = function() {
  var keys = Object.keys(this.storage);
  var firstKey = keys[0];
  var retVal = this.storage[firstKey];
  delete this.storage[firstKey];
  return retVal;
};

queueMethods.size = function() {
  return Object.keys(this.storage).length;
};

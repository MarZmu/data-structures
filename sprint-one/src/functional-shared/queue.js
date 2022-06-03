var Queue = function() {
  //creates an object which will be given all the shared methods.
  var newQueue = {};
  newQueue.storage = {};
  _.extend(newQueue, queueMethods);

  return newQueue;
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
};

queueMethods = {
};

queueMethods.enqueue = function(value) {
  //newQueue will be calling these methods and is specified by 'this' keyword
  var nextKey = Object.keys(this.storage).length;
  this.storage[nextKey] = value;
};

queueMethods.dequeue = function() {
  var retVal = this.storage[0];
  delete this.storage[0];
  //fix the offset in numeric keys
  if (!this.storage[0] && Object.keys(this.storage).length) {
    var newStorage = {};
    for (var i = 0; i < this.size(); i++) {
      newStorage[i] = Object.values(this.storage)[i];
    }
    this.storage = newStorage;
  }
  return retVal;
};

queueMethods.size = function() {
  return Object.entries(this.storage).length;
};

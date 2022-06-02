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
  var nextKey = Number(keys[keys.length - 1]) + 1 || 0;
  this.storage[nextKey] = value;
  if (!this.storage[0]) {
    var newStorage = {};
    for (var i = 0; i < this.size(); i++) {
      newStorage[i] = Object.values(this.storage)[i];
      console.log(newStorage, this.storage);
    }
    this.storage = newStorage;
  }
};

queueMethods.dequeue = function() {
  var retVal = this.storage[0];
  delete this.storage[0];
  return retVal;
};

queueMethods.size = function() {
  return Object.entries(this.storage).length;
};

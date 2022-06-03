var Queue = function() {
  var queue = Object.create(queueMethods);
  queue.storage = {};
  return queue;
};

var queueMethods = {};


queueMethods.enqueue = function(value) {
  var keys = Object.keys(this.storage);
  var nextKey = Number(keys[keys.length - 1]) + 1 || 0;
  this.storage[nextKey] = value;
  if (!this.storage[0]) {
    var newStorage = {};
    for (var i = 0; i < this.size(); i++) {
      newStorage[i] = Object.values(this.storage)[i];
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
var Queue = function() {
  var queue = Object.create(queueMethods);
  queue.storage = {};
  return queue;
};

var queueMethods = {};

queueMethods.enqueue = function(value) {
  var nextKey = Object.keys(this.storage).length;
  this.storage[nextKey] = value;
};

queueMethods.dequeue = function() {
  var retVal = this.storage[0];
  delete this.storage[0];
  if (!this.storage[0] && Object.keys(this.storage).length !== 0) {
    var newStorage = {};
    for (let i = 0; i < this.size(); i++) {
      newStorage[i] = Object.values(this.storage)[i];
    }
    this.storage = newStorage;
  }
  return retVal;
};

queueMethods.size = function() {
  return Object.entries(this.storage).length;
};
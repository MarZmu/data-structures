var Queue = function() {
  this.storage = {};
};

Queue.prototype.enqueue = function(value) {
  var nextKey = Object.keys(this.storage).length;
  this.storage[nextKey] = value;
};

Queue.prototype.dequeue = function() {
  var retVal = this.storage[0];
  delete this.storage[0];

  var values = Object.values(this.storage);
  if (!this.storage[0] && values) {
    var newStorage = {};
    for (let i = 0; i < this.size(); i++) {
      newStorage[i] = values[i];
    }
  }
  this.storage = newStorage;
  return retVal;
};

Queue.prototype.size = function() {
  return Object.keys(this.storage).length;
};
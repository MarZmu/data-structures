class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.storage = {};
  }

  enqueue(value) {
    var nextKey = Object.keys(this.storage).length;
    this.storage[nextKey] = value;
  }

  dequeue() {
    var retVal = this.storage[0];
    delete this.storage[0];

    var newStorage = {};
    for (let i = 0; i < this.size(); i++) {
      newStorage[i] = Object.values(this.storage)[i];
    }
    this.storage = newStorage;
    return retVal;
  }

  size() {
    return Object.keys(this.storage).length;
  }
}

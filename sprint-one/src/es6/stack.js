class Stack {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.storage = {};
  }

  push(value) {
    var nextKey = Object.keys(this.storage).length;
    this.storage[nextKey] = value;
  }

  pop() {
    var last = Object.keys(this.storage).length - 1;
    var retVal = this.storage[last];
    delete this.storage[last];
    return retVal;
  }

  size() {
    return Object.keys(this.storage).length;
  }
}
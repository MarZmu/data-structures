var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below

  someInstance.enqueue = function(value) {
    var key = Object.keys(storage).length;
    storage[key] = value;
    console.log(key);
  };

  someInstance.dequeue = function() {
    var first = Object.keys(storage)[0];
    var firstProp = storage[first];
    delete storage[first];
    return firstProp;
  };

  someInstance.size = function() {
    return Object.keys(storage).length;
  };

  return someInstance;
};

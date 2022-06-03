var Queue = function() {
  //used to house the methods associated with a queue object
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  // Implement the methods below

  someInstance.enqueue = function(value) {
    //uses keys function to identify next numeric key to add value at
    var key = Object.keys(storage).length;
    storage[key] = value;
  };

  someInstance.dequeue = function() {
    var retVal = storage[0];
    delete storage[0];
    //fix the post-deletion offset of numeric keys
    if (!storage[0]) {
      var newStorage = {};
      for (var i = 0; i < someInstance.size(); i++) {
        newStorage[i] = Object.values(storage)[i];
      }
      storage = newStorage;
    }
    return retVal;
  };

  someInstance.size = function() {
    //returns the length of an array made from Object properties
    return Object.entries(storage).length;
  };

  return someInstance;
};

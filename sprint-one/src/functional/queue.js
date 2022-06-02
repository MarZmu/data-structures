var Queue = function() {
  //used to house the methods associated with a queue object
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  // Implement the methods below

  someInstance.enqueue = function(value) {
    //uses keys function to identify next numeric key to add value at
    var currentKeys = Object.keys(storage);
    var key = Number(currentKeys[currentKeys.length - 1]) + 1 || 0;
    storage[key] = value;

    //* ADDS TIME COMPLEXITY BUT KEEPS KEYS 0-INDEXED */
    // var newStorage = {};
    // for (var i = 0; i < this.size(); i++) {
    //   newStorage[i] = Object.values(storage)[i];
    // }
    // storage = newStorage;
  };

  someInstance.dequeue = function() {
    /* if used 0-index method */
    // var retVal = storage[0];
    // delete storage[0];
    // return retVal;

    //stores the last value
    var first = Object.keys(storage)[0];
    var firstProp = storage[first];
    //deletes property, the returns stored value
    delete storage[first];
    return firstProp;
  };

  someInstance.size = function() {
    //returns the length of an array made from Object properties
    return Object.entries(storage).length;
  };

  return someInstance;
};

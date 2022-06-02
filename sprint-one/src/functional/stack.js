var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  someInstance.push = function(value) {
    //uses key function to determine numeric key at which to add the value
    var key = Object.keys(storage).length;
    storage[key] = value;
  };

  someInstance.pop = function() {
    //identifies last property and stores it
    var last = Object.keys(storage).length - 1;
    var retVal = storage[last];
    //deletes property and returns value
    delete storage[last];
    return retVal;
  };

  someInstance.size = function() {
    //returns the length of array made from storage keys
    return Object.keys(storage).length;
  };

  return someInstance;
};

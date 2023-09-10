/**
 * @param {Function} fn
 * @return {Array}
 */
Array.prototype.groupBy = function(fn) {
  // Reduce the array into a single object
  return this.reduce((grouped, item) => {
    // Apply the provided callback function to get the key
    const key = fn(item);
    
    // If the key doesn't exist in the grouped object, create a new array for it
    if (!grouped[key]) {
      grouped[key] = [];
    }
    
    // Push the current item to the array associated with the key
    grouped[key].push(item);
    
    // Return the updated grouped object for the next iteration
    return grouped;
  }, {});
};


/**
 * [1,2,3].groupBy(String) // {"1":[1],"2":[2],"3":[3]}
 */

// Read more
// https://leetcode.com/problems/group-by/solutions/3568048/groupby-detailed-explanation-easy/?envType=study-plan-v2&envId=30-days-of-javascript
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce

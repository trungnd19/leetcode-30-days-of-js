type Fn = (...params: any) => any;

function memoize(fn: Fn): Fn {
  // Create an empty object called cache to store previously computed results.
  const cache = new Map();
  return function (...args) {
    // Use JSON.stringify() to convert the arguments into a string to use as a key for the cache object
    let key = JSON.stringify(args);

    if (cache.has(key)) {
      // Check if the key already exists in the cache object. If it does, return the cached value.
      return cache.get(key);
    } else {
      // If the key doesn't exist in the cache, call the original function fn using and store the result in the cache object using the key as the property name.
      let ans = fn(...args);
      cache.set(key, ans);
      return ans;
    }
  };
}

/**
 * let callCount = 0;
 * const memoizedFn = memoize(function (a, b) {
 *	 callCount += 1;
 *   return a + b;
 * })
 * memoizedFn(2, 3) // 5
 * memoizedFn(2, 3) // 5
 * console.log(callCount) // 1
 */


/* Time complexity: memoized function depends on the original function being memoized, and can range from O(1) to O(n) to O(2^n).

Space complexity:
O(n), where n is the number of unique inputs to the function. */

/* Read more 
https://leetcode.com/problems/memoize/solutions/3517845/learn-memoized-function-caching-js-typescript-day-9/?envType=study-plan-v2&envId=30-days-of-javascript
*/

/* JSON.stringify vs toString */
// for an object say

// obj = { a: 'a', '1': 1 }
// obj.toString() gives

// "[object Object]"
// JSON.stringify(obj) gives

// "{"1":1,"a":"a"}"

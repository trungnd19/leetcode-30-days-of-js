/*
* Time complexity: O(n)
* Space complexity: O(1)
**/

class ArrayWrapper {
  nums: number[];
  constructor(nums: number[]) {
    this.nums = nums;
  }

  valueOf() {
    return this.nums.reduce((previous, current) => {
      return previous + current;
    }, 0);
  }

  toString() {
    return `[${this.nums}]`
  }
}

// Example:
// const obj1 = new ArrayWrapper([1, 2]);
// const obj2 = new ArrayWrapper([3, 4]);
// console.log(obj1 + obj2); // 10
// console.log(String(obj1)); // "[1,2]"
// console.log(String(obj2)); // "[3,4]"

// Read more at:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/toString
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/valueOf

// Things I learnt:
// 1. The toString() method of Object instances returns a string representing this object. 
// This method is meant to be overridden by derived objects for custom type conversion logic.

// 2. The valueOf() method of Object instances converts the this value to an object. 
// This method is meant to be overridden by derived objects for custom type conversion logic.
// The Object.prototype.valueOf() base implementation is deliberately useless: by returning an object, its return value will never be used by any primitive conversion algorithm. Many built-in objects override this method to return an appropriate primitive value. When you create a custom object,
// you can override valueOf() to call a custom method, so that your custom object can be converted to a primitive value.
// This method is called in priority by numeric conversion and primitive conversion, but string conversion calls toString() in priority, 
// and toString() is very likely to return a string value

function cancellable(fn: Function, args: any[], t: number): Function {
  // Inside the cancellable function, we use setTimeout to schedule the execution of fn after the specified timeout t.
  const timeoutId = setTimeout(function () {
    fn.apply(this, args)    // The fn function is called using the apply method to pass the args array as arguments. Additionally the setTimeout function returns a timer ID, which is stored in the timeoutId variable.
  }, t)

  // After that a cancelFn function is defined, which calls clearTimeout with the timeoutId to cancel the execution of the delayed function.
  const cancelFn = () => {
    clearTimeout(timeoutId)
  }

  // Finally, the cancelFn function is returned from the cancellable function.
  return cancelFn
};

// Read more
// https://leetcode.com/problems/timeout-cancellation/editorial/?envType=study-plan-v2&envId=30-days-of-javascript

// Complexity
// Time complexity: O(1)
// Space complexity: O(1)

type Fn = (accum: number, curr: number) => number

function reduce(nums: number[], fn: Fn, init: number): number {
  if(!nums.length) {
    return init
  };

  let acc = init;

  nums.forEach((num) => {
    acc = fn(acc, num)
  })

  return acc;
};

// Read more
# https://leetcode.com/problems/array-reduce-transformation/solutions/3506475/5-diff-method-solution-in-typescript-and-js-learn-js-with-question-day-6/

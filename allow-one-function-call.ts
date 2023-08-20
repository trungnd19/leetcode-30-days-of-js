type Fn = (...args: any[]) => any;

function once(fn: Fn): Fn {
  let call = 0;
  return function (...args) {
    call++
    if(call === 1) {
      return fn(...args);
    }
    return undefined
  };
}

// What this means is that an inner function always has access to the vars and parameters of its outer function, even after the outer function has returned.

// let fn = (a,b,c) => (a + b + c)
// let onceFn = once(fn)
 
// console.log(onceFn(1,2,3)); // 6
// console.log(onceFn(2,3,6)); // returns undefined without calling fn

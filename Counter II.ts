type ReturnObj = {
  increment: () => number,
  decrement: () => number,
  reset: () => number,
}

function createCounter(init: number): ReturnObj {
  let originalValue = init;
  return {
      increment: function() {
        // If you write like this: return originalValue++
        // => return
        originalValue++
        return originalValue;
      },
      decrement: function() {
        // If you write like this: return originalValue--
        // => return 5
        originalValue--
        return originalValue;
      },
      reset: function() {
        originalValue = init
        return originalValue;
      }
  }
};

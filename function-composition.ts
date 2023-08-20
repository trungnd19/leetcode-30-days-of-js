type F = (x: number) => number;

function compose(functions: F[]): F {
	return function(x) {
    let result = x;

    for(let i = functions.length - 1; i >= 0; i--) {
      result = functions[i](result)
      // console.log(result)
    }

    // console.log(result)

    return result
  }
};

// Read more
# https://leetcode.com/problems/function-composition/solutions/3511649/2629-function-composition-level-up-your-javascript-skills/

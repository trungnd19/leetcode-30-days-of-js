// Time complexity: O(n), where n is the length of the input array.
// Space complexity: O(n) as well.

function filter(arr: number[], fn: (n: number, i: number) => any): number[] {
  const transformedArr: number[] = [];
  arr.forEach((number, index) => {
    if (fn(number, index)) {
      transformedArr.push(number);
    }
  });

  return transformedArr;
}

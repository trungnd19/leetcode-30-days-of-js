/**
 * 2635. Apply Transform Over Each Element in Array
 * TC and SC: O(n)
 */

function map(arr: number[], fn: (n: number, i: number) => number): number[] {
  const transformedArr: number[] = [];

  arr.forEach((_, i) => {
    transformedArr[i] = fn(arr[i], i);
  });

  return transformedArr;
}

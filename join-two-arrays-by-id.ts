function join(arr1: any[], arr2: any[]): any[] {
  // Create a new array containing items of both arr1 and arr2
  const combinedArray = arr1.concat(arr2);
  // Create a object to serve as a container to store merged object, based on object's id
  const merged: { [key: number]: any } = {};

  // If obj's id doesn't exist in "merged" obj => add a new key-value pair, using object's id as a key
  // If obj's id exists in "merged" obj => overwrite existed object
  combinedArray.forEach((obj) => {
    const id = obj.id;
    if (!merged[id]) {
      merged[id] = { ...obj }; // 1: {"id": 1, "x": 2, "y": 3}
    } else {
      merged[id] = { ...merged[id], ...obj };
    }
  });

  // We will return an array => using Object.values to extract an array of values
  const joinedArray = Object.values(merged);
  // Sort by id ascending
  joinedArray.sort((a, b) => a.id - b.id);

  return joinedArray;
};

// Complexity
# Time complexity: The time complexity is O(nlogn) due to the sort function, where nnn is the total number of elements in the combined array (length of arr1 plus length of arr2). The iteration and merging process also contributes to the time complexity, but it is dominated by the sorting operation.
# Space complexity: The space complexity is O(n), where nnn is the total number of elements in the map.

// Example
// Example 1:
// Input:
// arr1 = [
//     {"id": 1, "x": 2, "y": 3},
//     {"id": 2, "x": 3, "y": 6}
// ],
// arr2 = [
//     {"id": 2, "x": 10, "y": 20},
//     {"id": 3, "x": 0, "y": 0}
// ]
// Output:
// [
//     {"id": 1, "x": 2, "y": 3},
//     {"id": 2, "x": 10, "y": 20},
//     {"id": 3, "x": 0, "y": 0}
// ]
// Explanation: The two objects with id=1 and id=3 are included in the result array without modifiction. The two objects with id=2 are merged together. The keys from arr2 override the values in arr1.

// Example 2:
// Input:
// arr1 = [
//     {"id": 1, "b": {"b": 94},"v": [4, 3], "y": 48}
// ]
// arr2 = [
//     {"id": 1, "b": {"c": 84}, "v": [1, 3]}
// ]
// Output: [
//     {"id": 1, "b": {"c": 84}, "v": [1, 3], "y": 48}
// ]

// Read more
# https://leetcode.com/problems/join-two-arrays-by-id/editorial/?envType=study-plan-v2&envId=30-days-of-javascript

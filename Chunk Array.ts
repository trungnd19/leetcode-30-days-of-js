function chunk(arr: any[], size: number): any[][] {
  if (!arr.length) {
    return [];
  }

  // Case: size 1
  else if (size === 1) {
    const newArr = [];
    arr.forEach((item) => {
      newArr.push([item]);
    });
    return newArr;
  } else {
    const cloneArr = [...arr];
    const emptyArr = [];

    /**Wrong way:  
    This is because iterating incrementally through the array, when you splice it, the array is modified in place, so the items are "shifted" and you end up skipping the iteration of some. 
    https://www.w3docs.com/snippets/javascript/how-to-loop-through-array-and-remove-items-without-breaking-the-for-loop.html
    */
    // Example: [1, 2, 3, 4, 5, 6], size = 2
    cloneArr.forEach((item, index) => {
      console.log(item) // 1, 4
      const removedItem = cloneArr.splice(0, size);
      emptyArr.push(removedItem);
    });

    // while (cloneArr.length >= 1) {
    //   const removedItem = cloneArr.splice(0, size);
    //   emptyArr.push(removedItem);
    // }

    return emptyArr;
  }
}

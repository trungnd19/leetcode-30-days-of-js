async function addTwoPromises(promise1: Promise<number>, promise2: Promise<number>): Promise<number> {
  const allPromisesResolved = await Promise.all([promise1, promise2])

  return allPromisesResolved[0] + allPromisesResolved[1]
};

/**
 * addTwoPromises(Promise.resolve(2), Promise.resolve(2))
 *   .then(console.log); // 4
 */

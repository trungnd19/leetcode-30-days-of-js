// When using await keyword => wait for the resolved value
// When promise is rejected with a thrown error => you have to catch() or using try...catch as the rejected value is not pass to awaited variable

// Using async/await
// async function exampleAsync() {
//    console.log('Start');
//    await sleep(1000);
//    console.log('End');
// }

// // Using plain promises
// function examplePromise() {
//    console.log('Start');
//    return sleep(1000).then(function() {
//        console.log('End');
//    });
// }

async function sleep(millis: number): Promise<void> {
    return new Promise((resolve) => setTimeout(resolve, millis))
}


/** 
 * let t = Date.now()
 * sleep(100).then(() => console.log(Date.now() - t)) // 100
 */

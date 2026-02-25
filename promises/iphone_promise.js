// creating a promise

function behaviorPromise(isWellBehaved) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (isWellBehaved) {
        resolve("You behaved well! Here's your new phone.");
      } else {
        reject("You did not behave well, so no phone this time.");
      }
    }, 5000);
  });
}


// behaviorPromise(false)
// .then(iphone => {
//     console.log("mother's promise fulfilled: " + iphone);
// })
 
// .catch(error => {
//     console.log("mother's promise failed: " + error);
// })

async function checkPromise() {
  try {
    const message = await behaviorPromise(true); // change to false to test
    console.log("Mother's promise fulfilled:", message);
  } catch (error) {
    console.log("Mother's promise failed:", error);
  } finally {
    console.log("Promise has been settled.");
  }
}

checkPromise();
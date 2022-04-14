// These are just snippets

// Code Start : - JS implementaion of sleep function

const sleep = (milliseconds) => {
    return new Promise(resolve => setTimeout(resolve, milliseconds))
}

async function demo() {
    for (let i = 1; i < 10; i++) {
        action();
        await sleep(1000); 
        // 1 second delay
        console.log(i);
    }
  }

// Code end

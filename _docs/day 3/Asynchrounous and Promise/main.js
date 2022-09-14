function testSync() {
    try {
        const result = getRandomNumber();
        console.log(result);
    }
    catch (err) {
        console.log(err.message);
    }
}

// Synchronous Function
function getRandomNumber() {
    const num = Math.floor(Math.random() * 100);
    if (Math.random() > 0.66) throw new Error("Demo for some crash...");
    return num;
}

// --------------------------------------------------

function testAsync() {
    getRandomNumberAfterDelay(
        200,
        result => console.log(result),
        err => console.log(err.message)
    );
}

function getRandomNumberAfterDelay(limit, successCallback, errorCallback) {
    setTimeout(() => {
        try {
            const num = Math.floor(Math.random() * limit);
            if (Math.random() > 0.66) throw new Error("Demo for some crash...");
            successCallback(num);
        }
        catch (err) {
            errorCallback(err);
        }
    }, 1000);
}

function testAsyncUsingPromise() {
    getRandomNumberAfterDelay2(200)
        .then(result => console.log(result))
        .catch(err => console.log(err.message));
}

function getRandomNumberAfterDelay2(limit) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            try {
                const num = Math.floor(Math.random() * limit);
                if (Math.random() > 0.66) throw new Error("Demo for some crash...");
                resolve(num);
            }
            catch (err) {
                reject(err);
            }
        }, 1000);
    });
}

// ----------------------------------------------------

// Callback Hell!
function testCallbackHell() {

    getRandomNumberAfterDelay2(1000)
        .then(result1 => {
            console.log("Result1: " + result1);

            getRandomNumberAfterDelay2(result1)
                .then(result2 => {
                    console.log("Result2: " + result2);

                    getRandomNumberAfterDelay2(result2)
                        .then(result3 => {
                            console.log("Result3: " + result3);
                        })
                        .catch(err => console.log(err.message));

                })
                .catch(err => console.log(err.message));

        })
        .catch(err => console.log(err.message));
}

async function testAsyncAwait() {
    try {
        const result1 = await getRandomNumberAfterDelay2(1000);
        console.log("Result1: " + result1);

        const result2 = await getRandomNumberAfterDelay2(result1);
        console.log("Result2: " + result2);

        const result3 = await getRandomNumberAfterDelay2(result2);
        console.log("Result3: " + result3);
    }
    catch (err) {
        console.log(err.message);
    }
}
$(document).ready(function () {

    // Timing Out

    function message(text) {
        console.log(text);
    }

    message('This is a test');

    setTimeout(() => {
        message("Let's try this again.");
    }, 2000);

    getWords = () => {
        message('harder');
        setTimeout(() => {
            message('better');
            setTimeout(() => {
                message('faster');
                setTimeout(() => {
                    message('stronger');
                }, 1000);
            }, 2000);
        }, 3000);
    }

    getWords();

    // Callbacks and Recursion

    done = () => {
        console.log("Job's done!");
    }

    countdown = (num, callback) => {
        if (num > 0) {
            console.log(num);
            setTimeout(() => {
                countdown(num - 1, callback);
            }, 1000);
        } else {
            callback(); // evoke the function here...
        }
    }

    countdown(5, done); // ... not here, so it executes only after the countdown

    // Promises

    let lunchTime = true;

    orderMeSomeFood = () => {
        return new Promise((resolve, reject) => {

            if (lunchTime === true) {
                const myFavs = {
                    lunch: 'double cheeseburger',
                    drink: 'coke'
                }
                resolve(myFavs);
            } else {
                const nope = new Error("Nope!");
                reject(nope);
            }
        })
    }

    orderMeSomeFood()
    .then((successMessage) => {
        console.log(successMessage);
        })
    .catch((nope) => {
        console.log('Something went wrong.');
        console.log(nope);
        })
});
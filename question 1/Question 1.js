//Question 1

const mixedArray = ['PIZZA', 10, true, 25, false, 'Wings']; // demo input

const lowerCaseWords = (mixedArray) =>
    new Promise((resolve, reject) => {
        if (Array.isArray(mixedArray)) {
            const result = mixedArray
                .filter(item => typeof item === 'string')
                .map(str => str.toLowerCase());
            resolve(result);
        } else {
            reject('input is invalid please make sure provided input is an array');
        }
    });

lowerCaseWords(mixedArray)
    .then(data => console.log(data))
    .catch(err => console.error(err));


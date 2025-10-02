// Question 2

const resolvedPromise = () =>
    new Promise((resolve) =>
        setTimeout(() => resolve({ message: 'delayed success!' }), 500)
    );

const rejectedPromise = () =>
    new Promise((_, reject) =>
        setTimeout(() => reject({ error: 'delayed exception!' }), 500)
    );

resolvedPromise()
    .then((result) => console.log(result))
    .catch((error) => console.error(error));

rejectedPromise()
    .then((result) => console.log(result))
    .catch((error) => console.error(error));
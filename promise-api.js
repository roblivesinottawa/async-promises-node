// const p = Promise.resolve({ id: 1})
// p.then(result => console.log(result))

// const p = Promise.reject(new Error('reason for rejection...'))
// p.catch(error => console.log(error))

const p1 = new Promise((resolve) => {
    setTimeout(() => {
        console.log('async operation 1...')
        resolve(10 * 10)
        // reject(new Error('something failed...'))
    }, 2000)
})
const p2 = new Promise((resolve) => {
    setTimeout(() => {
        console.log('async operation 2...')
        resolve(100 * 100)
    }, 3000)
})

// Promise.all([p1, p2])
//     .then(outcome => console.log(outcome))
//     .catch(err => console.log('Error', err.message))

Promise.race([p1, p2])
    .then(outcome => console.log(outcome))
    .catch(err => console.log('Error', err.message))

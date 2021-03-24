
const p = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(10 * 10)
        reject(new Error('error'))
    }, 2000)
    
});

p
    .then(result => console.log('result: ', result))
    .catch(err => console.log('Error: ', err.message))
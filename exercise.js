
async function notifyCustomer() {
  const customer = await getCustomer(1)
  console.log('Customer: ', customer);
  if (customer.isGold) {
      const movies = await getTopMovies()
      console.log('Top movies: ', movies);
      await sendEmail(customer.email, movies)
      console.log('Email sent...')}
}
notifyCustomer()


function getCustomer(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ 
        id: 1, 
        name: 'Robson Trajano', 
        isGold: true, 
        email: 'email@email.com' 
      });
    }, 4000);
  })
}

function getTopMovies() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(['Avengers Endgame', 'Avengers Infinity War']);
    }, 4000);
  })
}

function sendEmail(email, movies) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, 4000);
  })
 
}
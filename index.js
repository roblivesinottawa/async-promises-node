console.log('before')
getUser(1, getRepos)
console.log('after')

function getRepos(user) {
    getRepos(user.gitHubUserName, getCommits)
}
function getCommits(repos) {
    getCommits(repo, displayCommits)
}
function displayCommits(commits) {
    console.log(commits)
}

// create a function to get one user
function getUser(id, callback) {
    setTimeout(() => {
        console.log('reading a user from a database...')
        callback({ id: id, gitHubUserName: 'rob' })
    }, 2000)
    
}

// create a function to get the repositories
function getRepos(username, callback) {
    setTimeout(() => {
        console.log('getting repos from github...')
        callback(['repo1', 'repo2', 'repo3'])
    }, 2000)
}

function getCommits(repo, callback) {
    setTimeout(() => {
      console.log('Calling GitHub API...');
      callback(['commit']);
    }, 2000);
  }


var fs = require('fs')
var GitHubApi = require('github')

var github = new GitHubApi({
  version: '3.0.0'
})

// Delete everything in humans.txt
fs.unlink('humans.txt', function (error) {
  if (error) {
    return console.error(error)
  }

  console.info('Deleted humans.txt successfully')
})

// Get list of contributors from the Github API
github.repos.getContributors({
  user: 'yourfirstpr',
  repo: 'yourfirstpr.github.io'
},
  function (error, response) {
    if (error) {
      return console.error(error)
    }

    var contributorList = []

    // Add the name and GitHub URL of each contributor to a list
    response.forEach(function (contributor) {
      contributorList.push(contributor.login + ' - ' + contributor.html_url)
    })

    // Push contributors to humans.txt
    fs.writeFile('humans.txt', 'CONTRIBUTORS\n')
    contributorList.forEach(function (contributor) {
      fs.appendFile('humans.txt', contributor + '\n', function (error) {
        if (error) {
          return console.error(error)
        }
      })
    })

    console.info('Successfully wrote contributors to humans.txt')
  })

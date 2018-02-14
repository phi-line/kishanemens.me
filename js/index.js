const base = "https://api.github.com/users/phi-line/";
const url = new URL("repos", base), params = {sort: 'pushed', direction: 'desc'}
Object.keys(params).forEach(key => url.searchParams.append(key, params[key]))

document.addEventListener('DOMContentLoaded', function(){
    fetch(url, {
    })
    .then(resp => resp.json())
    .then(data => {
      return {commits: data[0].commits_url.split('{')[0], repo: data[0]} // fight me
    })
    .then(ret => {
      fetch(ret.commits, {
      })
      .then(resp => resp.json())
      .then(commits => {
        updateCommitCard(commits[0], ret.repo)
      })
    })
    .catch(error => {
      console.log(error);
    });
}, false);


function toggleModal(state) {
    let modal = getElement('resume-modal').classList;
    state ? modal.add('is-active') : modal.remove('is-active');
}

function updateCommitCard(commit, repo) {
  getElement('commit-name').innerHTML = repo.name;
  getElement('commit-name').setAttribute('href', repo.html_url);
  // getElement('commit-img').setAttribute('src', commit.author.avatar_url);
  getElement('commit-date').innerHTML = moment(commit.commit.author.date).fromNow();
  getElement('commit-msg').innerHTML = commit.commit.message;
}

function getElement(id){
  return document.getElementById(id);
}

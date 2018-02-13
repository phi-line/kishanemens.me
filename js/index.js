var modal;
document.addEventListener('DOMContentLoaded', function(){
    var modal = document.querySelector('#resume-modal').classList;
}, false);


function toggleModal(state) {
    state ? modal.add('is-active') : modal.remove('is-active');
}

const base = "https://api.github.com/users/phi-line/";
const url = new URL("repos", base), params = {sort: 'pushed', direction: 'desc'}
Object.keys(params).forEach(key => url.searchParams.append(key, params[key]))

fetch(url, {

  })
  .then(resp => resp.json())
  .then(data => {
    console.log(data)
  })
  .catch(function(error) {
    console.log(error);
  });

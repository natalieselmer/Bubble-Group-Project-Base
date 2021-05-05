async function windowActions() {
  console.log('loaded window');

  const name = document.querySelector('');
  const form = document.querySelector('#recordSubmit');
  
  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    console.info('submitted form', event.target);

    const post = await fetch('/api/player', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ player_name: name.value })
    });
  });
}















/* async function windowActions() {
  const request = await fetch('/api/stats');
  stats= await request.json();
  console.log(stats)
}
window.onload = windowActions;
console.log('window loaded');

//adding a player record
form.addEventListener('submit', async (event) =>{
  event.preventDefault();
  const post = await fetch('/players', {
    method: 'POST',
    headers:{
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({player_name:name.value})
  });

});

async function actions() {
  console.log('loaded window')
  const form = document.querySelector('#player_name');

  form.addEventListener('submit')
} */
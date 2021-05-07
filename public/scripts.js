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

function findTeams(wordToMatch, teams) {
  return teams.filter((team) => {
    // here we need to figure out if the city or state matches what was searched
    const regex = new RegExp(wordToMatch, 'gi');
    return team.name.match(regex);
  });
}

function findPlayer(wordToMatch, players) {
  return players.filter((player) => {
    // here we need to figure out if the city or state matches what was searched
    const regex = new RegExp(wordToMatch, 'gi');
    return player.player_name.match(regex);
  });
}

async function search() {
  const response = await fetch('/api/player/');
  const players = await response.json();
  const team_response = await fetch('/api/teamname/');
  const teams = await team_response.json();
  const search_input = document.getElementById('search').value;
  console.log(search_input);
  const result_team = findTeams(search_input, teams);
  const result_player = findPlayer(search_input, players.data);
  let html = '';
  if (result_team.length != 0) {
    console.log(result_team);

    html = result_team.map((team) =>
    // Formats selected info
      `
          <li>
            <span class ="name"><b>Team Name: ${team.name}</b></span><br>
            
            <span class = "city">Team City: ${team.city}</span><br>
            
            <span class ="arena">Team Arena: ${team.arena}</span><br><br>
          </li>
          `).join(html);
  }
  if (result_player.length != 0) {
    console.log(result_player);
    html = result_player.map((player) =>
    // Formats selected info
      `
          <li>
            <span class ="restaurant"><b>Player Name: ${player.player_name}</b></span><br>
           
            <span class = "address">Player Points Per Game: ${player.ppg}</span><br>
            
            <span class ="zipcode">Player assists: ${player.assists}</span><br><br>
          </li>
          `).join(html);
  }
  if (result_player.length == 0 && result_team.length == 0) {
    html = `
          <li>
            No result found
          </li>
          `;
  }

  results.innerHTML = html;
}

const results = document.querySelector('.results');

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
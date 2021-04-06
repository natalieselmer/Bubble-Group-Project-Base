async function windowActions() {
  const request = await fetch('/api/player_stats');
  player_stats= await request.json();
  console.log(player_stats)
}
window.onload = windowActions;
console.log('window loaded');
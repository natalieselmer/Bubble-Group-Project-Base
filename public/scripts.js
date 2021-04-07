async function windowActions() {
  const request = await fetch('/api/stats');
  stats= await request.json();
  console.log(stats)
}
window.onload = windowActions;
console.log('window loaded');
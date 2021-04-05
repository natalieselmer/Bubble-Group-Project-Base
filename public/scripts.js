async function windowActions() {
  const request = await fetch('/api/bubble');
  bubble= await request.json();
  console.log(dining)
}
window.onload = windowActions;
console.log('window loaded');
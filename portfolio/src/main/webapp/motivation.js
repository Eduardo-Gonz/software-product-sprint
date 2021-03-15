async function showMotivation() {
  const responseFromServer = await fetch('/motivation');
  const motivationObj = await responseFromServer.json();

  const quote = motivationObj[Math.floor(Math.random() * motivationObj.length)];

  const dateContainer = document.getElementById('motivation-container');
  dateContainer.innerText = quote;
}
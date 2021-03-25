async function showMotivation() {
  const responseFromServer = await fetch('/motivation');
  const textFromResponse = await responseFromServer.text();

  const dateContainer = document.getElementById('motivation-container');
  dateContainer.innerText = textFromResponse;
  

  //Enable translation option
  document.getElementById('translate-option').style.display = "block";
}
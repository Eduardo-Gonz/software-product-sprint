async function translateText() {
  //Grab text and language code
  let text = document.getElementbyId('motivation-container').value;
  let languageCode = document.getElementbyId('language').value;

  const translateParams = new URLSearchParams();
  translateParams.append('text', text);
  translateParams.append('languageCode', languageCode);

  const responseFromServer = await fetch('/translate', {
      method: POST,
      body: translateParams
  });

  const translatedText = await responseFromServer.text();

  const motivationContainer = document.getElementById('motivation-container');
  motivationContainer.innerText = translatedText;
};
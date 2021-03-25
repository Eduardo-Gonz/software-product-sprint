async function translateText() {
  //Grab text and language code
  let text = document.getElementById('motivation-container').innerText;
  console.log(text);
  
  let languageCode = document.getElementById('language').value;

  const translateParams = new URLSearchParams();
  translateParams.append('text', text);
  translateParams.append('languageCode', languageCode);

  const responseFromServer = await fetch('/translate', {
      method: 'POST',
      body: translateParams
  });

  const translatedText = await responseFromServer.text();

  const motivationContainer = document.getElementById('motivation-container');
  motivationContainer.innerText = translatedText;
};
async function translateText() {
  const input = document.getElementById("inputText").value.trim();
  const from = document.getElementById("fromLang").value;
  const to = document.getElementById("toLang").value;
  const output = document.getElementById("outputText");

  if (!input) {
    output.value = "Please enter text to translate.";
  
    return;
  }

  output.value = "Translating...";

  const url=`https://api.mymemory.translated.net/get?q=${encodeURIComponent(
    input
  )}&langpair=${from}`
  try {
    const res = await fetch(url);
    const data = await res.json();

    const translated = data.responseData.translatedText;
    output.value = translated || "No translation found.";
  } catch (err) {
    console.error(err);
    output.value = "Error: Failed to fetch translation.";
  }
}

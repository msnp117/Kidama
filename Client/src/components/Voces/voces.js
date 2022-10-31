
export default function voces(decir) {
  var utterance = new SpeechSynthesisUtterance();
  utterance.text = decir; // texto
  utterance.voice = speechSynthesis.getVoices()[107]; //voz
  speechSynthesis.speak(utterance);
}

// VOCES DISPONIBLES :
speechSynthesis.getVoices();
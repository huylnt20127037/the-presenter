class AudioExtension {
     static readText = (text, onStart, onEnd) => {
          let utterance = new SpeechSynthesisUtterance();
          utterance.text = text;
          utterance.lang = "vi-VN";
          // utterance.voice = window.speechSynthesis.getVoices()[21]; // Choose a specific voice
          utterance.onstart = onStart
          utterance.onend = onEnd
          window.speechSynthesis.speak(utterance);
     }
     static stopReadingText = () => {
          window.speechSynthesis.cancel()
     }
}

export default AudioExtension
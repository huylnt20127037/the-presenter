class AudioExtension {
     static readText = async (utterance) => {
          window.speechSynthesis.speak(utterance);
          return new Promise((resolve) => {
               utterance.onend = resolve;
          });
     }
     static stopReadingText = () => {
          window.speechSynthesis.cancel()
     }
     static pauseReadingText = () => {
          window.speechSynthesis.pause()
     }
     static resumeReadingText = () => {
          window.speechSynthesis.resume()
     }
}

export default AudioExtension
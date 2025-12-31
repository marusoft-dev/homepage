import { ref } from 'vue';

export function useTyping(textToType: string, speed: number = 50) {
  const typedText = ref('');
  
  const start = () => {
    return new Promise<void>((resolve) => {
      let charIndex = 0;
      const intervalId = setInterval(() => {
        if (charIndex < textToType.length) {
          typedText.value += textToType.charAt(charIndex);
          charIndex++;
        } else {
          clearInterval(intervalId);
          resolve();
        }
      }, speed);
    });
  };

  return { typedText, start };
}

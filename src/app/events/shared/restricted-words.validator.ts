import { FormControl } from '@angular/forms';

export function restrictedWords(words: any) {
  return (control: FormControl): any => {
    if (!words) return null;

    let invalidWords = words
      .map((w: any) => (control.value.includes(w) ? w : null))
      .filter((w: any) => w != null);

    return invalidWords && invalidWords.length > 0
      ? { restrictedWords: invalidWords.join(', ') }
      : null;
  };
}

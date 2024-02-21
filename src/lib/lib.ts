import { miniDictionary } from "@/db/mini-db";

export function filterStringsBySuffix(arr: string[], suffixOne: string, suffixTwo: string): string[] {
  return arr.filter((s) => s.endsWith(suffixOne) || s.endsWith(suffixTwo))
}

export function getRandomNumber(max: number): number {
  return Math.floor(Math.random() * max);
}

function unsecuredCopyToClipboard(text: string) {
  const textArea = document.createElement("textarea");
  textArea.value = text;
  document.body.appendChild(textArea);
  textArea.focus();
  textArea.select();
  try {
    document.execCommand('copy');
  } catch (err) {
    console.error('Unable to copy to clipboard', err);
  }
  document.body.removeChild(textArea);
}

export function copyToClipboard(text: string): void {
  if (!navigator.clipboard) {
    unsecuredCopyToClipboard(text)
  } else {
    navigator.clipboard.writeText(text);
  }
}

export function getTargetPhrase() {
  const list = miniDictionary
  const countOfWords = list.length
  const targetIndex = getRandomNumber(countOfWords - 1)
  const targetWord = list[targetIndex]
  const targetPhrase = `Маркич - ${targetWord}${targetWord.endsWith('мар') ? 'кич' : 'ркич'}`
  return targetPhrase
}
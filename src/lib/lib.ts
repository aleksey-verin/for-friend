export function filterStringsBySuffix(arr: string[], suffixOne: string, suffixTwo: string): string[] {
  return arr.filter((s) => s.endsWith(suffixOne) || s.endsWith(suffixTwo))
}

export function getRandomNumber(max: number): number {
  return Math.floor(Math.random() * max);
}
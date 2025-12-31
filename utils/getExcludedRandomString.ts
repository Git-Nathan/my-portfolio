export function getExcludedRandomString(allStrings: string[], exclude: string): string {
  let newString = exclude;
  while (newString === exclude && allStrings.length > 1) {
    newString = allStrings[Math.floor(Math.random() * allStrings.length)];
  }
  return newString;
}

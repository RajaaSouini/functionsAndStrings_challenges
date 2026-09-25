let name = "abcdef";

function swap(text) {
  if (text.length === 0) return text;

  return text[text.length - 1] + swap(text.slice(1, text.length - 1)) + text[0];
}
console.log(swap(name));
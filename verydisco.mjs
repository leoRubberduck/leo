import { argv } from 'process';
const originalArgument = argv[2];
function makeVeryDisco(word) {
  const middle = Math.ceil(word.length / 2);
  const firstChunk = word.slice(0, middle);
  const secondChunk = word.slice(middle);
  return secondChunk + firstChunk;
}
function makeVeryDiscoSentence(sentence) {
  return sentence.split(/\s+/).map(makeVeryDisco).join(' ');
}
if (!originalArgument) {
  console.log('Please provide an argument');
} else if (typeof originalArgument !== 'string') {
  console.log('Please provide a string argument');
} else {
  const veryDiscoResult = makeVeryDiscoSentence(originalArgument);
  console.log(veryDiscoResult);
}
const args = process.argv.slice(2);

if (args.length === 0) {
    console.log('Hi.');
    process.exit(1);
}

function makeVeryDisco(word) {
    const length = word.length;
    const middle = Math.ceil(length / 2);
    const firstPart = word.slice(0, middle);
    const secondPart = word.slice(middle);
    const discoWord = secondPart + firstPart;
    return discoWord;
}

function makeVeryDisco(word) {
    const length = word.length;
    const middle = Math.ceil(length / 2);
    const firstPart = word.slice(0, middle);
    const secondPart = word.slice(middle);
    const discoWord = secondPart + firstPart;
    return discoWord;
}

args.forEach((arg) => {
    
    if (arg.includes(' ')) {
        const discoSentence = arg.split(' ').map(makeVeryDisco).join(' ');
        console.log(discoSentence);
    } else {
    
        const discoWord = makeVeryDisco(arg);
        console.log(discoWord);
    }
});
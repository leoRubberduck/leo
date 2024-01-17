function invert(inputObject) {
    const invertedObject = {};

    for (const key in inputObject) {
        if (inputObject.hasOwnProperty(key)) {
            const value = inputObject[key];
            invertedObject[value] = key;
        }
    }

    return invertedObject;
}

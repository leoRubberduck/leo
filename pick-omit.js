function pickKeys(inputObject, keysToPick) {
    const pickedObject = {};

    if (Array.isArray(keysToPick)) {
        keysToPick.forEach(key => {
            if (inputObject.hasOwnProperty(key)) {
                pickedObject[key] = inputObject[key];
            }
        });
    } else if (typeof keysToPick === 'string' && inputObject.hasOwnProperty(keysToPick)) {
        pickedObject[keysToPick] = inputObject[keysToPick];
    }

    return pickedObject;
}

function omitKeys(inputObject, keysToOmit) {
    const omittedObject = { ...inputObject };

    if (Array.isArray(keysToOmit)) {
        keysToOmit.forEach(key => {
            if (omittedObject.hasOwnProperty(key)) {
                delete omittedObject[key];
            }
        });
    } else if (typeof keysToOmit === 'string' && omittedObject.hasOwnProperty(keysToOmit)) {
        delete omittedObject[keysToOmit];
    }

    return omittedObject;
}

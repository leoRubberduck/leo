function pickKeys(obj, keysToPick) {
    if (!Array.isArray(keysToPick)) {
        keysToPick = [keysToPick];
    }

    return Object.fromEntries(
        Object.entries(obj)
            .filter(([key]) => keysToPick.includes(key))
    );
}

function omitKeys(obj, keysToOmit) {
    if (!Array.isArray(keysToOmit)) {
        keysToOmit = [keysToOmit];
    }

    return Object.fromEntries(
        Object.entries(obj)
            .filter(([key]) => !keysToOmit.includes(key))
    );
}
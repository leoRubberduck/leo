function pick(obj, keysToPick) {
    return Object.fromEntries(
      Object.entries(obj).filter(([key]) => keysToPick.includes(key))
    );
  }
  
  function omit(obj, keysToOmit) {
    return Object.fromEntries(
      Object.entries(obj).filter(([key]) => !keysToOmit.includes(key))
    );
  }
  
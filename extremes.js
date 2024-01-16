function extreme(arr) {
  if (arr.length === 0) {
      return { large: undefined, tiny: undefined };
  }

  let large = arr[0];
  let tiny = arr[0];

  for (let i = 1; i < arr.length; i++) {
      if (arr[i] > large) {
          large = arr[i];
      }
      if (arr[i] < tiny) {
          tiny = arr[i];
      }
  }

  return { large, tiny };
}


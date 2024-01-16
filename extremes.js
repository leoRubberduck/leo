function extreme(arr) {
  if (arr.length === 0) {
      return { bigest: undefined, smallest: undefined };
  }

  let bigest = arr[0];
  let smallest = arr[0];

  for (let i = 1; i < arr.length; i++) {
      if (arr[i] > bigest) {
          bigest = arr[i];
      }
      if (arr[i] < smallest) {
          smallest = arr[i];
      }
  }

  return { bigest, smallest };
}

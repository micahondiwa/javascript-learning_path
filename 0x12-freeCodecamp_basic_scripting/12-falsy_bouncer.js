function bouncer(arr) {
  const filtered = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i]) {
      filtered.push(arr[i]);
    }
  }
  return filtered;
}

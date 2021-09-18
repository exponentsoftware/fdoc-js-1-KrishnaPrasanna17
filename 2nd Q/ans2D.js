function checkUniqueness(arr) {
    let setUnique = new Set();
  
    for (let i = 0; i < arr.length; i++) {
      setUnique.add(arr[i]);
    }
  
    return setUnique.size == arr.length;
  }
  const arrOne = [1, 4, 6, 2, 1];
  console.log(checkUniqueness(arrOne));
  
  const arrTwo = [1, 4, 6, 2, 3];
  console.log(checkUniqueness(arrTwo));
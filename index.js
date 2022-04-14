function findLongestWordLength(str) {
    let arr = str.split(' '); // separates each word into a new array, 'arr', as individual items.
  
    let map = arr.map(a => a.length); // .map gets the length of each item in the array.
  
    map.sort((a, b) => b-a); // .sort sorts the new array in order from greatest to least.
  
    return map[0]; // Since the first item is the greatest, map[0] returns the length of the longest word.
  };
  
  console.log(findLongestWordLength("What if we try a super-long word such as otorhinolaryngology"));
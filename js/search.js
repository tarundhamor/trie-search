const trieLogSearch = (str, trie) => {
  let storage = [];

  const findValidChildren = (str, trie) => {
    if (str.length > 0) {
      if (!trie[str[0]]) {
        return;
      }
      findValidChildren(str.slice(1), trie[str[0]]);
      return;
    }

    if (trie.isWord === true) {
      storage.push(trie.val);
    }

    for (let key in trie) {
      if (key.length === 1) {
        findValidChildren(str, trie[key]);
      }
    }
  };

  findValidChildren(str, trie);
  return storage;
};


const linearSearch = (str, list) => {
  const storage = [];
  list.forEach(word => {
    if (word.slice(0, str.length) === str) {
      storage.push(word);
    }
  });
  return storage;
};

const pullFirstTenVals = arr => {
  arr.sort(alphaSearch);
  const valArr = [];
  if (arr.length > 0) {
    const loopLength = arr.length < 10 ? arr.length : 10;
    for (let i = 0; i < loopLength; i++) {
      valArr.push(arr[i]);
    }
  }
  return valArr;
};

const alphaSearch = (a, b) => {
  if (a.length < b.length) {
    return -1;
  } else if (a.length === b.length) {
    if (a < b) {
      return -1;
    } else {
      return 1;
    }
  } else {
    return 1;
  }
};

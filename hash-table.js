// Hash functions.
// map pink to be a number between 0 - 100

// Uses char code values with modulo of arrayLen to get an index.

class HashTable {
  constructor(size = 4) {
    this.keyMap = new Array(size);
  }

  _hash(key) {
    let total = 0;
    let WEIRD_PRIME = 31;
    for (let i = 0; i < Math.min(key.length, 100); i++) {
      let char = key[i];
      let value = char.charCodeAt(0) - 96;
      total = (total * WEIRD_PRIME + value) % this.keyMap.length;
    }

    return total;
  }
  set(key, value) {
    const index = this._hash(key);
    if (!this.keyMap[index]) {
      this.keyMap[index] = [];
    }

    this.keyMap[index].push([key, value]);
  }

  get(key) {
    const index = this._hash(key);
    const item = this.keyMap[index].find(items => items[0] === key);
    return item ? item : undefined;
  }

  keys() {
    const cache = {};
    let allKeys = [];
    for (let i = 0; i < this.keyMap.length; i++) {
      if (this.keyMap[i]) {
        this.keyMap[i].forEach(item => {
          if (!cache[item[0]]) {
            allKeys.push(item[0]);
            cache[item[0]] = true;
          }
        });
      }
    }
    return allKeys;
  }

  values() {
    const cache = {};
    let allValues = [];
    for (let i = 0; i < this.keyMap.length; i++) {
      if (this.keyMap[i]) {
        this.keyMap[i].forEach(item => {
          if (!cache[item[1]]) {
            allValues.push(item[1]);
            cache[item[0]] = true;
          }
        });
      }
    }
    return allValues;
  }
}

const hashMap = new HashTable();
hashMap.set("pink", "123");
hashMap.set("cyan", "456");
hashMap.set("helloworld", "789");
hashMap.set("dogs", "are good");
console.log(hashMap);
console.log(hashMap.values());

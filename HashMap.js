class HashMap {
  constructor() {
    this._data = {};
    console.log('HashMap/constructor');
  }

  get(key) {
    var hashedKey = this.hash(key);
    return this._data[hashedKey];
  }

  set(key, value) {
    var hashedKey = this.hash(key);
    this._data[hashedKey] = value;
  }

  hash(key) {
    return key;
  }
}

// var hashMap = new HashMap();
// hashMap.get('testing');

module.exports = HashMap;

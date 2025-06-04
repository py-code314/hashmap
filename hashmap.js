// Hashmap class
class Hashmap {
  constructor() {
    this.loadFactor = 0.75
    this.capacity = 16
  }

  // Hash function
  hash(key) {
    let hashCode = 0

    const primeNumber = 31
    for (let i = 0; i < key.length; i++) {
      hashCode = primeNumber * hashCode + key.charCodeAt(i)
      hashCode = hashCode % this.capacity
    }

    console.log(hashCode)
    return hashCode
  }
}

const test = new Hashmap()
test.hash('dfdkfreireorjfd')
test.hash('sarah')
test.hash('firstKey')
test.hash('visualstudiocode')

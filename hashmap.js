// Hashmap class
class Hashmap {
  constructor() {
    this.buckets = []
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

    // console.log(hashCode)
    return hashCode
  }

  bucket(key) {
    const index = this.hash(key)
    console.log(index)
    return this.buckets[index]
  }

}

const test = new Hashmap()
test.bucket('dfdkfreireorjfd')
test.bucket('sarah')
test.bucket('Rama')
test.bucket('Sita')
test.bucket('firstKey')
test.bucket('visualstudiocode')

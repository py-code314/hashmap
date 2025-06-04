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

  // Get a bucket based on key
  bucket(key) {
    const index = this.hash(key)
    console.log(index)
    return this.buckets[index]
  }

  // Return entry based on key
  entry(bucket, key) {
    for (let item of bucket) {
      if (item.key === key) {
        return item
      }
    }
    return null
  }
}

const test = new Hashmap()
test.bucket('dfdkfreireorjfd')
test.bucket('sarah')
test.bucket('Rama')
test.bucket('Sita')
test.bucket('firstKey')
test.bucket('visualstudiocode')

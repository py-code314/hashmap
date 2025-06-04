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
  getBucket(key) {
    const index = this.hash(key)
    console.log(index)
    return this.buckets[index]
  }

  // Return entry based on key
  getEntry(bucket, key) {
    for (let entry of bucket) {
      if (entry.key === key) {
        return entry
      }
    }
    return null
  }

  // Add or update an entry
  set(key, value) {
    const bucket = this.getBucket(key)
    const entry = this.getEntry(bucket, key)
    if (entry) {
      entry.value = value
    }
    this.buckets.push([key, value])

  }
}

const test = new Hashmap()
// test.bucket('dfdkfreireorjfd')
// test.bucket('sarah')
// test.bucket('Rama')
// test.bucket('Sita')
// test.bucket('firstKey')
// test.bucket('visualstudiocode')

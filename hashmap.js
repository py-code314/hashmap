import Bucket from './bucket.js'

// Hashmap class
class Hashmap {
  constructor() {
    this.buckets = []
    this.loadFactor = 0.75
    this.capacity = 16
    this.size = 0
  }

  // Hash function
  hash(key) {
    let hashCode = 0

    const primeNumber = 31
    for (let i = 0; i < key.length; i++) {
      hashCode = primeNumber * hashCode + key.charCodeAt(i)
      hashCode = hashCode % this.capacity
    }

    return hashCode
  }

  // Get a bucket based on key
  getBucket(key) {
    const index = this.hash(key)

    if (index < 0 || index >= this.capacity) {
      throw new Error('Trying to access index out of bounds')
    }

    return this.buckets[index]
  }

  // Return entry based on key
  getEntry(bucket, key) {
    const entry = bucket.getNode(key)

    return entry
  }

  // Add or update an entry
  set(key, value) {
    const bucket = this.getBucket(key)

    if (bucket === undefined) {
      const index = this.hash(key)

      this.buckets[index] = new Bucket()
      this.buckets[index].append(key, value)
      this.size++
    } else {
      const entry = this.getEntry(bucket, key)

      if (entry) {
        if (entry.key === key) {
          entry.value = value
        }
      } else {
        bucket.append(key, value)
        this.size++
      }
    }

    // Check for total number of entries
    const entriesLimit = this.loadFactor * this.capacity
    if (this.size > entriesLimit) {
      this.resize()
    }
  }

  // Get the value of an entry
  get(key) {
    const bucket = this.getBucket(key)

    if (bucket) {
      const entry = this.getEntry(bucket, key)

      return entry.value
    }
    return null
  }

  // Return true or false given a key
  has(key) {
    const bucket = this.getBucket(key)
    if (bucket) {
      return true
    }
    return false
  }

  // Remove an entry
  // remove(key) {
  //   const bucket = this.getBucket(key)
  //   const entry = this.getEntry(bucket, key)

  //   if (entry) {
  //     const index = bucket.indexOf(entry)
  //     // console.log('Entry Index: ', index)
  //     bucket.splice(index, 1)
  //     this.size--
  //     return true
  //   } else {
  //     return false
  //   }
  // }

  // Return total number of keys
  length() {
    return this.size
  }

  // Remove all entries
  // clear() {
  //   while (this.buckets.length > 0) {
  //     // console.log(this.buckets.length)
  //     this.buckets.pop()
  //   }
  //   this.size = 0
  // }

  // Return an array of keys
  // keys() {
  //   const keysArray = []
  //   this.buckets.forEach((bucket) => {
  //     bucket.forEach((entry) => keysArray.push(entry[0]))
  //   })
  //   return keysArray
  // }

  // Return an array of values
  // values() {
  //   const valuesArray = []
  //   this.buckets.forEach((bucket) => {
  //     bucket.forEach((entry) => valuesArray.push(entry[1]))
  //   })
  //   return valuesArray
  // }

  // Return entries array
  entries() {
    return this.buckets
  }

  // Increase the number of buckets
  // resize() {
  //   const allEntries = this.entries()
  //   const newCapacity = this.capacity * 2
  //   this.capacity = newCapacity
  //   const newSize = 0
  //   this.size = newSize
  //   const newBuckets = []
  //   this.buckets = newBuckets

  //   allEntries.forEach((bucket) => {
  //     bucket.forEach(entry => this.set(entry[0], entry[1]))
  //   })
  // }
}

const test = new Hashmap()
test.set('apple', 'red')
// test.set('apple', 'green')
// test.set('banana', 'yellow')
// test.set('carrot', 'orange')
// test.set('dog', 'brown')
// test.set('Rama', 30)
// test.set('Sita', 32)

console.log('Entries:', test.entries())
// console.dir(test, { depth: null })
console.log(test.has('apple'))

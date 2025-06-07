// Import Bucket class
import Bucket from './bucket.js'

/* Hashmap class */
class Hashmap {
  constructor() {
    this.buckets = []
    this.loadFactor = 0.75
    this.capacity = 16
    this.size = 0
  }

  /* Hash function */
  hash(key) {
    let hashCode = 0
    const primeNumber = 31

    for (let i = 0; i < key.length; i++) {
      hashCode = primeNumber * hashCode + key.charCodeAt(i)
      hashCode = hashCode % this.capacity
    }

    return hashCode
  }

  /* Get a bucket based on key */
  getBucket(key) {
    const index = this.hash(key)

    if (index < 0 || index >= this.capacity) {
      throw new Error('Trying to access index out of bounds')
    }

    return this.buckets[index]
  }

  /* Retrieve an entry from a given bucket */
  getEntry(bucket, key) {
    const entry = bucket.getNode(key)

    return entry
  }

  /* Add or update an entry */
  set(key, value) {
    const bucket = this.getBucket(key)

    if (!bucket) {
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

    const entriesLimit = this.loadFactor * this.capacity

    if (this.size > entriesLimit) {
      this.resize()
    }
  }

  /* Retrieve the value associated with a given key */
  get(key) {
    const bucket = this.getBucket(key)

    if (bucket) {
      const entry = this.getEntry(bucket, key)

      if (entry) {
        return entry.value
      }
    }

    return null
  }

  /* Check if a given key exists in the hashmap */
  has(key) {
    const bucket = this.getBucket(key)
    if (bucket) {
      return true
    }
    return false
  }

  /* Removes the entry associated with the given key from the hashmap */
  remove(key) {
    const bucket = this.getBucket(key)
    if (bucket) {
      bucket.removeNode(key)
      this.size--
      return true
    }
    return false
  }

  /* Return the total number of keys in the hashmap */
  length() {
    return this.size
  }

  /* Remove all entries from the hashmap, resetting all buckets and size */
  clear() {
    this.buckets.forEach((bucket) => {
      if (bucket) {
        bucket.clearNodes()
      }
    })
    this.size = 0
    this.capacity = 16
  }

  /* Returns an array of all keys in the hashmap */
  keys() {
    const keys = this.buckets.reduce(
      (allKeys, bucket) => allKeys.concat(bucket.getKeys()),
      []
    )
    return keys
  }

  // Return an array of values
  values() {
    const values = this.buckets.reduce(
      (allValues, bucket) => allValues.concat(bucket.getValues()),
      []
    )
    return values
  }

  /* Return an array of entries as key-value pairs
   */
  entries() {
    const entries = this.buckets.reduce(
      (allEntries, bucket) => allEntries.concat(bucket.getNodes()),
      []
    )

    return entries
  }

  /* Increase the number of buckets in the hashmap */
  resize() {
    const allEntries = this.entries()
    const newNumBuckets = this.capacity * 2
    this.capacity = newNumBuckets
    const newBuckets = []
    this.buckets = newBuckets
    this.size = 0 // Reset the size to 0

    // Rehash the indexes for buckets
    allEntries.forEach(([key, value]) => this.set(key, value))
  }
}

const test = new Hashmap()
test.set('apple', 'red')
test.set('banana', 'yellow')
test.set('carrot', 'orange')
test.set('dog', 'brown')
test.set('elephant', 'gray')
test.set('frog', 'green')
test.set('grape', 'purple')
test.set('hat', 'black')
test.set('ice cream', 'white')
test.set('jacket', 'blue')
test.set('kite', 'pink')
test.set('lion', 'golden')
// test.set('appl', 'red')
// test.set('banan', 'yellow')
// test.set('carro', 'orange')
// test.set('do', 'brown')
// test.set('elephan', 'gray')
// test.set('fro', 'green')
// test.set('grap', 'purple')
// test.set('ha', 'black')
// test.set('ice crea', 'white')
// test.set('jacke', 'blue')
// test.set('kit', 'pink')
// test.set('lio', 'golden')

test.set('moon', 'silver')

// console.log(test.entries())
console.dir(test, { depth: null })

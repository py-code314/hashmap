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

    // console.log(hashCode)
    return hashCode
  }

  // Get a bucket based on key
  getBucket(key) {
    const index = this.hash(key)
    // console.log(index)
    if (index < 0 || index >= this.capacity) {
      throw new Error('Trying to access index out of bounds')
    }

    return this.buckets[index]
  }

  // Return entry based on key
  getEntry(bucket, key) {
    for (let i = 0; i < bucket.length; i++) {
      if (bucket[i][0] === key) {
        return bucket[i]
      }
    }
    return null
  }

  // Add or update an entry
  set(key, value) {
    const bucket = this.getBucket(key)
    // console.log('Bucket: ', bucket)

    if (bucket === undefined) {
      const index = this.hash(key)
      // console.log('Index: ', index)
      this.buckets[index] = [[key, value]]
      this.size++
    } else {
      const entry = this.getEntry(bucket, key)
      // console.log('Entry: ', entry)
      if (entry) {
        if (entry[0] === key) {
          entry[1] = value
        }
      } else {
        bucket.push([key, value])
        this.size++
      }
    }
  }

  // Get the value of an entry
  get(key) {
    const bucket = this.getBucket(key)
    const entry = this.getEntry(bucket, key)

    if (entry) {
      return entry[1]
    }
    return null
  }

  // Return true or false given a key
  has(key) {
    const bucket = this.getBucket(key)
    const entry = this.getEntry(bucket, key)

    if (entry) {
      return true
    } else {
      return false
    }
  }

  // Remove an entry
  remove(key) {
    const bucket = this.getBucket(key)
    const entry = this.getEntry(bucket, key)

    if (entry) {
      const index = bucket.indexOf(entry)
      // console.log('Entry Index: ', index)
      bucket.splice(index, 1)
      this.size--
      return true
    } else {
      return false
    }
  }

  // Return total number of keys
  length() {
    return this.size
  }

  // Remove all entries
  clear() {
    while (this.buckets.length > 0) {
      // console.log(this.buckets.length)
      this.buckets.pop()
    }
    this.size = 0
  }

  // Return an array of keys
  keys() {
    const keysArray = []
    this.buckets.forEach((bucket) => {
      bucket.forEach(entry => keysArray.push(entry[0]))
    })
    console.log(keysArray)
  }


  // Return an array of values
  values() {
    const valuesArray = []
    this.buckets.forEach((bucket) => {
      bucket.forEach(entry => valuesArray.push(entry[1]))
    })
    console.log(valuesArray)
  }

  // Print entries
  entries() {
    console.log('Entries: ', this.buckets)
  }
}

const test = new Hashmap()
test.set('apple', 'red')
test.set('banana', 'yellow')
test.set('carrot', 'orange')
// test.set('apple', 'green')
test.set('Rama', 'blue')
test.set('Sita', 'white')
// test.entries()
test.values()

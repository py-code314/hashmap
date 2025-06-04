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
    // console.log(index)
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
    const index = this.hash(key)
    // console.log('Index: ', index)
    const bucket = this.getBucket(key)
    // console.log('Bucket: ', bucket)

    if (bucket === undefined) {
      this.buckets[index] = [[key, value]]
    } else {
      const entry = this.getEntry(bucket, key)
      // console.log('Entry: ', entry)
      if (entry) {
        if (entry[0] === key) {
          entry[1] = value
        }
      } else {
        bucket.push([key, value])
      }
    }
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
test.set('apple', 'green')
test.set('Rama', 'blue')
test.set('Sita', 'white')
test.entries()

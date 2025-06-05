// Import Node class
import Node from './node.js'

// Create a class to manage a bucket
export default class Bucket {
  constructor() {
    this.length = 0
    this.headNode = null
  }

  // Add new node to the end
  append(key, value) {
      const newNode = new Node(key, value)
  
      if (!this.headNode) {
        this.headNode = newNode
      } else {
        let currentNode = this.headNode
  
        while (currentNode.next) {
          currentNode = currentNode.next
        }
  
        currentNode.next = newNode
      }
  
      this.length++
    }
}

const bucket = new Bucket()
bucket.append('apple', 'red')
bucket.append('banana', 'yellow')
console.log(bucket)
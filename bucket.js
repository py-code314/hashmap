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

  // Find entry based on key
  getNode(key) {
    let currentNode = this.headNode

    while (currentNode) {
      if (currentNode.key === key) {
        return currentNode
      }

      currentNode = currentNode.next
    }
  }

  // Remove entry
  removeNode(key) {
    let currentNode = this.headNode
    let previousNode

    while (currentNode) {
      if (currentNode.key === key) {
        if (previousNode) {
          previousNode.next = currentNode.next
        } else {
          this.headNode = currentNode.next
        }
        this.length--
        return
      }
      previousNode = currentNode
      currentNode = currentNode.next
    }
  }

  // Remove all entries
  clearNodes() {
    this.headNode = null
    this.length = 0
  }

  // Get key
  getKeys() {
    const keysArray = []
    let currentNode = this.headNode

    while (currentNode) {
      keysArray.push(currentNode.key)
      currentNode = currentNode.next
    }
    return keysArray
  }

  // Get value
  getValues() {
    const valuesArray = []
    let currentNode = this.headNode

    while (currentNode) {
      valuesArray.push(currentNode.value)
      currentNode = currentNode.next
    }
    return valuesArray
  }
}

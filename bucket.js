// Import Node class
import Node from './node.js'

/* Creates a bucket including functions */
export default class Bucket {
  constructor() {
    this.length = 0
    this.headNode = null
  }


  /* Add a new node with the given key and value to the end of the bucket */
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


  /* Get node data */
  getNode(key) {
    let currentNode = this.headNode

    while (currentNode) {
      if (currentNode.key === key) {
        return currentNode
      }

      currentNode = currentNode.next
    }

    return null
  }


  /* Remove the node with the given key from the bucket */
  removeNode(key) {
    let currentNode = this.headNode
    let previousNode = null

    while (currentNode && currentNode.key !== key) {
      previousNode = currentNode
      currentNode = currentNode.next
    }

    if (!currentNode) {
      return
    }

    if (previousNode) {
      previousNode.next = currentNode.next
    } else {
      this.headNode = currentNode.next
    }

    this.length--
  }


  /* Clears all nodes from the bucket */
  clearNodes() {
    this.headNode = null
    this.length = 0
  }

  /* Return an array of all keys in the bucket */
  getKeys() {
    const keys = [];
    let currentNode = this.headNode;

    while (currentNode) {
      keys.push(currentNode.key);
      currentNode = currentNode.next;
    }
    
    return keys;
  }


  /* Return an array of all values in the bucket */
  getValues() {
    const values = []
    let currentNode = this.headNode

    while (currentNode) {
      values.push(currentNode.value)
      currentNode = currentNode.next
    }

    return values
  }

  /* Retrieve all nodes as an array of key-value pairs */
  getNodes() {
    const nodes = [];
    let currentNode = this.headNode;

    while (currentNode) {
      nodes.push([currentNode.key, currentNode.value]);
      currentNode = currentNode.next;
    }
    
    return nodes;
  }
}

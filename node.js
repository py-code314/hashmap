/* Construct a new node with a given key and value */
export default class Node {
  constructor(key, value, next = null) {
    this.key = key
    this.value = value
    this.next = next
  }
}


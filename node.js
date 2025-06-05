export default class Node {
  constructor(key, value, next = null) {
    this.key = key
    this.value = value
    this.next = next
  }
}

// const n1 = new Node('apple', 'red')
// const n2 = new Node('hat', 'black')
// console.log(n1)
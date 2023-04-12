const { NotImplementedError } = require('../extensions/index.js');
/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class ListNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0; // Размер очереди
  }

  getUnderlyingList() {
    return this.head;
  }

  enqueue(value) {
    const newNode = new ListNode(value);
    if (this.size === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.size++;
  }

  dequeue() {
    if (this.size === 0) {
      return null;
    } else {
      const value = this.head.value;
      this.head = this.head.next;
      this.size--;
      if (this.size === 0) {
        this.tail = null;
      }
      return value; // Возвращает значение извлеченного узла
    }
  }
}

module.exports = {
  Queue
};

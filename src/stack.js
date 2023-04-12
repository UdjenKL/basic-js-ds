const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement the Stack with a given interface via array.
 *
 * @example
 * const stack = new Stack();
 *
 * stack.push(1); // adds the element to the stack
 * stack.peek(); // returns the peek, but doesn't delete it, returns 1
 * stack.pop(); // returns the top element from stack and deletes it, returns 1
 * stack.pop(); // undefined
 *
 */
class Stack {
  constructor() {
    // Инициализируем пустой массив, представляющий стек
    this.items = [];
  }

  push(element) {
    // Добавляем новый элемент на вершину стека
    this.items.push(element);
  }

  pop() {
    // Если стек пустой, возвращаем значение `undefined`
    if (this.items.length === 0) {
      return undefined;
    }
    // Удаляем последний элемент из массива и возвращаем его значение
    return this.items.pop();
  }

  peek() {
    // Если стек пустой, возвращаем значение `undefined`
    if (this.items.length === 0) {
      return undefined;
    }
    // Возвращаем последний элемент из массива (на вершине стека), но не удаляем его
    return this.items[this.items.length - 1];
  }
}

// Экспортируем класс `Stack` из модуля
module.exports = {
  Stack
};

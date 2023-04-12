const { NotImplementedError } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined using interface
 * class ListNode {
 *   constructor(x) {
 *     this.value = x;
 *     this.next = null;
 *   }
 * }
 */
function removeKFromList(l, k) {
  let currentNode = l;
  let prevNode = null;

  while (currentNode !== null) {
    // Если текущий узел содержит значение k, удаляем его из связанного списка
    if (currentNode.value === k) { // Если удаляемый узел - первый в списке, меняем голову списка на следующий узел
      if (prevNode === null) {
        l = currentNode.next;
      } else { // Если удаляемый узел не первый, связываем предыдущий узел со следующим после текущего
        prevNode.next = currentNode.next;
      }
    } else { // Если текущий узел не содержит значение k, просто перемещаемся по связанному списку
      prevNode = currentNode;
    }

    currentNode = currentNode.next; // переходим к следующему узлу
  }

  return l;
}

module.exports = {
  removeKFromList
};

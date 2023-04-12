const { NotImplementedError } = require('../extensions/index.js');
const { Node } = require('../extensions/list-tree.js');

class BinarySearchTree {
  constructor() {
    // Инициализируем корень дерева пустым значением
    this._root = null;
  }

  root() {
    // Возвращаем корень дерева
    return this._root;
  }

  add(data) {
    // Создаем новый узел на основе переданного значения
    const node = new Node(data);

    // Если дерево пустое, новый узел становится корневым
    if (!this._root) {
      this._root = node;
      return;
    }

    // Иначе находим место для вставки нового узла
    let current = this._root;
    while (current) {
      if (data < current.data) {
        // Если значение меньше значения текущего узла, движемся влево
        if (!current.left) {
          // Если левого потомка нет, новый узел становится левым потомком
          current.left = node;
          return;
        }
        current = current.left;
      } else if (data > current.data) {
        // Если значение больше значения текущего узла, движемся вправо
        if (!current.right) {
          // Если правого потомка нет, новый узел становится правым потомком
          current.right = node;
          return;
        }
        current = current.right;
      } else {
        // Если значение уже есть в дереве, ничего не делаем
        return;
      }
    }
  }

  has(data) {
    // Начинаем поиск с корня дерева
    let current = this._root;

    while (current) {
      if (data === current.data) {
        // Если значение найдено, возвращаем true
        return true;
      } else if (data < current.data) {
        // Если значение меньше значения текущего узла, движемся влево
        current = current.left;
      } else {
        // Если значение больше значения текущего узла, движемся вправо
        current = current.right;
      }
    }

    // Если значение не найдено, возвращаем false
    return false;
  }

  find(data) {
    // Начинаем поиск с корня дерева
    let current = this._root;

    while (current) {
      if (data === current.data) {
        // Если значение найдено, возвращаем узел
        return current;
      } else if (data < current.data) {
        // Если значение меньше значения текущего узла, движемся влево
        current = current.left;
      } else {
        // Если значение больше значения текущего узла, движемся вправо
        current = current.right;
      }
    }

    // Если значение не найдено, возвращаем null
    return null;
  }

  remove(data) {
    this._root = this._removeNode(this._root, data);
  }
//удаляет из дерева узел, содержащий указанные данные Он принимает два аргумента: узел, с которого начинается поиск, и данные, которые нужно удалить.
  _removeNode(node, data) {
    if (!node) {
      return null;
    }

    if (data === node.data) {
      if (!node.left && !node.right) {
        return null;
      }

      if (!node.left) {
        return node.right;
      }

      if (!node.right) {
        return node.left;
      }

      let minRightNode = node.right;
      while (minRightNode.left) {
        minRightNode = minRightNode.left;
      }

      node.data = minRightNode.data;
      node.right = this._removeNode(node.right, minRightNode.data);
      return node;
    } else if (data < node.data) {
      node.left = this._removeNode(node.left, data);
      return node;
    } else {
      node.right = this._removeNode(node.right, data);
      return node;
    }
  }

  min() {
    if (!this._root) {
      return null;
    }

    let current = this._root;
    while (current.left) {
      current = current.left;
    }

    return current.data;
  }

  max() {
    if (!this._root) {
      return null;
    }

    let current = this._root;
    while (current.right) {
      current = current.right;
    }

    return current.data;
  }
}

module.exports = {
  BinarySearchTree
};

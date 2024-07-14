import Node from './Node.js'

export class Arbol {
    #root

    constructor() {
        this.#root = null
    }

    add(value) {
        if (this.#root === null) {
            this.#root = new Node(value)
            return this.#root != null
        } else {
            return this.addNewNode(this.#root, value)
        }
    }

    addNewNode(node, value) {
        if (value.nombre < node.value.nombre) {
            if (node.left == null) {
                node.left = new Node(value)
                if (node.left != null) {
                    return true
                }
            } else {
                return this.addNewNode(node.left, value)
            }
        } else {
            if (node.right == null) {
                node.right = new Node(value)
                if (node.right != null) {
                    return true
                }
            } else {
                return this.addNewNode(node.right, value)
            }
        }
    }
    search(value) {
        if (this.#root === null) {
            return null;
        } else {
            return this.searchNode(this.#root, value.toLowerCase());
        }
    }
    searchNode(node, value) {
        if (node === null) {
            return null;
        }
        const nodeName = node.value.nombre.toLowerCase();

        if (nodeName === value) {
            return node;
        } else if (nodeName > value) {
            return this.searchNode(node.left, value);
        } else {
            return this.searchNode(node.right, value);
        }
    }
    print(callback) {
        return this.printNode(this.#root, callback)
    }
    printNode(node, callback) {
        if (node === null) {
            return false
        } else {
            this.printNode(node.left, callback)
            callback(node.value)
            this.printNode(node.right, callback)
        }
    }
    searchMinimun() {
        return this.searchMinimunNode(this.#root)
    }
    searchMinimunNode(node) {
        if (node === null) {
            return false
        } else if (node.left === null) {
            return node
        } else {
            return this.searchMinimunNode(node.left)
        }
    }
    searchMaximun() {
        return this.searchMaximunNode(this.#root)
    }
    searchMaximunNode(node) {
        if (node === null) {
            return false
        } else if (node.right === null) {
            return node
        } else {
            return this.searchMinimunNode(node.right)
        }
    }
}
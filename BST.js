class Node {
    constructor(data, left = null, right = null) {
        this.data = data
        this.left = left
        this.right = right
    }
    insertData = (number) => {
        if (number >= this.data) {
            if (this.right === null) {
                this.right = new Node(number)
            } else {
                this.right.insertData(number)
            }
        } else {
            if (this.left === null) {
                this.left = new Node(number)
            } else {
                this.left.insertData(number)
            }
        }
    }
}

class Tree {
    constructor(array) {
        this.array = array
        this.root = new Node(array[0])
    }
    buildTree = () => {
        this.array.shift()
        this.array.map(data => this.root.insertData(data))
    }
    printTree = (node = this.root) => {
        console.log(node.data + ",")
        if (node.left !== null) {
            console.log("à gauche")                       // SUPPRIMABLE
            this.printTree(node.left)
        }
        if (node.right !== null) {
            console.log("à droite")                       // SUPPRIMABLE
            this.printTree(node.right)
        }
        console.log("en haut")                       // SUPPRIMABLE
    }
    find = (number, node = this.root) => {
        console.log("find node.data === " + node.data)                       // SUPPRIMABLE
        if (number === node.data) {
            return (true)
        } else if (node.data > number) {
            if (node.left === null) {
                return (false)
            }
            console.log("à gauche")                       // SUPPRIMABLE
            return (this.find(number, node.left))
        } else {
            if (node.right === null) {
                return (false)
            }
            console.log("à droite")                       // SUPPRIMABLE
            return (this.find(number, node.right))
        }
    }
    sortInArrayInOrder = (node = this.root, array = []) => {
        if (node.left !== null) {
            array.push(this.sortInArrayInOrder(node.left))
        }
        array.push(node.data)
        if (node.right !== null) {
            array.push(this.sortInArrayInOrder(node.right))
        }
        return (array) 
    }
    sortInArrayPostOrder = (node = this.root, array = []) => {
        if (node.right !== null) {
            array.push(this.sortInArrayPostOrder(node.right))
        }
        array.push(node.data)
        if (node.left !== null) {
            array.push(this.sortInArrayPostOrder(node.left))
        }
        return (array)
    }
    sortInArrayPreOrder = (node = this.root, array = []) => {
        array.push(node.data)
        if (node.left !== null) {
            array.push(this.sortInArrayPostOrder(node.left))
        }
        if (node.right !== null) {
            array.push(this.sortInArrayPostOrder(node.right))
        }
        return (array)
    }
}

const tree = new Tree([4,2,9,5,1,8])
tree.buildTree()
tree.printTree()
console.log("\n")
let number = 5
console.log("\n" + number + " est-il dans l'arbre ??? => " + tree.find(number))
console.log("\narray of the tree is ===> " + tree.sortInArrayInOrder())
console.log("\narray of the tree is ===> " + tree.sortInArrayPostOrder())
console.log("\narray of the tree is ===> " + tree.sortInArrayPreOrder())

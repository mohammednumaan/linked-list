// IMPORT
import linkedList from '/linkedList.js'

// TESTS

// NEW LIST
let list = new linkedList()

// APPEND
list.append(1)
list.append(2)
list.append(3)
list.append(4)
list.append(5)
list.append(6)

// HEAD AND TAIL NODE
console.log(list.getHead())
console.log(list.getTail())


// SIZE OF LINKED-LIST
console.log(list.getSize())

// PREPEND
list.prepend(0)

// CONTAINS
console.log(list.contains(1))
console.log(list.contains(100))

// FIND
console.log(list.find(6))
console.log(list.find(600))

// GET NODE BY INDEX
console.log(list.at(5))

// STRING REPRESENTATION
console.log(list.toString())

console.log(list)
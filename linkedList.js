// IMPORT

import nodeList from './node.js'

// LINKED LIST CLASS

export default class linkedList{
    
    constructor(){
        this.head = null;
        this.size = 0;
    }
    
    // GET HEAD NODE
    
    getHead(){
        
        if (this.head === null) return `Null : Doesn't Exist :/`;
        return this.head.node;
    }
    
    
    // GET TAIL NODE
    
    getTail(){
        
        if(!this.head){
            return `Null : Doesn't Exist :/`;
        }
        
        else{
            let currentNode = this.head
            while(currentNode){
                if(!currentNode.nextNode) return currentNode; 
                currentNode = currentNode.nextNode;
            }
        }
    }
    
    // APPEND NODE
    
    append(value){
        const newNode = new nodeList(value)
        let currentNode;
        
        if (this.head === null) this.prepend(value);
        else{
            currentNode = this.head;
            while (currentNode.nextNode) currentNode = currentNode.nextNode
            currentNode.nextNode = newNode
        }
        this.size++
    } 
    
    // PREPEND NODE
    
    
    prepend(value){
        let currentHead = null;
        if (this.head !== null){
            currentHead = this.head
        }
        this.head = new nodeList(value)
        this.head.nextNode = currentHead
        
    }
    
    // GET SIZE
    
    getSize(){
        
        console.log(`Total Nodes : ${this.size}`);
    }
    
    // GET NODE BY INDEX
    
    at(index){
        
        let currentNode = this.head;
        for (let i = 0; i < index; i++){
            
            currentNode = currentNode.nextNode
            if (currentNode === null) return `Null : Doesn't Exist :/`;
        }
        return currentNode;
    }
    
    // POP NODE
    
    pop(){
        
        let currentNode = this.head;
        let previousNode = null;
        
        if(!currentNode){
            return `Null : Doesn't Exist :/`;
        }
        
        while(currentNode.nextNode){
            previousNode = currentNode
            currentNode = currentNode.nextNode
        }
        previousNode.nextNode = null;  
        this.size--
        
    }
    
    // CHECK IF NODE EXISTS
    
    contains(value){
        
        let currentNode = this.head
        while(currentNode.nextNode != null){
            if (value == currentNode.node) return true;
            currentNode = currentNode.nextNode;
        }
        return false;


    }
    
    // FIND NODE
    
    find(value){
        
        let currentNode = this.head;
        let index = 0;
        while(currentNode != null){
            if (currentNode.node === value) return index;
            currentNode = currentNode.nextNode
            index++
        }
        return null;
    }
    
    // STRING REPRESENTATION
    
    toString(){
        let currentNode = this.head;
        let string = '';
        while(currentNode !== null){
            string += `(${currentNode.node}) -> `
            currentNode = currentNode.nextNode;
        }
        return string += '(null)';
    }
    

}

// END OF CODE
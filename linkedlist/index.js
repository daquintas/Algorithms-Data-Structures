// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
  constructor(data,next = null){
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor(){
    this.head = null;
  }

  insertFirst(data){
    this.head = new Node(data, this.head);
  }

  size(){
    let cont = 0;
    let node = this.head;
    while(node){
      cont ++;
      node = node.next;
    }

    return cont;

  }

  getFirst(){
    return this.head;
  }

  getLast(){
    let node = this.head;
    while(node){
      if(node.next == null){
        return node;
      }
      else{
        node = node.next;
      }
    }
  }

  clear(){
    this.head = null;
  }

  removeFirst(){

    if(this.head == null){
      return;
    }

    this.head = this.head.next;
  }

  removeLast(){
    if(this.head == null){
      return;
    }

    if(this.head.next == null){
      this.head = null;
      return ;
    }

    let node = this.head;
    let nextNode = this.head.next;

    while(nextNode.next){
      node = node.next;
      nextNode = nextNode.next;
    }

    node.next = null;

  }

  insertLast(data){
    let last = this.getLast();

    if(last){
      last.next = new Node(data);
    }
    else{
      this.head = new Node(data);
    }

  }

  getAt(index){

  if(this.head == null){
    return null;
  }

  let node = this.head;
  let counter = 0;

  while(node){
    if(counter == index){
      return node;
    }

    counter ++;
    node = node.next;
    }

    return null;
  }

  removeAt(index){

    if(!this.head){
      return ;
    }

    if(index==0){
      this.head = this.head.next;
      return;
    }

    let node = this.getAt(index-1);

    if(node == null || node.next == null){
      return null;
    }
    else{
      node.next = (node.next).next;
    }
  }

  insertAt(data,index){
    if(index == 0 ){
      if(this.head){
        let firstNode = this.getFirst();
        let newNode = new Node(data);
        this.head = newNode;
        newNode.next = firstNode;
      }
      else{
        let first = new Node(data);
        this.head = first;
      }
    }

    else{
      let node = this.getAt(index-1);

      if(!node){
        let last = this.getLast();
        last.next = new Node(data);
      }

      else{
      if(node.next){
        let nextNode = node.next;
        node.next = new Node(data);
        node.next.next = nextNode;
      }
      else{
        let newNode = new Node(data);
        node.next = newNode;
      }
    }
    }
  }

  forEach(fn){
    let node = this.head;
    let counter = 0;
    while(node){
      fn(node, counter);
      node = node.next;
      counter ++;
    }
  }

}

module.exports = { Node, LinkedList };

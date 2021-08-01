+++
title = "Understanding Linked Lists"
description = "What are linked lists? What are pointers? Here are my cliff notes"
cardImg="/img/blog/tech/linkedList.jpg"
date="2021-07-31"
author="Me"
showPost=true
categories = ["tech", "article"]
tags = ["javascript", "data structures"]
type="blog"
+++

{{< figure src="/img/blog/tech/linkedList.jpg" alt="linked list example" title="An example of a linked list (source: GeeksforGeeks, Jul 16, 2021)" >}}


## Data structure
Linked lists are data structures that are stored in dynamic memory. Each data element or Node is allocated randomly in memory. How nodes are connected are through a `next` pointer that points to the next node. A Node data structure is defined as so (using Typescript)

```
interface Node {
    val: any
    next: Node || null
    prev: Node || null // if it is a doubly linked list
}
```
There are singly linked lists which only have a pointer to the next node in memory and doubly linked lists which have pointers to both the previous and next nodes.


## Pros vs Cons
### Wins
- Maintain order:
    Linked lists maintain the order of data. Using them, you are able to maintain the order of data if that is important (soting)
- Constant time pre-pend and append
    Pre-pending and appending data are O(1) operations because we have references to the head and tail points of the linked list. In arrays pre-pending and appending could take O(n) time given that we have to double and copy all elements if we exceed the size of the array
    Linked lists are also great ways to implement stacks and queues
### Loses
- Lookup, searching, insertion, deletion all take O(n)
    We have to iterate through the entire linked list to perform these operations
- Don't know the size of the linked list if given just the head of the linked list


## Tricks
When iterating through a linked list, set a new pointer to the head as `current` and use that to traverse through it. Use a while loop where if `current !== null` we perform actions to that node and point `current` to `current.next`



+++
title = "An Intro to Binary Trees"
description = "What are binary trees, cliffnotes version"
cardImg="/img/blog/tech/binaryTree.jpg"
date="2021-07-29"
author="Me"
showPost=true
categories = ["tech", "article"]
tags = ["tree", "javascript", "recursion", "traversal"]
type="blog"
+++

{{< figure src="/img/blog/tech/binaryTree.jpg" alt="binary tree example" title="An example of a binary search tree (source: Harish Reddy Konduru, Apr 20, 2020)" >}} <br/>

## Data structure
Binary trees are awesome. They are comprise of `Node` values that point to other `Node` values. **Each node can have at most two child nodes, hence BINARY tree**. This lends itself to a tree structure that is complex but provides insightful data hiearchy. Here is what a **Node** definition looks like:

```
interface Node {
    val: any
    left: Node || null
    right: Node || null 
```
*\*Typescript definition*

### Binary Search Tree
A variation of the binary tree is the binary search tree (BST). This simply states that at our root node (the first node in the tree where all subsequent sub trees stem from), **nodes to the left of the root will all have values less than or equal to the root's value and all nodes to the right will have values greater than the root's value.**

Why is this important?

Well if we want to search for a value we can do it in O(log n) time. This means that on each search we can discard **half the elements in the tree**. Example time! If our root node is 5 and we're looking for 2, we know for a fact based on how BSTs work that we do not have to look through the right subtree, but we only need to look through the left subtree, i.e discarding the right subtree. Result? O(log n) search time.
## Pros vs Cons
### Wins
- Ordered:
    In Binary trees
- BST has O(log n) access, search, insertion, and deletion
    This comes with a caveat. If our BST is balanced, we can perform these operation on average with O(log n) time which is fast!
### Gotchas
- Unbalanced binary tree
    With the caveat mentioned above there is a case where we can potentially have a binary tree that is heavily skewed right or left i.e all values in the tree are greater than or less than the root. This would result in a tree structure that kind of resembles a linked list and performing operations would be O(n). But we do have some tree structures like the **Red-Black Tree** and **AVL tree** that are smart enough to re-balance themselves so that we can keep our O(log n) operations.

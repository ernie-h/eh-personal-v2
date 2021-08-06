+++
title = "What is Hoisting in Javascript?"
description = "Hoist your sails!"
cardImg="/img/blog/tech/hoistingJsCard.jpg"
date="2021-08-05"
author="Me"
showPost=true
categories = ["tech", "article"]
tags = ["javascript", "variables","scope", "functions"]
+++

{{< figure src="/img/blog/tech/hoistingJsCard.jpg" alt="js hoisting sails" title="A sailor hoists a nylon light air mainsail (source: Stephen Parry Sep 13th, 2017)" >}}

## What is it

Hoisting in Javascript is as simple as its dictionary definition. When a variable is decalred with `var`, at compile time that variable is _hoisted_ to the top of its function scope.

```javascript
var temp = "hi"
function display(){
  console.log(temp)
  temp = "bye"
}
display()
```

In this example one might think that the `console.log` will print "hi" as that was declared at the top most scope. But what happens under the covers compiles the following Javascript code like so:

```javascript
var temp = "hi"
function display(){
  var temp
  console.log(temp)
  temp = "bye" 
}
display()
```

As you can see, the `var` is hoisted to the top of the `display()` function scope and declared as a variable. The expected output is actually `undefined` as we set the variable to "bye" after the `console.log`.

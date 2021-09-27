+++
title = "What are rest and spread operators?"
description = "Lets spread the rest of this jam"
cardImg="/img/blog/tech/spread.jpg"
date="2021-08-06"
author="Me"
showPost=true
categories = ["tech", "article"]
tags = ["javascript", "functions","scope","operators"]
+++

{{< figure src="/img/blog/tech/spread.jpg" alt="spreading peanut butter" title="Directions on how to spread peanut butter (source: George Retseck, Apr 5th, 2018)" >}}

`spread` operator allows us to essentially spread the elements of an array or object into a new array or object. Spreading copies all elements of these data structure into a completely new one. This has its uses as a shorthand, meaning we don't need to manually create a new copy of an object, iterate through the existing one, and initialize new properties. Spreading also allows us to practice _immutability_ in javascript, so that when we re-assign a property's value, the original object's value will not be touched.

```javascript
const employee = { name: "Emily", job: "Developer" };
const copyEmployee = { ...employee };
console.log("Displaying employee");
console.log(employee);
console.log("Displaying copyEmployee");
console.log(copyEmployee);

//changing property values of copyEmployee won't mutate the original properties
copyEmployee.name = "Anne";
copyEmployee.job = "Architect";
console.log("Displaying updated copyEmployee");
console.log(copyEmployee);
console.log("Displaying employee");
console.log(employee);

Displaying employee
{ name: 'Emily', job: 'Developer' }
Displaying copyEmployee
{ name: 'Emily', job: 'Developer' }
Displaying updated copyEmployee
{ name: 'Anne', job: 'Architect' }
Displaying employee
{ name: 'Emily', job: 'Developer' }
```

`rest` is a way for us to return the remaining values of parameters into an array. If we only care about certain parameters and not the _rest_ of them, we can lump them into an array with `...<NAME>`.
This does not create copies of the elements.

```javascript
// Note it does not need to be named rest, but can be named anything
function display(a, b, ...rest) {
  console.log(a, b, rest);
}

display(9, 10, 11, 12, 13, 14, 15, 16);
// 9, 10 [11,12,13,14,15,16]
```

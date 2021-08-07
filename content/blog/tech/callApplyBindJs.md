+++
title = "What do call, apply and bind do in Javascript?"
description = "You get a function! You get a function!"
cardImg="/img/blog/tech/omniManBound.jpg"
date="2021-08-06"
author="Me"
showPost=true
categories = ["tech", "article"]
tags = ["javascript", "functions","scope"]
+++

{{< figure src="/img/blog/tech/omniManBound.jpg" alt="omni man fighting martian" title="Omin Man is bound by the Martian (source: Invincible, Mar 25th, 2021)" >}}

## this

When it comes to functions in Javascript, we are given the ability to set their context. `this` keyword is used in objects to refrence itself. It alows us to access the properties within an object's scope. So whenever a function is called, we have the `this` key word to access its properties.

## bind

`bind()` alows us to attach a `this` context to a new function. So if we had a function A with its own context, we could initialize a new function B that is bound to A and passes along a separate context:

```javascript
var doge = {
  name: "Rover",
};

var woof = function (a, b, c) {
  return this.name + " likes to " + a + ", " + b + " and " + c;
};

// attack a context of the object 'doge' to the function 'woof'
var bound = woof.bind(doge, "bark");
console.log(bound("sit", "roll over", "stand"));
```

If we call the `bound` function we see the following printed: "Rover likes to bark, sit, and roll over"

This is because within `woof` it references a `this.name`, but since we call `bound` and set its `this` context to `doge`, it now has referene to doge's `name` property. We also pass in the parameters that `woof` takes. But notice how we passed in the "bark" paramter in the initial `bind`? JS underthe hood is smart enough to keep that paramter and take in new ones, but since "stand" exceeds the third parameters `woof` can accept, it ignores "stand".

## call and apply

`call` allows us to call a method on an object and assign it a different context. We can essentiall call another objects method and set its `this` context:

```javascript
var invincible = {
  name: "Mark",
  age: 17,
  invincibleInfo: function () {
    return this.name + " is " + this.age + " years old";
  },
};

var omniMan = {
  name: "Nolan",
  age: 2000,
};
// Mark is 17 years old
console.log(invincible.invincibleInfo());
// Nolan is 2000 years old
console.log(invincible.invincibleInfo.call(omniMan));
```

Here we essentially hijacked Invincible's method `invincibleInfo` and replaced it with OmniMan's context. Instead of saying "Mark is 17 years old", we've used OmniMan's properties when we used `call` to return "Nolan is 2000 years old".

`apply` serves the same purpose as `call`, except that instead of having to pass all paramters to `call`, `apply` takes an array of parameters to call the function with:

```javascript
var invincible = {
  name: "Mark",
  age: 17,
  invincibleInfo: function (power, color) {
    return (
      this.name + " is " + this.age + " years old." +
      "He wears a " + color + " suit"
    );
  },
};

var omniMan = {
  name: "Nolan",
  age: 2000,
};
// Mark is 17 years old. He wears a yellow suit
console.log(invincible.invincibleInfo("yellow"));
// Nolan is 2000 years old. He wears a red suit
console.log(invincible.invincibleInfo.call(omniMan, "red"));
// Nolan is 2000 years old. He wears a red suit
console.log(invincible.invincibleInfo.apply(omniMan, ["red"]));
```

+++
title = "React hooks, why?"
description = "Me making sense of why React hooks are better"
cardImg="/img/blog/tech/reactHooksVsLifeCycle.jpg"
date="2021-07-27"
author="Me"
showPost=true
type = "blog"
categories = ["tech"]
tags = ["react", "javascript", "react hooks", "es6"]
+++
{{< figure src="/img/blog/tech/reactHooksVsLifeCycle.jpg" alt="react hooks comparison" title="Comparison image of React hooks and Life Cycle mehtods (source: Harsh Makadia Harsh Makadia, Apr 26, 2020)" >}}

## Old React
- Required us to have a class component extending React.Component
    - Needed this and a render() function
        - Then we could access lifecycle mehtods: componentDidMount, componentDidUpdate and componentWillUnmount
    - Overhead of working with ES6 Classes
    - Lifecycle methods are scoped to the classes
    - Components are hard to reuse so they can be deeply nested

## Hooks

- Removed the need for classes
- Can write purely functional components with Lifecycle methods!

### componentDidMount
LifeCycle with Class:
With a single dependency array, it notifies the component to only render once i.e on DOM mount.

```
import React from "react";
 
class Component extends React.Component {
  componentDidMount() {
      // Code to execute on mount
  }
 
  render() {
    return <h1>Hello World</h1>;
  }
};
```

Hooks:

```
import React, { useEffect } from "react";
 
const Component = () => {
  useEffect(() => {
    // Code to execute
  }, []);
 
  return <h1>Hello World</h1>;
};
```

## componentDidUpdate
LifeCycle with Class:
With componentDidUpdate lifecycle method will fire everytime component re-renders.

```
import React from "react";
 
class Component extends React.Component {
  componentDidUpdate() {
      // execute code
  }
 
  render() {
    return <h1>Hello World</h1>;
  }
};
```
Hooks:
No dependency array so this will fire each time the component re-renders

```
import React, { useEffect } from "react";
 
const Component = () => {
  useEffect(() => {
        //execute code
  });
 
  return <h1>Hello World</h1>;
};
```
Conditional `componentDidUpdate`:

If we want to re-render when a specific prop has changed we can add that value into the dependency array. The dependency array will trigger a re-render if any of its values changes.

Life cycle class:

```
import React from "react";
 
class Component extends React.Component {
  componentDidUpdate(prevProps) {
        if (this.props.foo !== prevProps.foo) {
            // execture code
        }
  }
 
  render() {
    return <h1>Hello World</h1>;
  }
};
```

Hooks:

```
import React, { useEffect } from "react";
 
const Component = ({ foo }) => {
  useEffect(() => {
    //execute code
  }, [foo]);
 
  return <h1>Hello World</h1>;
};
```

## componentWillUnmount

Life Cycle Class:

```
import React from "react";
 
class Component extends React.Component {
  componentWillUnmount() {
        //execute code
  }
 
  render() {
    return <h1>Hello World</h1>;
  }
};
```

Hooks:
For hooks we return a function in `useEffect` to execute code when the component is removed from the DOM

```
import React, { useEffect } from "react";
 
const Component = () => {
  useEffect(() => {
    return () => {
            //execute code
        }
  }, []);
 
  return <h1>Hello World</h1>;
};
```
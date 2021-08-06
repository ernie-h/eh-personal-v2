+++
title = "Understanding Dynamic Programming"
description = "Dynamic programming has always been something hard for me to wrap my head around... lets fix that"
cardImg="/img/blog/tech/dp.jpg"
date="2021-08-01"
author="Me"
showPost=true
categories = ["tech", "article"]
tags = ["optimization", "dynamic programming"]
type="blog"
+++

{{< figure src="/img/blog/tech/dp.jpg" alt="fibonacci dp recursive tree" title="The recursive tree of solving fibonacci, showing the sub-problems (red) that have to be recomputed (source: Avik Das, Apr 15, 2019)" >}}

Dynamic programming is an optimization technique to make our code run faster. When it comes down to it, **DP focuses on breaking down a complex problem to multiple sub-problems that lead to us to the answer.** DP problems are easy to identify when the problem you are given requires you to find the best or most optimal solution based on all possibilities. These usually require us to solve these subproblems recursively, **and DP can optimize that by making sure we don't have to solve the same sub-problem twice.**

Figuring out a DP problem is counterintuitive, meaning using traditional heruistics to solve a problem can prove complicated sooner or later In order to solve DP you need to take it step by step and identify the proper constraints, recurrence relations, base cases and areas where we can utilize memoization.

> **_Dynamic programming helps us solve recursive problems with a highly-overlapping subproblem structure._** _-Avik Das, 2019_

## Strategy

### Break problem into sub-problems

### Define a reucrrence relation

Think of a function that if called on the sub-problems identified will give you the solution you are looking for

## Heuristics to identifying/solving DP Problmes

- **Drow out the recursive tree:** When you see how each recursive call is made see if there are simliar sub-problems that are recomputed. If you notice in the recursive tree that many of the same sub-problems are appearing this calls for DP
- **Draw out the problem linearly showing each sub-problem once and have arrows pointing from each problem to their respective sub-problems, these should form a DAG**: If we map each sub-problem to their own sub-problems we should notice a directed acyclic graph structure form, which lends itself to being optimized by DP. DAGs are linearizable, meaning that we can use the result of one sub-problem to figure out the larger sub-problem. Bottom-up solutions lends itself very well here.

Sources
<https://www.freecodecamp.org/news/follow-these-steps-to-solve-any-dynamic-programming-interview-problem-cc98e508cd0e/>

<https://avikdas.com/2019/04/15/a-graphical-introduction-to-dynamic-programming.html>

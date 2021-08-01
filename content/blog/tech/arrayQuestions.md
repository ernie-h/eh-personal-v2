+++
title = "Heuristics on tackling array/string questions"
description = "Some common tactics to tackle array/string problems"
cardImg="/img/blog/tech/arrayQuestions.jpg"
date="2021-07-31"
author="Me"
showPost=true
categories = ["tech", "article"]
tags = ["javascript", "interview", "arrays", "strings", "pointers"]
type="blog"
+++

{{< figure src="/img/blog/tech/arrayQuestions.jpg" alt="pointer illustration" title="A cool pointer illustration from Hackaday (source:  Sven Gregori, Apr 19, 2018)" >}}


## Use two pointers
Try initializing two pointers. See if having these two pointers point to start, end or start and end respectively help solve the solution.

## Initialize a mid index
It might help to have a mid index to get to the center of the array and to begin the iteration. Also if you have two pointers one could iterate on the first half and the other can iterate on the second half

## Try iterating right to left
We instinctively iterate from left to right in for loops. It might help to start from the end

## Don't be afraid of while loops
We usually use `for` loops with `i` vars to iterate through an array. Those these are more intuitive, someitmes having simple while loops might make problems more digestible or obvious. They also might make sense when you have more complex iteration conditions to satisfy as opposed to making sure that our current index is less than the length of the array

## Try using mini for loops or while loops within your iteration
Usually nesting loops inside of loops is a negative sign and screems O(N^2) complexity, but if the problem is complex and you have a **finite** value you can loop over within the iteration, it might make sense to have a nested loop to satisfy that constraint. As long as you aren't iterating over **N** items again, the problem won't be O(N^2) but rather still O(N + some finite constant). This might be a heruistic that helps tremendously.
+++
title = "Differences of var, let, and const?"
description = "What are all these damn variable names"
cardImg="/img/blog/tech/omniManBound.jpg"
date="2021-08-06"
author="Me"
showPost=true
categories = ["tech", "article"]
tags = ["javascript", "functions","scope"]
+++

`let` creates a new binding for each assignment that happens to it. So if there was a for loop with a `setTimeout` on an i value, `let` keeps track of all those values becasue each time it is re-assigned it theres is a new binding. Where as for `var` there is only a single binding, which means the same variable is re-assinged each time.

`const` cannot be re-assigned once it has been initialized. If we have a for loop and use `const i = 0`, the variable i will always remain 0 and if any assignment happens a `"i" is read-only` exception will be thrown.

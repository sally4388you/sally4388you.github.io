---
layout: post
title: 'Studying Notes'
date: 2017-12-07 14:27:55 +0800
tags: Notes
color: rgb(173, 106, 156)
cover: '../assets/pics/hamlet.jpg'
excerpt: STUDYING WILL NEVER END
pic-name: "Hamlet by Olivia Knapp"
---

# CSS
### inline and inline-block

1. Difference:
* One big difference that was designed for is inline-block elements can have a width and a height.

2. Consequence:
* margin-left, margin-right, padding-left, padding-right work for **inline-block** elements but not inline elements.
* A word that has no space in between (i.e. a long word such as 'thisIsAnExampleOfAWordThatDoesntHaveSpace'), normal white-space will not work.
* The browser parse multiple `<span></span>` as a single word (even with \&nbsp; in between). The only way to let multiple span tags wrap is to change a regular span, which is an inline element by default, to an **inline-block** span so that each span can have their own width to wrap.


# PHP
### [What does a \ (backslash) do in PHP (5.3+)?](http://stackoverflow.com/questions/4790020/what-does-a-backslash-do-in-php-5-3)

Backslash will ensure that the function is from the global namespace, even if there is a function with the same name in the current namespace
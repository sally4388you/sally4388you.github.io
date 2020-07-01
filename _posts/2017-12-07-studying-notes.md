---
layout: post
title: 'Studying Notes'
date: 2017-12-07 14:27:55 +0800
tags: Notes
color: rgb(173, 106, 156)
cover: '../assets/pics/hamlet.jpg'
excerpt: ALREADY DONT KNOW WHAT THIS IS
pic-name: "Hamlet by Olivia Knapp"
---

## CSS
1. inline and inline-block

### Difference:
* One big difference that was designed for is inline-block elements can have a width and a height.

### Consequence:
* margin-left, margin-right, padding-left, padding-right work for **inline-block** elements but not inline elements.
* A word that has no space in between (i.e. a long word such as 'thisIsAnExampleOfAWordThatDoesntHaveSpace'), normal white-space will not work.
  * The browser parse multiple <span></span> as a single word (even with \&nbsp; in between). The only way to let multiple span labels wrap is to change span to an **inline-block** span, which is an inline element by default, so that each span can have their own width to wrap.


## PHP
1. [What does a \ (backslash) do in PHP (5.3+)?](http://stackoverflow.com/questions/4790020/what-does-a-backslash-do-in-php-5-3)
反斜杠在PHP里面做了什么

Putting it there will ensure that the function called is from the global namespace, even if there is a function by the same name in the current namespace. 转义为全局函数？？并不知道专用名词是什么
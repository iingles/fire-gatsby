---
title: Research and Learning
date: "2021-02-11T17:30:03.284Z"
description: "Typescript"
---

# Typescript


## What is TypeScript?

Javascript is a "weakly-typed" language.  That is, there are no data types declared while writing code.  Instead, the browser sets type implicitly or by "coercion", usually through the context of the type of data that it "thinks" is intended to be used - such as a number, a string, or a boolean.  

This weak typing can cause all sorts of problems when it comes to debugging.  For example, you could pass a value into a function, expecting it to return a number - but for some reason the browser interpreted the number as a string; so performing mathematical operations on it don't turn out as intended.  It can also cause problems when you are trying to add or update a record in a database.  The database schema might be configured to only accept an integer, but you pass it a string instead and it results in an error.

Typescript is a superset of Javascript that allows for more strongly-typed language.  All Javascript is valid Typescript.  With Typescript,  you can directly define the types of data that you're passing around, providing for stronger error control and easier debugging. 


## How does TypeScript help developers? Why is it a tool worth considering?

Having solid data types can help a developer identify problems right away in the code instead of finding them later on, or instead of forcing the developer to go through lines and lines of code trying to figure out where the problem is.  In the long run it can save a lot of time in debugging.


## What is the difference between code compliation vs code transpilation?

A "compiled" language such as Java or C++ compiles all of the high-level code down to machine-readable code that is directly readable by the computer.  "Transpiling" code referrs to the process of taking code from one language and "translating" it into another language.  In the case of Typescript, the transpilation process takes the Typescript and translates it to the equivalent code in a given version of Javascript.

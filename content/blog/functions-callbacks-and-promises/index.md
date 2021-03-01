---
title: Functions, Callbacks, and Promises
date: "2021-01-29T17:30:03.284Z"
description: "Here are some of Javascript's essential subcomponents."
---

# Functions
## How to declare a function (3 ways)

In Javascript, functions can be declared like so:

1. By using the **function** keyword: 

    `function myFunc() {...}`

2. By assigning the function to a value (called a _function expression_): 
    
    `const myFunc = function() {...}`

3. By using shorthand in an object literal:

    ```
    const object {
        funcOne() {},
        funcTwo() {},
        ...
    }

    ```

## How to return a value from a function

The most straightforward way to return a value from a function is to use the **return** keyword:

```
    function myFunction( param ) {
        let i = param += 1

        return i
    }
```

But if you're using ES6 syntax and arrow functions, you can also return a value like so:

`param => param += 1`

## How to accept a value into a function

Functions accept values through **parameters**:

```
function myFunction(param1, param2) {
    // do something...
}
```

which,  in ES6, can be used with arrow functions like this (if there is only 1 parameter):

```
param => {
    // do something...
}
```

## Callbacks
What is a callback? How do they work? When might you use one in your own code?

A _callback_ is a function that is passed as a parameter into another function.  The "parent" or "higher order" function _calls back_ to the callback function.  They can by synchronous, or executed immediately; or, more commonly, they can be asynchronous, or executed after some other action - such as a callback executed inside of a `then()` block.  Callbacks are generally used when a piece of code needs to be executed after another piece of code; or in other words after another task has been completed.

## Promises
What is a promise? How do they work? When might you use on in your code? 

In Javascript, a _promise_ represents either the completion or failure of an asynchronous task.  It can allow you to work with a sort of "placeholder" value for data that might not yet be compiled or fully retrieved.  A promise can be one of three states:  

1. _pending_
2. _fulfilled_
3. _rejected_

_Pending_ promises can be either _fulfilled_ with a value or _rejected_ with some error.  Each option has associated handlers that can be called when a given condition is met.

Promises are most commonly used when retrieving or compling data.  A basic promise can be constructed using Javascript's built-in **Promise** object, like so:

```
const loadVideos = new Promise((resolve, reject) => {

    data.forEach(doc => {
            vm.videos.push({id: doc.id, ...doc.data()})

            if (count == data.docs.length - 1) resolve()     

            count += 1
        })                        
    })

```

This example, from a Vue/Firebase project, shows how you can resolve a promise when the last element of an array of called data is reached.  This app later goes on to set a "loading" state, as well as a "no results" state on resolution of the promise:

```
loadVideos.then(()=> {
                    
        if (vm.videos.length == 0) {
            vm.noResults = true
            vm.loading = false
        }

        if (this.$route.query.id !== undefined) {
            const vid = vm.videos.filter(obj => obj.id === this.$route.query.id)

            vm.playVideo(vid[0].url)
        }

        vm.loading = false
    })
```


## What is the async, await syntax? How does it work?  Why is the async, await syntax helpful?

According to MDN, the **async, await** syntax enable asynchronous, promise-based behavior to be written in a cleaner style than explicitly configured promise chains.
Async/await can be used to clean up code that has endless *then* blocks.

the function 

```
myFunc( options ) {
    const url = `https://someurl.com`

    return fetch(url, options)
    .then(res => res.data)
    .then(resData => resData.data)
    .catch(err => console.error(err))
}

```

can be simplified to

```
async myFunc( options ) {
    const url = `https://someurl.com`
    const response = await fetch(url, options)

    return response.data()
}
```

In some ways it's a matter of preference - both blocks of code do the same thing; it's just that the second one is easier to read and therefore easier to use.  
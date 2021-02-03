---
title: Unit Testing
date: "2021-02-03T17:30:03.284Z"
description: "What is Unit Testing?"
---

## What is Unit Testing?  What is a "Unit?"

We know what "testing" means, but what is a "unit"?  When it comes to computer programming, you could define a "unit"
as the smallest piece of code that can be tested on it's own - a logical subroutine or module that isn't useful if it is broken down any further.  __Unit Testing__ is a way of testing these individual units of code can be evaluated to be sure that they have the desired output and functionality.

## What is Test Driven Development?

__Test Driven Development__ is where you use __Unit Tests__ to test the functionality of a module before implementing any actual production code.  Modules are repeatedly tested against a variety of test cases to see where the tests fail; and then code is written that passes all of the tests.  Test Driven Development often requires refactoring code throughout a developing codebase as new tests are devised and new conditions are implemented.  Repetitive code is eliminated, and code is moved to places where it makes the most logical sense.  

## Why would you practice Test Driven Development?  What are the advantages?

Test Driven Development greatly increases the readability, reliability, and maintainability of the code.  It helps developers follow the __DRY__ (__D__ on't __R__ eapeat __Y__ ourself) paradigm and write "cleaner" code.  By ensuring that further additions to the code base also pass the tests, developers can be sure that new code won't alter the functionality of the system elsewhere.  And the more logical the code, the more concise it tends to be, increasing the readability.

## What are the disadvantages of Test Driven Development?

The biggest disadvantage is the additional time that it takes to write the tests- it can be a very slow process. Using test driven development when implementing a new feature could also lead to problems when the code for the new feature doesn't "want" to pass the unit tests.  It can also be difficult to change the tests to meet new project requirements. 




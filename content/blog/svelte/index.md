---
title: Svelte
date: "2021-02-24T17:30:03.284Z"
description: "Answering Svelte questions"
---


The first thing that he goes over is the importance of reactive programming, using spreadsheets as an initial example.  Reactive programming is about data flow.  
React, a libary developed by Facebook, introduced a standard for reactive pattern programming.  React was the first library to use the virtual DOM.  React's job
is to reconcile the information that became first with that that came after.  He points out the inefficiencies of using a virtual DOM.

Another thing that stood out to me is how bloated React is compared to how Svelte can be.  Svelte manipulates the DOM directly and doesn't rerun all of the methods like
React does looking for updates to the state. This makes Svelte a lot faster than an application built around a virtual DOM.
Svelte doesn't need to use intermediate code between the event and keeping track of a value; it can directly use the "bind" operator.
You can also use Svelte in SSR mode, which increases its versatality.

Finally, one of the key concepts around Svelte is its simplicity.  That is, you can build it around your needs instead of trying to have a one-size-fits-all framework.
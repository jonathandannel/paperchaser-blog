---
title: 'Adding static type-checking to an existing app'
date: '2019-07-17T22:12:03.284Z'
description: A first hand account of what it's like to migrate a 60,000 line production app to Typescript.
author: Jonathan Dannel
---

## Typescript

If you're a developer that works with Javascript in any sense, you've likely already read numerous articles extolling (or admonishing) the virtues of Typescript. Chances are you've tried it, but have yet to adopt it in a meaningful way (i.e. in _real life_ projects) It seems to be one of those love it or hate it relationships. The purpose of this post is to offer a transparent look into what it's actually like to migrate a large scale production app from Javascript to Typescript.

## A little bit of background

Our team at [Clausehound](https://clausehound.com) prides itself in staying current and up-to-date with new, cutting edge tech in the Javascript ecosystem. We have historically been early adopters of new patterns, be it observables, immutable data structures, the latest ECMA spec (we're especially fond of the the pipeline `|>` operator, more on that another time), React hooks, or the blessing that is GraphQL. Yet, when it came to Typescript -- despite the incredible traction it seems to have been picking up -- we have always been a little hesitant.

##### It just seemed like a lot of work. We already have a lot to do.

Our app has gone through endless iterations over the course of its lifespan in these past 5 or 6 years. The codebase for our front end, especially -- written entirely in React -- despite our constant and diligent pruning, contains hundreds of components, actions, many large reducers, and pages upon pages of handlers. **Keeping all these moving parts in sync with one another takes a lot of work.**

Part of being an agile team means putting client-facing requests first, which can also mean less time for testing and lots of frustrating man hours being spent on debugging. Oh, debugging -- we spend a **lot** of time debugging. Once we had finally taken a step back after the three month long process of migrating our mostly RESTful API to GraphQL (and reducing load/query times significantly), we thought to ourselves: _Why stop here?_

There was so much left to clean up. Our queries were a lot cleaner and everyone was so much more productive, but we were still spending hours upon hours debugging strange, unchecked behaviors in our half-legacy UI. Seeing the still-burgeoning success of Typescript, the choice was easy. Our small team would embark on the daunting task of adding static types to our app with Typescript.

## The first step is always the hardest

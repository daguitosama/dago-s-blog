---
draft: false
title: Making my own pronunciation app (kind of)
description: The story of how i made my own pronunciation assistant app
is_feedable: true
uuid: 7f0821d9-4e65-46c4-996a-fe4a275477b6
date: Wed Nov 30 00:25:49 CST 2022
head : 
    meta: 
        - property: 'og:title'
          content: "Making my own pronunciation app (kind of)"
        - property: 'og:description'
          content: 'Dago A Carralero Personal Blog'
        - property: 'og:image'
          content: 'https://localhost/img/social.jpg'
        - property: 'og:site_name'
          content: "Dago's Blog"
        - property: 'twitter:card'
          content: 'summary_large_image'
        - property: 'twitter:title'
          content: "Making my own pronunciation app (kind of)"
        - property: 'twitter:image'
          content: 'https://localhost/social.jpg'

---

# Making my own pronunciation app (kind of)

::date_and_tags
---
date: "29 Nov 2022"
tags: ['craft', 'curiosity', 'bash']
---
::



::youtube-video
---
videoId: 9TNrvH_OzCY
---
::

I recently decided to deep dive into English, my first language is Español. I am comfortable reading stuff and talking to people, but I feel a strong need to get more effective at communicating with others (future Dago included) and to give more reel to the machine to operate with.

I have been looking up a quick way to learn new English words, not just their meaning, but actually how to spell them. I came across the nice Mate app, a little translator app that lives in your menu bar, is convenient, (hard to remember) but has its own global keyboard shortcut. I mean, it's a very good app, but it's not exactly my ideal use case, I need to copy the word, put it on the box, hit the spell button, which then hits the wire, and a few milliseconds later you have a good pronunciation, that's way too many steps and context-switching for this human, this human knows people can do magic with a few bash spells.

After a very productive duckduckgo session, I came across the Apple Speech Synthesis Manager, aka the `say` command. It gives you access to all those languages that Voice Over uses, looks like there are not just new emojis in those 12 GB updates after all.

Next step was to craft the spell:
```bash
 # there is a bunch of voices & lang choices
 # Samantha it's my personal favorite
 sam_tellme(){
    say -v Samantha --rate 80 "$1"
 }
 # learn more:
 # man say
```

Hey fair enough, no more round trips to the internet, just grab that terminal and tell Sam to tell me the thing, nice. The odds are I pretty much have that terminal open anyway.

Now with my awesome personal English pronunciation assistant, I decided to go for an interesting title, I choose [On Web Typography](https://abookapart.com/products/on-web-typography) by Jason Santa Maria, and dam what a nice one, it hits you at the very beginning, comments on that in the future. I just went full-screen about it. My first linguistic inquiry was how it sounds the word `savory`. With the book fully deployed, I needed to go to another desktop window, grab the Terminal, and ask Sam. Mister Context Switching while mild, was still there.


## The last mile

Spotlight is always there, it doesn't care if you are using another app full screen at all, I find myself typing at the best GitHub command-pallette-style the following: `terminal > sam_tell_me "savory"` but yeah that doesn't work, but hey, that was the realization! I didn't find any way to accomplish that task on the Spotlight but a nice flashback came across, a sentence of Scott on the Syntax Podcast, an [episode](https://syntax.fm/show/511/supper-club-raycast-with-thomas-mann) about [Raycast](https://www.raycast.com), "a modern Alfred kind of thing", Scott said something like: 

> Hey man, in 5 minutes I was making my own custom plugin to fetch stuff

I took it from there!

I haven't had a MacBook back then when I listen to the pod, a pod about an app that only works on a machine that I never used. Well, it was a fun listen then, and a very useful now. Raycast interface works exactly like Spotlight, but you can hack it pretty much how you want. The next natural question: how to run custom commands? That led me to the [scripts-commands-tutorial](https://www.raycast.com/blog/getting-started-with-script-commands), and in a couple of minutes, I achieved the final setup, as you might see in the following snippet.


```bash
#!/bin/bash

# Required parameters:
# @raycast.schemaVersion 1
# @raycast.title Sam tell me 
# @raycast.mode silent

# Optional parameters:
# @raycast.icon 🗣
# @raycast.argument1 { "type": "text", "placeholder": "Expression" }

# Documentation:
# @raycast.description Make Samantha tell me things
# @raycast.author Dago

say "$1" -v Samantha --rate 80

```


Bang, there it goes my first story on the web.

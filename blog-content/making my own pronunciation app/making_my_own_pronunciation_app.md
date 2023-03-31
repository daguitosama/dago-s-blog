# Making my own pronunciation app (kind of)

```md tags
craft, curiosity, bash
```
I recently decided to deep dive into English, my first language is Español. I am comfortable reading stuff and talking to people, but I feel a strong need to get more effective at communicating with others (future Dago included) and to give more reel to the machine to operate with.

I have been looking up a quick way to learn new English words, not just their meaning, but actually how to spell them. I came across the nice Mate app, a little translator app that lives in your menu bar, is convenient, (hard to remember) but has its own global keyboard shortcut. I mean, it's a very good app, but it's not exactly my ideal use case, I need to copy the word, put it on the box, hit the spell button, wish then hits the wire, and a few milliseconds later you have a good pronunciation, that's way too many steps and context-switching for this human, this human knows people can do magic with a few bash spells.

After a very  productive duckduckgo session, I came across the Apple speech synthesis api#todo_link aka the `say` command. It gives you access to all those languages that Voice Over uses, looks like there are not just new emojis in those 12 GB updates after all.

Next step let's craft that spell:
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

Now with my awesome personal English pronunciation assistant, I decided to go for an interesting title, I choose On Web Typography by Jason Santa Maria #todo_link, and dam what a nice one, it hits you at the very beginning, comment's on that in the future. I just went full screen about it, my first linguistic inquiry was how it sounds the word `savory`. With the book on the fully depoyed, I needed to go to another desktop window, grab the Terminal, and ask Sam, 	again the context switching although better, was still there.

## The last mile:
Spotlight is always there, it doesn't care if you are using another app full screen at all, I find myself typing at the best GitHub command-pallette-style the following: `terminal > sam_tell_me "savory"` but yeah that doesn't work, but hey, that was the realization! I didn't find any way to accomplish that task on the Spotlight but a nice flashback came across, a sentence of Scott on the Syntax Podcast#todo_link_to_episode talking about Raycast#todo_link_to_home, "a modern Alfred kind of thing", Scott said something like: 

>"Hey man, in 5 minutes I was making my own custom plugin to fetch stuff" 

I could take it from there. 

I haven't had a MacBook back then when I listen to the pod, a pod about an app that only works on a machine that I never  used. Well it was a fun listen then, and a very useful listen now. Raycast interface works exactly like the Spotlight, but you can hack it pretty much how you want. The next natural question: how to run custom commands? That led me to the [scripts-commands-tutorial](https://www.raycast.com/blog/getting-started-with-script-commands), and in a couple of minutes, I achieved the final setup, as you might see in the following snippet.


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
todo save it on a gist
<script src="https://gist.github.com/daguitosama/b3c45a813d126c162dd1aa0d15d238a2.js"></script>


### Demo
youtube link




## Notes
Type book link:
https://abookapart.com/products/on-web-typography
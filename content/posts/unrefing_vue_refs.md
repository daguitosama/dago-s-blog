---
draft: false
title: Un-refing Vue Refs
description: How to copy values from reactive objects with out reactivity
is_feedable: true
uuid: 7f0821d9-4e65-46c4-996a-fe4a27547b45
date: Wed Nov 30 00:25:49 CST 2022
head : 
    meta: 
        - property: 'og:title'
          content: "Making my own pronunciation app (kind of)"
        - property: 'og:description'
          content: 'Dago A Carralero Personal Blog'
        - property: 'og:image'
          content: 'https://dago-s-blog.pages.dev/img/social.jpg'
        - property: 'og:site_name'
          content: "Dago's Blog"
        - property: 'twitter:card'
          content: 'summary_large_image'
        - property: 'twitter:title'
          content: "Making my own pronunciation app (kind of)"
        - property: 'twitter:image'
          content: 'https://dago-s-blog.pages.dev/img/social.jpg'

---

# Making my own pronunciation app (kind of)

::date_and_tags
---
date: "29 Nov 2022"
tags: ['vue', 'javascript']
---
::

Amazing [hack](https://stackoverflow.com/questions/47216091/retrieve-original-target-object-from-existing-proxy-instance#60875493) discovery this time. Just make use of the following function. Take in mind that `reactive` objects in Vue 3 are just fancy [proxies](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy). This is how you extract the essence of it. 

```js
function pureValueFromProxy(proxy = {}) {
    return JSON.parse(JSON.stringify(proxy));
}
```


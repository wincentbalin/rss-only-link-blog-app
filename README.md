# Authoring web app for RSS-only link blog

This project should facilitate authoring of posts to the [RSS-only link blog](https://github.com/wincentbalin/rss-only-link-blog).

But, alas, as the article [Receiving shared data with the Web Share Target API](https://developer.chrome.com/docs/capabilities/web-apis/web-share-target) tells, the field `url` int the `share_target` object is always empty in Android. So this app will not work until [this bug](https://bugs.chromium.org/p/chromium/issues/detail?id=789379) is fixed.
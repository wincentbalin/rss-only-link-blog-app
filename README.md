# Authoring web app for RSS-only link blog

This project facilitates authoring of posts to the [RSS-only link blog](https://github.com/wincentbalin/rss-only-link-blog).

# Usage

Simply copy all files to another server (adjust the paths and the app URL in `manifest.json` and `sw.js` in this case), or simply use the [default instance](https://wincentbalin.github.io/rss-only-link-blog-app/). Open the URL of the app instance and install it.

Then share some page or article from whatever app to the **Save link** app (you will find it by its icon). If not done yet, configure the URL of the link blog instance and its password; if the URL is correct, you will see the blog contents below; both URL and password will be saved, so you will not have to enter them anymore. Redact the description and maybe the link itself and press the button **Post**.

The blog replies either with a smiley **:-)** or an error message, and returns to the app afterwards.

Even if not installed, the page can be used for link posting too. In this case, you will paste the link into the appropriate input element, and write the description then.

# Security

The app stores the blog password in the browser local storage **unencrypted**! Do not use it on a device you do not trust! **You have been warned**.

# License

[Apache 2.0](LICENSE)

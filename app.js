var localStoragePresent = 'localStorage' in window;
var searchParamsPresent = document.location.search.length > 0;

function setBlogUrl() {
    var url = document.querySelector('#blog-url').value;
    document.querySelector('form').setAttribute('action', url);
    document.querySelector('#blog').setAttribute('src', url);
}

function saveBlogUrlAndPassword() {
    if (!localStoragePresent) {
        alert('Your browser does not support saving blog parameters!');
        return;
    }

    localStorage.blogUrl = document.querySelector('#blog-url').value;
    localStorage.blogPassword = document.querySelector('#blog-password').value;
}

function loadBlogUrlAndPassword() {
    if (!localStoragePresent) {
        alert('Your browser does not support loading blog parameters!');
        return;
    }

    var url = localStorage.blogUrl;
    document.querySelector('#blog-url').value = url ? url : '';
    var password = localStorage.blogPassword;
    document.querySelector('#blog-password').value = password ? password : '';

    setBlogUrl();
}

function saveBlogUrlAndPasswordAfterSettingBlogUrl() {
    setBlogUrl();
    saveBlogUrlAndPassword();
}

function loadShareTargetParams() {
    var params = new URLSearchParams(document.location.search);
    document.querySelector('#text').value = params.get('title') || '';
    document.querySelector('#url').value = params.get('url') || '';
}

document.querySelector('#blog-url').addEventListener('blur', (event) => {
    saveBlogUrlAndPasswordAfterSettingBlogUrl();
});

document.querySelector('#blog-password').addEventListener('blur', (event) => {
    saveBlogUrlAndPassword();
});

document.querySelector('form button').addEventListener('click', (event) => {
    saveBlogUrlAndPasswordAfterSettingBlogUrl();
});

document.querySelector('form').addEventListener('submit', (event) => {
    if (/^http:/.test(document.querySelector('form').action)) {
        event.preventDefault();
        alert('The page uses insecure connection!\nPlease use an address starting with https://');
    }
});

document.addEventListener('DOMContentLoaded', (event) => {
    loadBlogUrlAndPassword();
    if (searchParamsPresent) {
        loadShareTargetParams();
    }
});

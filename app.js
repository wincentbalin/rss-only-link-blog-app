var localStorageAvailable = 'localStorage' in window;

function saveBlogUrlAndPassword() {
    if (!localStorageAvailable) {
        alert('Your browser does not support saving blog parameters!');
        return;
    }

    localStorage.blogUrl = document.querySelector('#blog-url').value;
    localStorage.blogPassword = document.querySelector('#blog-password').value;
}

function loadBlogUrlAndPassword() {
    if (!localStorageAvailable) {
        alert('Your browser does not support loading blog parameters!');
        return;
    }

    var url = localStorage.blogUrl;
    document.querySelector('#blog-url').value = url ? url : '';
    var password = localStorage.blogPassword;
    document.querySelector('#blog-password').value = password ? password : '';
}

document.querySelector('#blog-url').addEventListener('blur', (event) => {
    document.querySelector('form').setAttribute('action', event.target.value);
    saveBlogUrlAndPassword();
});

document.querySelector('#blog-password').addEventListener('blur', (event) => {
    saveBlogUrlAndPassword();
});

document.querySelector('form').addEventListener('submit', (event) => {
    event.preventDefault();
    if (/^http:/.test(document.querySelector('form').action)) {
        alert('The page uses insecure connection!\nPlease use an address starting with https://');
        return false;
    }
    saveBlogUrlAndPassword();
});
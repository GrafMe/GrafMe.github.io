window.onload = function () {
    entrada = window.location.search.replace('?', '');

    let a = document.querySelectorAll('aside a:nth-child(n+2), nav a');
    for (var i = 0; i < a.length; i++) {
        a[i].href += window.location.search;
    }
}

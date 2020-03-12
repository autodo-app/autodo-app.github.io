if (localStorage.getItem('cookieSeen') != 'shown') {
    setTimeout(function() {
        document.getElementById('cookie-banner').classList.add('show');
        document.getElementById('cookie-banner').classList.remove('hide');
        console.log('here');
    }, 2000);
    // localStorage.setItem('cookieSeen','shown')
}

document.getElementById('close').onclick = function() {
    document.getElementById('cookie-banner').classList.add('hide');
    document.getElementById('cookie-banner').classList.remove('show');
}
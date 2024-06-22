document.addEventListener("DOMContentLoaded", function () {
    const cookieBanner = document.getElementById('cookie-banner');
    const acceptCookiesButton = document.getElementById('accept-cookies');
    const declineCookiesButton = document.getElementById('decline-cookies');

    const tempIdentifier = sessionStorage.getItem('tempIdentifier') || getCookie('tempIdentifier');

    if (!tempIdentifier) {
        cookieBanner.classList.add('show');
    }

    acceptCookiesButton.addEventListener('click', function () {
        sessionStorage.setItem('tempIdentifier', 'accepted');
        setCookie('tempIdentifier', 'accepted', 1);
        cookieBanner.style.display = 'none';
        enableGoogleAnalytics();
    });

    declineCookiesButton.addEventListener('click', function () {
        sessionStorage.setItem('tempIdentifier', 'refused');
        setCookie('tempIdentifier', 'refused', 1);
        cookieBanner.style.display = 'none';
        disableGoogleAnalytics();
    });

    function setCookie(name, value, days) {
        const expires = new Date();
        expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000);
        const sameSite = 'None';
        const secure = window.location.protocol === 'https:' ? '; Secure' : '';  
        document.cookie = `${name}=${value}; expires=${expires.toUTCString()}; path=/; SameSite=${sameSite}${secure}`;
    }

    function getCookie(name) {
        const cookieName = name + '=';
        const cookies = document.cookie.split(';');
        for (let i = 0; i < cookies.length; i++) {
            let cookie = cookies[i].trim();
            if (cookie.indexOf(cookieName) === 0) {
                return cookie.substring(cookieName.length, cookie.length);
            }
        }
        return '';
    }

    function enableGoogleAnalytics() {
        const gaScript = document.createElement('script');
        gaScript.async = true;
        gaScript.src = 'https://www.googletagmanager.com/gtag/js?id=G-WX0LN2M6C1';
        document.head.appendChild(gaScript);

        window.dataLayer = window.dataLayer || [];
        function gtag() { dataLayer.push(arguments); }
        gtag('js', new Date());
        gtag('config', 'G-WX0LN2M6C1');
        console.log('Google Analytics enabled');
        
    }
    
    function disableGoogleAnalytics() {
        console.log('Google Analytics disabled');
    }
    
});

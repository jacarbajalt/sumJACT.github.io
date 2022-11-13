//SplashScreen
const splash = document.querySelector('.splash');

document.addEventListener('DOMContentLoaded', (e) => {
    setTimeout(() => {
        splash.classList.add('display-none');
    }, 2000);
});
const header = document.querySelector('header');

window.onscroll = function() {
    var top=window.scrollY;
    console.log(top);
    if(top>=50){
        header.classList.add('active');
    }else{
        header.classList.remove('active');
    }
}

if('serviceWorker' in navigator){
    navigator.serviceWorker.register('./sw.js')
    .then(res => console.log('service worker cargado correctamente', res))
    .catch(err => console.log('service worker no se ha podido registrar', err))
}
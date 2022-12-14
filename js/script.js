window.onload = function () {
    document.body.classList.add('loaded_hiding');
    window.setTimeout(function () {
        document.body.classList.add('loaded');
        document.body.classList.remove('loaded_hiding');
    }, 500);
}

let stars =  document.getElementById('stars');
let moon =  document.getElementById('moon');
let mountains_behind =  document.getElementById('mountains_behind');
let text =  document.getElementById('text');
let btn =  document.getElementById('btn');
let mountains_front =  document.getElementById('mountains_front');
let header = document.querySelector('header');

window.addEventListener('scroll', function(){
    let value = window.scrollY;
    stars.style.left = value * 0.25 + 'px';
    moon.style.top = value * 1.05 + 'px';
    mountains_behind.style.top = value * 0.5 + 'px';
    mountains_front.style.top = value * 0 + 'px';
    text.style.marginRight =  value * 4 + 'px';
    text.style.marginTop =  value * 1.5 + 'px';
    btn.style.marginTop =  value * 1.5 + 'px';
    header.style.top =  value * 0.5 + 'px';

})


$('.gallery').magnificPopup({
    delegate: 'a',
    type:'image',
    gallery: {
        enabled:true
    }
})

var vid1 = document.getElementById("myVideo");
vid1.playbackRate = 0.3;
var vid2 = document.getElementById("myVideo_footer");
vid2.playbackRate = 0.5;

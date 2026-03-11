//ハンバーガーボタン開閉
const hamburger_icon = document.querySelector('.hamburger-icon');
const g_nav = document.querySelector('.g-nav');

console.log(g_nav);
console.log(hamburger_icon);

hamburger_icon.addEventListener('click', () =>{
    hamburger_icon.classList.toggle('is-open');
    g_nav.classList.toggle('is-open');
});
//ハンバーガーボタン開閉
const hamburger_btn = document.querySelector('.hamburger-btn');
const g_nav = document.querySelector('.g-nav');

console.log(g_nav);
console.log(hamburger_btn);

hamburger_btn.addEventListener('click', () =>{
    hamburger_btn.classList.toggle('is-open');
    g_nav.classList.toggle('is-open');
});
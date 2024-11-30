/* displayed value can't get update otherwise */
document.documentElement.classList.add('js');
addEventListener('input', e => {
    let t = e.target;
    t.parentNode.style.setProperty('--val', +t.value);
});